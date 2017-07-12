let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import indentDetailStyle from '../css/indentDetailStyle.css';

const IndentDetail = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/IndentDetail');
        this.props.historyUrlsActionKeys.mark('/IndentDetail');
    },
    render: function () {
        return (
            <div className={indentDetailStyle.indentDetail}>
                {/*<div className={indentDetailStyle.title}>订单详情</div>*/}
                <div className={indentDetailStyle.indent_info}>
                    <p className={indentDetailStyle.indent_serial}>订单编号：201704051323</p>
                    <p>下单时间：2016-03-26  08:23:52</p>
                    <p>订单状态：<span className={indentDetailStyle.indent_condition}>待付款</span></p>
                </div>
                <div className={indentDetailStyle.indent_delivery}>
                    <div className={indentDetailStyle.recipient}>
                        <p className={indentDetailStyle.delivery_tip}>收货人：</p>
                        <p className={indentDetailStyle.delivery_tip}>送货地址：</p>
                    </div>
                    <div className={indentDetailStyle.recipient_address}>
                        <p>王佳乐 <span className={indentDetailStyle.recipient_phone}>15881992407</span></p>
                        <p>北京市西城区  百万庄大街11号  粮科大厦三层华瑞富达</p>
                    </div>
                </div>
                <div className={indentDetailStyle.indent_store}>
                    <div className={indentDetailStyle.store_header}>
                        乐百氏旗舰店
                        <img src="src/images/btn_right_arrow@2x.png" alt="" className={indentDetailStyle.right_more}/>
                    </div>
                    <div className={indentDetailStyle.productNodes}>
                        <div className={indentDetailStyle.product_pic}><img src="" alt="" /></div>
                        <div className={indentDetailStyle.product_detail}>
                            <p className={indentDetailStyle.product_name}>乐百氏  矿泉水</p>
                            <p className={indentDetailStyle.product_volume}>18.9L</p>
                            <p className={indentDetailStyle.product_price}>
                                ￥ <span className={indentDetailStyle.product_sale}>23.00</span> x 1
                            </p>
                        </div>
                    </div>
                    <p className={indentDetailStyle.charge}>
                        <span className={indentDetailStyle.charge_title}>快递费用：</span>
                        <span>+0.00元</span>
                    </p>
                    <p className={indentDetailStyle.charge}>
                        <span className={indentDetailStyle.charge_title}>水票抵用：</span>
                        <span>-0张</span>
                    </p>
                    <p className={indentDetailStyle.charge}>
                        <span className={indentDetailStyle.charge_title}>代金券抵用：</span>
                        <span>-0.00元</span>
                    </p>
                    <div className={indentDetailStyle.cost}>
                        <p className={indentDetailStyle.cost_descript}>
                            实付款：
                            <span className={indentDetailStyle.cost_unit}>￥</span>
                            <span className={indentDetailStyle.const_money}>23.00</span>
                        </p>
                    </div>
                </div>
                <div className={indentDetailStyle.delivery_way}>
                    <p className={indentDetailStyle.way_title}>支付方式：<span className={indentDetailStyle.way_detail}>微信支付</span></p>
                    <p className={indentDetailStyle.way_title}>配送时间：<span className={indentDetailStyle.way_detail}>5月18号（周四）16:00-18:00</span></p>
                </div>
                <div className={indentDetailStyle.footer_operate}>
                    <Link to="/" className={indentDetailStyle.operate_item}>去支付</Link>
                    <Link to="/" className={indentDetailStyle.operate_item}>取消订单</Link>
                </div>
            </div>
        )
    }
});
function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        allIndents:state.allIndents,
    }
}
function mapDispatchToProps(dispatch){
    return{
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(IndentDetail);