let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');

import myWaterTicketDetailStyle from '../css/myWaterTicketDetailStyle.css';
import {historyUrlsActions} from '../redux/actions/historyUrlsActions';


const MyWaterTicketDetail = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/MyWaterTicketDetail');
    },
    render: function () {
        return(
            <div className={myWaterTicketDetailStyle.ticketList}>
                <div className={myWaterTicketDetailStyle.usableTicketList}>
                    <div className={myWaterTicketDetailStyle.item_pic_box}>
                        <img src="" alt="" className={myWaterTicketDetailStyle.item_pail}/>
                        <div className={myWaterTicketDetailStyle.item_text}>
                            <p className={myWaterTicketDetailStyle.item_ticket_title}>喜腾山泉</p>
                            <p className={myWaterTicketDetailStyle.item_ticket_subTitle}>天然饮用水 18L</p>
                        </div>
                        <div className={myWaterTicketDetailStyle.item_limit}>
                            <p className ={myWaterTicketDetailStyle.validity}>有效期至2017-07-19</p>
                            <p className ={myWaterTicketDetailStyle.amount}>3张</p>
                            <p className ={myWaterTicketDetailStyle.item_scope}>全市通用</p>
                        </div>
                    </div>
                </div>
                <div className ={myWaterTicketDetailStyle.purchase}>
                    <p className={myWaterTicketDetailStyle.ticket_buy_water}>订水</p>
                    <p className={myWaterTicketDetailStyle.canUseNum}>可用水票<span className={myWaterTicketDetailStyle.ticketNum}>3</span>张
                        <img src="src/images/btn_right_arrow@2x.png" className={myWaterTicketDetailStyle.right_btn}/>
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
module.exports = connect(mapStateToProps,mapDispatchToProps)(MyWaterTicketDetail);
