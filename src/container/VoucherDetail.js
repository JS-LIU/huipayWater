let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');

import voucherDetailStyle from '../css/voucherDetailStyle.css';
import {historyUrlsActions} from '../redux/actions/historyUrlsActions';

const VoucherDetail = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/AddressManage');
    },
    render: function () {
        return (
            <div className={voucherDetailStyle.voucherDetail}>
                <div className={voucherDetailStyle.voucherItems}>
                    <div className={voucherDetailStyle.voucher_left}>
                        <p className ={voucherDetailStyle.left_top}>
                            <span className={voucherDetailStyle.unit}>￥</span>
                            <span className ={voucherDetailStyle.price}>10</span>
                        </p>
                        <p className={voucherDetailStyle.condition}>满100元可用</p>
                    </div>
                    <div className={voucherDetailStyle.voucher_right}>
                        <p className={voucherDetailStyle.stationName}>喜腾山泉旗舰店</p>
                        <p className={voucherDetailStyle.validity}>有效期至2017-06-09</p>
                    </div>
                    <p className={voucherDetailStyle.amount}>2张</p>
                </div>
                <div className={voucherDetailStyle.useVoucher}>
                    <p className ={voucherDetailStyle.useTitle}>使用代金券</p>
                    <p className={voucherDetailStyle.norms}>
                        选择分店
                        <img src="src/images/btn_right_arrow@2x.png" className={voucherDetailStyle.right_btn}/>
                    </p>
                </div>
                <div className={voucherDetailStyle.useVoucher}>
                    <p className ={voucherDetailStyle.useTitle}>赠送好友</p>
                    <p className={voucherDetailStyle.norms}>
                        <img src="src/images/btn_right_arrow@2x.png" className={voucherDetailStyle.right_btn}/>
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
module.exports = connect(mapStateToProps,mapDispatchToProps)(VoucherDetail);
