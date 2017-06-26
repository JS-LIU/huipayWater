let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let {PayWayList} = require('./../components/AssembleList');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import confirmBuyStyle from '../css/confirmBuyStyle.css';

const ConfirmBuy = React.createClass({
    componentWillMount: function () {
        this.props.historyUrlsActionKeys.pushUrl('/ConfirmIndent');
        this.props.historyUrlsActionKeys.mark('/ConfirmIndent');
    },
    render: function () {
        return (
            <div className={confirmBuyStyle.confirmBuy}>
                <p className={confirmBuyStyle.actually}>
                    <span>实付金额</span>
                    <span className={confirmBuyStyle.amount}>￥45.00</span>
                </p>
                <PayWayList itemList={[{
                    name:"微信支付",
                    subTitle:'推荐开通微信支付的用户使用',
                    icon:''
                }, {
                    name:'支付宝支付',
                    subTitle:'推荐安装支付宝客户端且有支付宝账户的用户使用',
                    icon:''
                },{
                    name:'银联支付',
                    subTitle:'无需开通网银，凭银行卡卡号及密码支付',
                    icon:''
                }]}/>
                <p className={confirmBuyStyle.purchase}>
                    立即支付
                </p>
            </div>
        )
    }
});



function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
    }
}
function mapDispatchToProps(dispatch){
    return{
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(ConfirmBuy);