let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import confirmIndentStyle from '../css/confirmIndentStyle.css';

const ConfirmIndent = React.createClass({
    componentWillMount: function () {
        this.props.historyUrlsActionKeys.pushUrl('/ConfirmIndent');
        this.props.historyUrlsActionKeys.mark('/ConfirmIndent');
    },
    render: function () {
        return(
            <div className={confirmIndentStyle.confirmIndent}>
                <div className={confirmIndentStyle.title}>确认订单</div>
                <div className={confirmIndentStyle.delivery_message}>
                    <p className={confirmIndentStyle.delivery_person}>
                        <span className={confirmIndentStyle.consignee}>收 货 人：</span>
                        <span>王佳乐</span>
                        <span className={confirmIndentStyle.connect}>15895686624</span></p>
                    <p className={confirmIndentStyle.delivery_address}>
                        <span>送货地址：</span>
                        <span className={confirmIndentStyle.address}>北京市西城区百万庄大街11号 粮科大厦 三层 华瑞富达</span>
                    </p>
                </div>
                <div className={confirmIndentStyle.delivery_time}>
                    <p>配送时间</p>
                    <p className={confirmIndentStyle.exactTime}>5月18日（周四）16:00-18:00</p>
                </div>
                <ProductList />
                <div className={confirmIndentStyle.confirmFooter}>
                    <p className={confirmIndentStyle.statistics}><span>共1件</span><span className={confirmIndentStyle.payable}>实付款：</span><span>￥23.00</span></p>
                    <p className={confirmIndentStyle.submitOrder}>提交订单</p>
                </div>
            </div>
        )
    }
});

const ProductList = React.createClass({
    render: function () {
        return (
            <div className={confirmIndentStyle.indent_store}>
                <div className={confirmIndentStyle.store_header}>
                    乐百氏旗舰店
                    <img src="src/images/btn_right_arrow@2x.png" alt="" className={confirmIndentStyle.right_more}/>
                </div>
                <div className={confirmIndentStyle.productNodes}>
                    <div className={confirmIndentStyle.product_pic}><img src="" alt="" /></div>
                    <div className={confirmIndentStyle.product_detail}>
                        <p className={confirmIndentStyle.product_name}>乐百氏  矿泉水</p>
                        <p className={confirmIndentStyle.product_volume}>18.9L</p>
                        <p className={confirmIndentStyle.product_price}>
                            ￥ <span className={confirmIndentStyle.product_sale}>23.00</span> x 1
                        </p>
                    </div>
                </div>
                <p className={confirmIndentStyle.charge}>
                    <span className={confirmIndentStyle.charge_title}>快递费用：</span>
                    <span>+0.00元</span>
                </p>
                <p className={confirmIndentStyle.charge}>
                    <span className={confirmIndentStyle.charge_title}>水票抵用：</span>
                    <span className={confirmIndentStyle.purpose}>-0张</span>
                </p>
                <p className={confirmIndentStyle.charge}>
                    <span className={confirmIndentStyle.charge_title}>代金券抵用：</span>
                    <span className={confirmIndentStyle.purpose}>-0.00元</span>
                </p>
                <div className={confirmIndentStyle.cost}>
                    <p className={confirmIndentStyle.cost_descript}>
                        共1件商品，合计：
                        <span className={confirmIndentStyle.cost_unit}>￥</span>
                        <span className={confirmIndentStyle.const_money}>23.00</span>
                    </p>
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
module.exports = connect(mapStateToProps,mapDispatchToProps)(ConfirmIndent);
