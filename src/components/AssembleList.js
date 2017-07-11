let React = require('react');
let { Link } = require('react-router');
import assembleListStyle from '../css/assembleListStyle.css';

const MyOrderList = React.createClass({
    render: function () {
        let listNodes = this.props.itemList.map((item,index)=>{
            return (
                <li key={index} className={assembleListStyle.order_list_nodes}>
                    <Link to={item.url}>
                        {item.num>0?<span className={assembleListStyle.minTable}>{item.num}</span>:''}
                        <p className={assembleListStyle.order_list_item} style={orderBgStyle(item.icon)}>{item.name}</p>
                    </Link>
                </li>
            )
        });
        return (
            <ul className={assembleListStyle.myOrderList}>
                {listNodes}
            </ul>
        )
    }
});
const RestList = React.createClass({
    render: function () {
        let listNodes = this.props.itemList.map((item,index)=>{
            return (
                <li key={index} className={assembleListStyle.rest_list_nodes}>
                    <p className={assembleListStyle.rest_list_item} style={restBgStyle(item.icon)}>{item.name}</p>
                    <Link to={item.url}>
                        <p className={assembleListStyle.more_right_btn}></p>
                    </Link>
                </li>
            )
        });
        return (
            <ul className={assembleListStyle.restList}>
                {listNodes}
            </ul>
        )
    }
});

const PayWayList = React.createClass({
    render: function () {
        let listNodes = this.props.itemList.map((item,index)=>{
            return(
                <li key={index} className={assembleListStyle.way_list_nodes}>
                    <img src={item.icon} className={assembleListStyle.way_pic}/>
                    <div className={assembleListStyle.wayDetail}>
                        <p>{item.name}</p>
                        <p className={assembleListStyle.subTitle}>{item.subTitle}</p>
                    </div>
                    <img src="src/images/shoppingcart_choose_n.png" className={assembleListStyle.choosePic}/>
                </li>
            )
        });
        return (
            <ul className={assembleListStyle.payWayList}>
                {listNodes}
            </ul>
        )
    }
});

module.exports ={MyOrderList,RestList,PayWayList};
const orderBgStyle = function(icon){
    return {
        background:'url('+icon+') no-repeat center top',
        backgroundSize:"auto 0.4rem"
    }
};
const restBgStyle = function(icon){
    return {
        background:'url('+icon+') no-repeat left center',
        backgroundSize:"0.4rem auto"
    }
};