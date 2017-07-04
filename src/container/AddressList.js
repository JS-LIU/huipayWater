let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import {mapActions} from '../redux/actions/mapActions';
import addressListStyle from '../css/addressListStyle.css'

const Address = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/Address');
    },
    setAddress:function(address){
        return ()=>{
            this.props.mapActionKeys.setLocationAddress(address);
        }
    },
    render: function () {
        let markUrl = this.props.historyUrls.mark;
        let addressNodes = this.props.address.profile.map((item,index)=>{
            return(
                <li key={index} className={addressListStyle.addressNode} onClick={this.setAddress(item.address)}>
                    <Link to={markUrl}>
                        <div className={addressListStyle.linkman}>
                            {item.default?
                                <img src="src/images/address_lable_default.png" className={addressListStyle.default_pic}/>:''}
                            <p className={addressListStyle.consignee}>{item.consignee}</p>
                            <p className={addressListStyle.telephone}>{item.telephone}</p>
                            {item.label?<img src={item.labelImg} className={addressListStyle.default_pic}/>:''}
                        </div>
                        <div className={addressListStyle.location}>
                            {item.address}
                        </div>
                    </Link>
                </li>
            )
        });
        return (
            <div className={addressListStyle.address}>
                <div className={addressListStyle.title}>选择收货地址</div>
                <div className={addressListStyle.hand_input}>
                    <input type="text" placeholder="请输入你的收货地址" className={addressListStyle.address_input}/>
                </div>
                <ul className={addressListStyle.address_list}>
                    {addressNodes}
                </ul>
            </div>
        )
    }
});
function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        map:state.map,
        address:state.address,
    }
}
function mapDispatchToProps(dispatch){
    return{
        mapActionKeys : bindActionCreators(mapActions,dispatch),
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(Address);