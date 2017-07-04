let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let {Dialog,NewAddressDialogContent} = require('../components/Dialog');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import newBuildAddressStyle from '../css/newBuildAddressStyle.css';
import {dialogActions} from '../redux/actions/dialogActions';

const NewBuildAddress = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/NewBuildAddress');
    },
    render: function () {
        return (
            <div className={newBuildAddressStyle.newBuildAddress}>
                <div className={newBuildAddressStyle.title}>新增地址</div>
                <div className={newBuildAddressStyle.connect}>
                    <div className={newBuildAddressStyle.consignee}>
                        <p className={newBuildAddressStyle.consignee_name}>
                            收货人：
                            <input type="text" className={newBuildAddressStyle.consignee_input}/>
                        </p>
                        <p className={newBuildAddressStyle.consignee_phone}>联系方式：
                            <input type="text" className={newBuildAddressStyle.consignee_input}/></p>
                    </div>
                </div>
                <div className={newBuildAddressStyle.area}>所在区域：
                    <p className={newBuildAddressStyle.areaDetail}></p>
                </div>
                <div className={newBuildAddressStyle.area}>详细地址：
                    <p className={newBuildAddressStyle.areaDetail}></p>
                </div>
                <div className={newBuildAddressStyle.addressLabel}>
                    标签：
                    <p className={newBuildAddressStyle.label_pic_n}>
                        <img src="src/images/lable_home_n.png" className={newBuildAddressStyle.labelPic}/>
                    </p>
                    <p className={newBuildAddressStyle.label_pic_n}>
                        <img src="src/images/lable_company_n.png" className={newBuildAddressStyle.labelPic}/>
                    </p>
                    <p className={newBuildAddressStyle.label_pic_n}>
                        <img src="src/images/lable_school_n.png" className={newBuildAddressStyle.labelPic}/>
                    </p>
                </div>
                <div className={newBuildAddressStyle.saveNewAddress}>
                    保存
                </div>
                {this.props.showDialog.showDialog?
                    (<div>
                        <Dialog>
                            <NewAddressDialogContent content={{text:'详细地址不能为空',operate:'确定'}}
                                             dialogActionKeys={this.props.dialogActionKeys}/>

                        </Dialog>
                        <div className={newBuildAddressStyle.dialog_mask}></div>
                    </div>):''}
            </div>
        )
    }
});
function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        showDialog:state.showDialog,
    }
}
function mapDispatchToProps(dispatch){
    return{
        dialogActionKeys : bindActionCreators(dialogActions,dispatch),
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch)
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(NewBuildAddress);
