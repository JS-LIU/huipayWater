let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let _h = require('../Util/HB');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import stationStyle from '../css/stationStyle.css';

const Station = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/Station');
        this.props.historyUrlsActionKeys.mark('/Station');
    },
    render: function () {
        return (
            <div className={stationStyle.station_box}>
                <div className={stationStyle.headLocation}>
                    <Link to="/AddressList" className={stationStyle.order_titleCity}>
                        <p id="city">{this.props.map.city}</p>
                        <span className={stationStyle.triangle}></span>
                    </Link>
                    <Link to="/AddressList" className={stationStyle.sentAddress}>
                        <p className={stationStyle.sentAddress_tip}>收货地址：</p>
                        <p className={stationStyle.sentAddress_detail} id="mark">{this.props.map.address}</p>
                    </Link>
                    <p className={stationStyle.more_right_btn}>
                        <img src="src/images/station-details_icon_location.png" className={stationStyle.btn_pic}/>
                    </p>
                </div>
                <StationList
                    station={this.props.station}/>
            </div>
        )
    }
});
const StationList = React.createClass({
    alert:function(index){
        return()=>{
          alert(index);
        }
    },
    render: function () {
        let stationNodes = this.props.station.stationList.map((item,index)=>{
            return(
                <li key={index}>
                    <Link to="/StationCertain" className={stationStyle.stationList_item}>
                        <div className={stationStyle.item_pic_box}>
                            <img src="" alt="" className={stationStyle.item_pic}/>
                        </div>
                        <div className={stationStyle.item_descript}>
                            <p className={stationStyle.item_station_name}>{item.title}
                            {item.approve?<img src={item.approveImg} className={stationStyle.item_station_approve}/>:""}
                        </p>
                            <p className={stationStyle.item_station_evaluate}>
                                <ul>
                                    <li className={0<item.evaluate?stationStyle.starGrade_orange:stationStyle.starGrade_gray} onClick={this.alert(index)}></li>
                                    <li className={1<item.evaluate?stationStyle.starGrade_orange:stationStyle.starGrade_gray}></li>
                                    <li className={2<item.evaluate?stationStyle.starGrade_orange:stationStyle.starGrade_gray}></li>
                                    <li className={3<item.evaluate?stationStyle.starGrade_orange:stationStyle.starGrade_gray}></li>
                                    <li className={4<item.evaluate?stationStyle.starGrade_orange:stationStyle.starGrade_gray}></li>
                                </ul>
                                <span className={stationStyle.item_evaluate_sale}>月售：{item.sale}</span>
                                <span></span>
                            </p>
                            <p className={stationStyle.item_station_address}>
                                <span>{item.address}</span>
                                <span></span>
                            </p>
                        </div>
                    </Link>
                </li>
            )
        });
        return (
            <ul className={stationStyle.stationList}>
                {stationNodes}
            </ul>
        )
    }
});
function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        map:state.map,
        station:state.station,
    }
}
function mapDispatchToProps(dispatch){
    return{
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(Station);