let React = require('react');
let {Link} = require('react-router');

import headerStyle from '../css/headerStyle.css';

const Header = React.createClass({
    render: function (){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
});
const MapHeader = React.createClass({
    render: function () {
        return (
            <div className={headerStyle.map_title}>
                <Link to="/" className={headerStyle.map_titleCity}><span id="city">{this.props.city}</span></Link>
                <p className={headerStyle.map_titleName}>{this.props.headData.name}</p>
                <p className={headerStyle.map_titleLocal}><img src={this.props.headData.img} className={headerStyle.map_img}/></p>
            </div>
        )
    }
});
const TicketHeader = React.createClass({
    render: function () {
        return (
            <div className={headerStyle.title}>
                <Link to="/Order" className={headerStyle.goBack}>订水</Link>
                <p className={headerStyle.ticket_titleName}>水票</p>
                <p style={{flex:1}}></p>
            </div>
        )
    }
});
const StationHeader = React.createClass({
    render: function () {
        return (
            <div className={headerStyle.station_title}>
                <Link to="/" className={headerStyle.station_titleCity}>{this.props.city}</Link>
                <p className={headerStyle.station_titleName}>{this.props.headData.name}</p>
                <p className={headerStyle.station_titleLocal}><img src={this.props.headData.img} className={headerStyle.station_img}/></p>
            </div>
        )
    }
});

module.exports = {Header,MapHeader,TicketHeader,StationHeader};