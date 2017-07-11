let React = require('react');
let { connect } = require('react-redux');
let { bindActionCreators } = require('redux');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import stationQrCodeStyle from '../css/stationQrCodeStyle.css'

const StationQrCode = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/StationQrCode');
    },
    render: function () {
        return (
            <div className={stationQrCodeStyle.stationQrCode}>
                <div className={stationQrCodeStyle.content}>
                    <div className={stationQrCodeStyle.title}>
                        <img src="" className={stationQrCodeStyle.stationPic}/>
                        <div className={stationQrCodeStyle.basicInfo}>
                            <p className={stationQrCodeStyle.storeName}>{this.props.stationCertain.storeName}</p>
                            <p className={stationQrCodeStyle.merchantNum}>商户号：{this.props.stationCertain.partnerId}</p>
                        </div>
                    </div>
                    <div className={stationQrCodeStyle.qrCode}></div>
                    <p className={stationQrCodeStyle.attention}>扫一扫二维码，关注我的店铺</p>
                </div>
            </div>
        )
    }
});
function mapStateToProps(state){
    return {
        stationCertain: state.stationCertain,
    }
};
function mapDispatchToProps(dispatch){
    return{
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(StationQrCode);