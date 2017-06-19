let React = require('react');
let { Link } = require('react-router');
import assembleListStyle from '../css/assembleListStyle.css';

const MyOrderList = React.createClass({
    render: function () {
        let listNodes = this.props.itemList.map((item,index)=>{
            return (
                <li key={index} className={assembleListStyle.order_list_nodes}>
                    <Link to={item.url}>
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
module.exports ={MyOrderList,RestList};
const orderBgStyle = function(icon){
    return {
        background:'url('+icon+') no-repeat center top',
        backgroundSize:"0.45rem 0.45rem"
    }
};
const restBgStyle = function(icon){
    return {
        background:'url('+icon+') no-repeat left center',
        backgroundSize:"0.4rem 0.4rem"
    }
};