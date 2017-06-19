let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let {Header,StationHeader} = require('../components/Header')
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
                <Header map={this.props.map}>
                    <StationHeader city={this.props.map.city} headData={{name:'水站',img:'src/images/address-05.png'}}/>
                </Header>
                <Link to="/Address" className={stationStyle.sentAddress}>
                    <span className={stationStyle.sentAddress_tip}>收货地址：</span><span className={stationStyle.sentAddress_detail}>{this.props.map.address}</span>
                    <img src="src/images/btn_right_arrow@2x.png" className={stationStyle.btn_right}/>
                </Link>
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
                <li className={stationStyle.stationList_item} key={index}>
                    <div className={stationStyle.item_pic_box}>
                        <img src="" alt="" className={stationStyle.item_pic}/>
                    </div>
                    <div className={stationStyle.item_descript}>
                        <p className={stationStyle.item_station_name}>{item.title}
                            {item.approve?<img src={item.approveImg} className={stationStyle.item_station_approve}/>:""}
                        </p>
                        <p className={stationStyle.item_station_evaluate}>
                            <span>fgdsfgsd</span>
                            <span className={stationStyle.item_evaluate_sale}>月售：{item.sale}</span>
                            <span></span>
                        </p>
                        <p className={stationStyle.item_station_address}>
                            <span>{item.address}</span>
                            <span></span>
                        </p>
                    </div>
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