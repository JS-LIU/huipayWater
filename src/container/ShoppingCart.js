let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import {shoppingCartActions} from '../redux/actions/shoppingCartActions';
import shoppingCartStyle from '../css/shoppingCartStyle.css';

const ShoppingCart = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/ShoppingCart');
        this.props.historyUrlsActionKeys.mark('/ShoppingCart');
    },
    checkProduct:function(product){
        return ()=>{
            this.props.shoppingCartActionKeys.checkProduct(product);
        }
    },
    checkStore:function(product){
        return ()=>{
            this.props.shoppingCartActionKeys.checkStore(product);
        }
    },
    allChecked:function(){
        this.props.shoppingCartActionKeys.allChecked();
    },
    increaseNum:function(product){
        return()=>{
            this.props.shoppingCartActionKeys.increaseNum(product);
        }
    },
    reduceNum:function(product){
        return()=>{
           this.props.shoppingCartActionKeys.reduceNum(product);
        }
    },
    render: function (){
        let cartList = this.props.shoppingCart.cartList.map((item,index)=>{
            return(
                <div className={shoppingCartStyle.cartList} key={index}>
                    <div className={shoppingCartStyle.listHeader}>
                        <p className={shoppingCartStyle.storeCheck} onClick={this.checkStore(item)}>
                            {item.checked?<img src="src/images/shoppingcart_choose_s.png"  className={shoppingCartStyle.checkPic}/>:
                                <img src="src/images/shoppingcart_choose_n.png"  className={shoppingCartStyle.checkPic}/>}
                        </p>
                        <p className={shoppingCartStyle.station}>{item.storeName}</p>
                    </div>
                    <ul className={shoppingCartStyle.productList}>
                        {item.productList.map((item,index)=> {
                            return (
                                <li key={index} className={shoppingCartStyle.productNodes}>
                                    <p onClick={this.checkProduct(item)}>{item.checked? <img src="src/images/shoppingcart_choose_s.png" className={shoppingCartStyle.checkPic}/>:
                                        <img src="src/images/shoppingcart_choose_n.png"  className={shoppingCartStyle.checkPic}/>
                                    }</p>
                                    <div className={shoppingCartStyle.product_pic}><img src={item.pic} alt="" /></div>
                                    <div className={shoppingCartStyle.product_detail}>
                                        <p className={shoppingCartStyle.product_name}>{item.productName}</p>
                                        <p className={shoppingCartStyle.product_volume}>{item.volume}</p>
                                        <p className={shoppingCartStyle.product_price}>
                                            ￥ <span className={shoppingCartStyle.product_sale}>{item.sale}</span>
                                        </p>
                                    </div>
                                    <div className={shoppingCartStyle.plusminus}>
                                        <span onClick={this.reduceNum(item)} className={shoppingCartStyle.cart_ctrl_reduce}>-</span>
                                        <span className={shoppingCartStyle.cart_ctrl_num}>{item.number}</span>
                                        <span onClick={this.increaseNum(item)} className={shoppingCartStyle.cart_ctrl_increase}>+</span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        });
        return (
            <div className={shoppingCartStyle.shoppingCart}>
                {cartList}
                <div className={shoppingCartStyle.cartFooter}>
                    <p onClick={this.allChecked} className={shoppingCartStyle.storeCheck}>
                        {this.props.shoppingCart.allChecked?<img src="src/images/shoppingcart_choose_s.png" className={shoppingCartStyle.checkPic}/>:
                         <img src="src/images/shoppingcart_choose_n.png"  className={shoppingCartStyle.checkPic}/>
                        }
                    </p>
                    <span className={shoppingCartStyle.allChoose}>全选</span>
                    <p className={shoppingCartStyle.sum}>合计：￥{this.props.shoppingCart.totalPrice}</p>
                    <p className={shoppingCartStyle.setAccount}>去结算<span className={shoppingCartStyle.num}>({this.props.shoppingCart.productNum})</span></p>
                </div>
            </div>
        )
    }
});

function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        shoppingCart:state.shoppingCart,
    }
}
function mapDispatchToProps(dispatch){
    return{
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
        shoppingCartActionKeys:bindActionCreators(shoppingCartActions,dispatch),
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);