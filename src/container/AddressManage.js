let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let {Dialog,DeleteDialogContent,DialogFooter} = require('../components/Dialog');

import addressManageStyle from '../css/addressManageStyle.css';
import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import {dialogActions} from '../redux/actions/dialogActions';


const AddressManage = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/AddressManage');
    },
    showAddressDialog:function(){
        this.props.dialogActionKeys.showDialog();
    },
    render: function () {
        let addressNodes = this.props.address.profile.map((item,index)=>{
            return(
                <li key={index} className={addressManageStyle.addressNode}>
                    <div className={addressManageStyle.receiver}>
                        <p className={addressManageStyle.consignee}>{item.consignee}</p>
                        <p className={addressManageStyle.telephone}>{item.telephone}</p>
                        {item.label?<img src={item.labelImg} className={addressManageStyle.labelPic}/>:''}
                    </div>
                    <div className={addressManageStyle.location}>
                        {item.address}
                    </div>
                    <div className={addressManageStyle.operate}>
                        <div>
                        {item.default?
                            <img src="src/images/shoppingcart_choose_s.png" className={addressManageStyle.defaultPic}/>:
                            <img src="src/images/shoppingcart_choose_n.png" className={addressManageStyle.defaultPic}/>}
                            <p className={addressManageStyle.operate_default}>默认地址</p>
                        </div>
                        <p className={addressManageStyle.operate_amend}>
                            <span className={addressManageStyle.operate_edit}>编辑</span>
                            <span className={addressManageStyle.operate_delete} onClick={this.showAddressDialog}>删除</span>
                        </p>
                    </div>
                </li>
            )
        });
        return (
            <div className={addressManageStyle.addressManage}>
                <div className={addressManageStyle.title}>地址管理</div>
                <ul>
                    {addressNodes}
                    <div className={addressManageStyle.newBuiltAddress}>
                        新建地址
                    </div>
                </ul>
                {this.props.showDialog.showDialog?
                    (<div><Dialog>
                        <DeleteDialogContent content={{text:'是否确定删除此地址',operate:'删除'}}
                                             dialogActionKeys={this.props.dialogActionKeys}/>
                        <DialogFooter footer={{text:'取消'}}
                                      dialogActionKeys={this.props.dialogActionKeys}/>
                    </Dialog>
                    <div className={addressManageStyle.dialog_mask}></div></div>):''}

            </div>
        );
    }
});
function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        showDialog:state.showDialog,
        address:state.address,
    }
}
function mapDispatchToProps(dispatch){
    return{
        dialogActionKeys : bindActionCreators(dialogActions,dispatch),
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(AddressManage);