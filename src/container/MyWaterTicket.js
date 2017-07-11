let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');

import myWaterTicketStyle from '../css/myWaterTicketStyle.css';
import {historyUrlsActions} from '../redux/actions/historyUrlsActions';


const MyWaterTicket = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/MyWaterTicket');
    },
    render: function () {
        let ticketListNodes = this.props.myWaterTicket.ticketList.map((item,index)=>{
            return(
                <li className={myWaterTicketStyle.ticketList_item} key={index}>
                    <div className={myWaterTicketStyle.item_pic_box}>
                        <img src="" alt="" className={myWaterTicketStyle.item_pail}/>
                        <div className={myWaterTicketStyle.item_text}>
                            <p className={myWaterTicketStyle.item_ticket_title}>{item.title}</p>
                            <p className={myWaterTicketStyle.item_ticket_subTitle}>{item.subTitle}</p>
                        </div>
                        <div className={myWaterTicketStyle.item_limit}>
                            <p className ={myWaterTicketStyle.validity}>有效期至{item.validity}</p>
                            <p className ={myWaterTicketStyle.amount}>{item.amount}张</p>
                            <p className ={myWaterTicketStyle.item_scope}>{item.scope}</p>
                        </div>
                    </div>
                </li>
            )
        });
        let failureTicketNodes = this.props.myWaterTicket.failureTicketList.map((item,index)=>{
            return(
                <li className={myWaterTicketStyle.ticketList_item} key={index}>
                    <div className={myWaterTicketStyle.failure_pic_box}>
                        <img src="" alt="" className={myWaterTicketStyle.item_pail}/>
                        <div className={myWaterTicketStyle.item_text}>
                            <p className={myWaterTicketStyle.failure_ticket_title}>{item.title}</p>
                            <p className={myWaterTicketStyle.failure_ticket_subTitle}>{item.subTitle}</p>
                        </div>
                        <div className={myWaterTicketStyle.item_limit}>
                            <p className ={myWaterTicketStyle.validity}>有效期至{item.validity}</p>
                            <p className ={myWaterTicketStyle.failure_amount}>{item.amount}张</p>
                            <p className ={myWaterTicketStyle.item_scope}>{item.scope}</p>
                        </div>
                    </div>
                </li>
            )
        });
        return(
            <div className={myWaterTicketStyle.ticketList}>
                <ul className={myWaterTicketStyle.usableTicketList}>
                    {ticketListNodes}
                </ul>
                <div className={myWaterTicketStyle.view_more}>
                    <span className ={myWaterTicketStyle.striping}></span>
                    <span className ={myWaterTicketStyle.pull}>已过期</span>
                    <span className ={myWaterTicketStyle.triangle}></span>
                    <span className ={myWaterTicketStyle.striping}></span>
                </div>
                <ul className={myWaterTicketStyle.failureTicketList}>
                    {failureTicketNodes}
                </ul>
            </div>
        )
    }
});

function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        myWaterTicket:state.myWaterTicket,
    }
}
function mapDispatchToProps(dispatch){
    return{
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(MyWaterTicket);
