let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let {Header,OrderHeader}  = require('../components/Header');
let $ = require ('jquery');
let _h = require('../Util/HB');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import autonaviMap from '../Util/autonaviMap';
import {mapActions} from '../redux/actions/mapActions';
import orderStyle from '../css/orderStyle.css';

const Order = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/Order');
        this.props.historyUrlsActionKeys.mark('/Order');
    },
    componentDidMount:function(){
        var aMap = new autonaviMap();
        aMap.browserLocation($);
        if(this.props.map.boolean){
            aMap.mapmove((center) => {
                aMap.regeocoder(center);
                this.timer = setTimeout(() => {
                    let location = $("#mark").html();
                    let city = $("#city").html();
                    this.props.mapActionKeys.setLocationAddress(location);
                    this.props.mapActionKeys.setLocationCity(city);
                }, 500);
            });
        }
    },
    render: function () {
        return(
            <div className={orderStyle.order}>
                <div className={orderStyle.mapBox}>
                    <div id="container"></div>
                </div>
                <div className={orderStyle.order_title}>
                    <Link to="/" className={orderStyle.order_titleCity}><span id="city">{this.props.map.city}</span></Link>
                    <p className={orderStyle.order_titleName}>订水</p>
                    <p className={orderStyle.order_titleLocal}><img src="src/images/nav_common_btn_share.png" className={orderStyle.order_img}/></p>
                </div>
                <Link to="/AddressList" className={orderStyle.sentAddress}>
                    <span className={orderStyle.sentAddress_tip}>收货地址：</span><span className={orderStyle.sentAddress_detail} id="mark">{this.props.map.address}</span>
                    <img src="src/images/btn_right_arrow@2x.png" className={orderStyle.btn_right}/>
                </Link>
                <img src="src/images/line.png" className={orderStyle.line}/>
                <img src="" alt="这里有图片" className={orderStyle.mainPic}/>
                <Link to="/Water">
                    <div className={orderStyle.barrelled}>
                        <p className={orderStyle.barrelled_title}>桶装水热卖</p>
                        <img src="" alt="" className={orderStyle.barrelled_pic}/>
                    </div>
                </Link>
                <div className={orderStyle.recommend}>
                    <div className={orderStyle.water_ticket}>
                        <Link to="/WaterTicket">
                        <p className={orderStyle.water_coupon}>水票更优惠</p>
                        <p className={orderStyle.water_coupon_sub}>电子水票,全城通用</p>
                        <div className={orderStyle.coupon_pic}>
                            <img src="" alt="" className={orderStyle.pail}/>
                            <div className={orderStyle.ticket_text}>
                                <p className={orderStyle.ticket_title}>喜腾山泉</p>
                                <p className={orderStyle.ticket_subTitle}>天然饮用水 18L</p>
                            </div>
                            {/*<p className={orderStyle.ticket_scope}>全市通用</p>*/}
                        </div>
                        </Link>
                    </div>
                    <div className={orderStyle.other}>
                        <p className={orderStyle.water_coupon}>发现好货</p>
                        <p className={orderStyle.water_coupon_sub}>柴米油盐酱醋茶</p>
                        <div className={orderStyle.other_pic}>
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>

                <div className={orderStyle.productList}>
                    <ProductList
                        order={this.props.order}
                    />
                </div>
            </div>
        )
    }
});

let ProductList = React.createClass({
    render:function(){
        return(
                <div className={orderStyle.guess_you_like}>
                  <div className={orderStyle.related}>
                      猜你喜欢
                  </div>
                  <ProductNodes
                      order={this.props.order}
                  />
                </div>
        )
    }
});

let ProductNodes = React.createClass({
    render:function(){
        let productNodes = this.props.order.productList.map((item,index)=>{
            return(
                <li className={orderStyle.row_productList_item} key={index}>
                    <div  className="w">
                        <div className={orderStyle.row_item_pic_box}>
                            <img src="" alt="商品图片" className={orderStyle.row_item_pic}/>
                        </div>
                        <p className={orderStyle.row_item_title}>{item.title}</p>
                        <p className={orderStyle.row_item_price}><span className={orderStyle.row_price_unit}>￥</span>{item.price}</p>
                        <div className={orderStyle.row_item_extra}>
                            <span className={orderStyle.row_item_extra_sort}><img src={item.sort} className={orderStyle.item_sort_pic}/></span>
                            <span className={orderStyle.row_item_extra_sold}>已售：{item.sold}</span>
                            <img src="src/images/list_commom_btn_shopping-cart-.png" alt="" className={orderStyle.row_item_cart}/>
                        </div>
                    </div>
                </li>
            )
        });
        return(
            <ul className={orderStyle.row_product_list}>
                {productNodes}
            </ul>
        )
    }
});


function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        order:state.order,
        map:state.map,
    }
}
function mapDispatchToProps(dispatch){
    return{
        mapActionKeys : bindActionCreators(mapActions,dispatch),
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(Order);

const cActiveStyle = {
    color:"#0A89FE"
};