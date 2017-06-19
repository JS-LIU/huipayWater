let React = require('react');
let { bindActionCreators } = require('redux');
let { connect } = require('react-redux');
let { Link } = require('react-router');
let {Header,MapHeader}  = require('../components/Header');
let $ = require ('jquery');

import autonaviMap from '../Util/autonaviMap';
import {mapActions} from '../redux/actions/mapActions';
import mapStyle from '../css/mapStyle.css';

const Map = React.createClass({
    componentDidMount:function(){
        var aMap = new autonaviMap();
        aMap.browserLocation($);
        aMap.mapmove((center)=>{
            console.log(center);
            aMap.regeocoder(center);
            this.timer = setTimeout(()=>{
                let location = $("#mark").html();
                let city = $("#city").html();
                console.log(city);
                this.props.mapActionKeys.setLocationAddress(location);
                this.props.mapActionKeys.setLocationCity(city);
            },1000);
        });

    },
    render: function () {
        return (
            <div className={mapStyle.map}>
                <Header map={this.props.map}>
                    <MapHeader city={this.props.map.city} headData={{name:'海豹送水',img:'src/images/address-04.png'}}/>
                </Header>
                <div className={mapStyle.mapBox}>
                    <div id="container"></div>
                </div>
                <div className={mapStyle.mapMark}></div>
                <div className={mapStyle.mapDetail}>
                    <p className={mapStyle.mapDetail_address} id="mark">{this.props.map.address}</p>
                </div>
                <div className={mapStyle.orderBtn}>
                    <Link to="/Order">
                        <p className={mapStyle.orderBtn_order}>我要订水</p>
                    </Link>
                </div>
            </div>
        )
    }
});


function mapStateToProps(state){
    return {
        map:state.map,
    }
}
function mapDispatchToProps(dispatch){

    return{
        mapActionKeys:bindActionCreators(mapActions, dispatch)
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(Map);