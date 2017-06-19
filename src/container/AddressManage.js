let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import {addressActions} from '../redux/actions/addressActions';
import addressManageStyle from '../css/addressManageStyle.css'

const AddressManage = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/Address');

    },
    render: function () {
        let addressNodes = this.props.address.profile.map((item,index)=>{
            return(
                <li key={index} className={addressListStyle.addressNode} onClick={this.setAddress(item.address)}>
                    <Link to="">
                        <div>
                            <p className={addressListStyle.consignee}>{item.consignee}</p>
                            <p className={addressListStyle.telephone}>{item.telephone}</p>
                            {item.label?<img src={item.labelImg} className={addressListStyle.default_pic}/>:''}
                        </div>
                        <div className={addressListStyle.location}>
                            {item.address}
                        </div>
                        <div className={addressManageStyle.operate}>
                            <p className={addressManageStyle.operate_default}>
                                {item.default?
                                    <img src="src/iamges/shoppingcart_choose_s.png" className={addressManageStyle.default}/>:
                                    <img src="src/images/shoppingcart_choose_n.png" className={addressManageStyle.default}/>}
                                    设为默认
                            </p>
                            <p className={addressManageStyle.operate_amend}>
                                <span className={addressManageStyle.operate_edit}>编辑</span>
                                <span className={addressManageStyle.operate_delete}>删除</span>
                            </p>
                        </div>
                    </Link>
                </li>
            )
        });
        return (
            <div className={addressManageStyle.addressManage}>
                {addressNodes}
            </div>
        );
    }
});
function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        address:state.address,
    }
}
function mapDispatchToProps(dispatch){
    return{
        addressActionKeys : bindActionCreators(addressActions,dispatch),
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(AddressManage);