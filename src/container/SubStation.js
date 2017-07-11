let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let _h = require('../Util/HB');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import subStationStyle from '../css/subStationStyle.css';

const SubStation = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/Station');
        this.props.historyUrlsActionKeys.mark('/Station');
    },
    render: function () {
        return (
            <div className={subStationStyle.station_box}>
                <StationList
                    station={this.props.station}/>
            </div>
        )
    }
});
const StationList = React.createClass({
    render: function () {
        let stationNodes = this.props.station.stationList.map((item,index)=>{
            return(
                <li className={subStationStyle.stationList_item} key={index}>
                    <div className={subStationStyle.item_pic_box}>
                        <img src="" alt="" className={subStationStyle.item_pic}/>
                    </div>
                    <div className={subStationStyle.item_descript}>
                        <p className={subStationStyle.item_station_name}>{item.title}
                            {item.approve?<img src={item.approveImg} className={subStationStyle.item_station_approve}/>:""}
                        </p>
                        <p className={subStationStyle.item_station_evaluate}>
                            <span>fgdsfgsd</span>
                            <span className={subStationStyle.item_evaluate_sale}>月售：{item.sale}</span>
                            <span></span>
                        </p>
                        <p className={subStationStyle.item_station_address}>
                            <span>{item.address}</span>
                            <span></span>
                        </p>
                    </div>
                </li>
            )
        });
        return (
            <ul className={subStationStyle.stationList}>
                {stationNodes}
            </ul>
        )
    }
});
function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        station:state.station,
    }
}
function mapDispatchToProps(dispatch){
    return{
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(SubStation);