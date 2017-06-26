let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import paymentResultStyle from '../css/paymentResultStyle.css'

const PaymentResult = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/PaymentResult');
    },
    render: function () {
        return (
            <div className={paymentResultStyle.payResult}>
                <div className={paymentResultStyle.resultCondition}>
                    <img src="src/images/shoppingcart_choose_s.png" className={paymentResultStyle.conditionPic}/>
                    <p className={paymentResultStyle.textDetail}>支付成功 !</p>
                </div>
                <div className={paymentResultStyle.tradeInfo}>
                    <p className={paymentResultStyle.infoItem}>交易单号：2017092209700693</p>
                    <p className={paymentResultStyle.infoItem}>支付金额：45.00元</p>
                    <p className={paymentResultStyle.infoItem}>支付方式：微信支付</p>
                    <p className={paymentResultStyle.infoItem}>交易时间：2017-09-22 14:27</p>
                </div>
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
module.exports = connect(mapStateToProps,mapDispatchToProps)(PaymentResult);