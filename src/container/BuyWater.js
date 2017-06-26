let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let $ = require ('jquery');
let _h = require('../Util/HB');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import autonaviMap from '../Util/autonaviMap';
import {mapActions} from '../redux/actions/mapActions';
import buyWaterStyle from '../css/buyWaterStyle.css';

const BuyWater = React.createClass({
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
            <div className={buyWaterStyle.order}>
                <div className={buyWaterStyle.mapBox}>
                    <div id="container"></div>
                </div>
                {/*<div className={buyWaterStyle.order_title}>*/}
                    {/*<p className={buyWaterStyle.order_titleName}>订水</p>*/}
                    {/*<p className={buyWaterStyle.order_titleLocal}><img src="src/images/nav_common_btn_share.png" className={buyWaterStyle.order_img}/></p>*/}
                {/*</div>*/}
                <div className={buyWaterStyle.headLocation}>
                    <Link to="/" className={buyWaterStyle.order_titleCity}>
                        <p id="city">{this.props.map.city}</p>
                        <span className={buyWaterStyle.triangle}></span>
                    </Link>
                    <Link to="/AddressList" className={buyWaterStyle.sentAddress}>
                        <p className={buyWaterStyle.sentAddress_tip}>收货地址：</p>
                        <p className={buyWaterStyle.sentAddress_detail} id="mark">{this.props.map.address}</p>
                    </Link>
                    <p className={buyWaterStyle.more_right_btn}>
                        <img src="src/images/btn_right_arrow@2x.png" className={buyWaterStyle.btn_pic}/>
                    </p>
                </div>
                <img src="src/images/line.png" className={buyWaterStyle.line}/>
                <img src="" alt="这里有图片" className={buyWaterStyle.mainPic}/>
                <Link to="/Water">
                    <div className={buyWaterStyle.barrelled}>
                        <p className={buyWaterStyle.barrelled_title}>桶装水热卖</p>
                        <img src="" alt="" className={buyWaterStyle.barrelled_pic}/>
                    </div>
                </Link>
                <div className={buyWaterStyle.recommend}>
                    <div className={buyWaterStyle.water_ticket}>
                        <Link to="/WaterTicket">
                        <p className={buyWaterStyle.water_coupon}>水票更优惠</p>
                        <p className={buyWaterStyle.water_coupon_sub}>电子水票,全城通用</p>
                        <div className={buyWaterStyle.coupon_pic}>
                            <img src="" alt="" className={buyWaterStyle.pail}/>
                            <div className={buyWaterStyle.ticket_text}>
                                <p className={buyWaterStyle.ticket_title}>喜腾山泉</p>
                                <p className={buyWaterStyle.ticket_subTitle}>天然饮用水 18L</p>
                            </div>
                            {/*<p className={buyWaterStyle.ticket_scope}>全市通用</p>*/}
                        </div>
                        </Link>
                    </div>
                    <div className={buyWaterStyle.other}>
                        <p className={buyWaterStyle.water_coupon}>发现好货</p>
                        <p className={buyWaterStyle.water_coupon_sub}>柴米油盐酱醋茶</p>
                        <div className={buyWaterStyle.other_pic}>
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>

                <div className={buyWaterStyle.productList}>
                    <ProductList
                        buyWater={this.props.buyWater}
                    />
                </div>
            </div>
        )
    }
});

let ProductList = React.createClass({
    render:function(){
        return(
                <div className={buyWaterStyle.guess_you_like}>
                  <div className={buyWaterStyle.related}>
                      猜你喜欢
                  </div>
                  <ProductNodes
                      buyWater={this.props.buyWater}
                  />
                </div>
        )
    }
});

let ProductNodes = React.createClass({
    render:function(){
        let productNodes = this.props.buyWater.productList.map((item,index)=>{
            return(
                <li className={buyWaterStyle.row_productList_item} key={index}>
                    <div  className="w">
                        <div className={buyWaterStyle.row_item_pic_box}>
                            <img src="" alt="商品图片" className={buyWaterStyle.row_item_pic}/>
                        </div>
                        <p className={buyWaterStyle.row_item_title}>{item.title}</p>
                        <p className={buyWaterStyle.row_item_price}><span className={buyWaterStyle.row_price_unit}>￥</span>{item.price}</p>
                        <div className={buyWaterStyle.row_item_extra}>
                            <span className={buyWaterStyle.row_item_extra_sort}><img src={item.sort} className={buyWaterStyle.item_sort_pic}/></span>
                            <span className={buyWaterStyle.row_item_extra_sold}>已售：{item.sold}</span>
                            <img src="src/images/list_commom_btn_shopping-cart-.png" alt="" className={buyWaterStyle.row_item_cart}/>
                        </div>
                    </div>
                </li>
            )
        });
        return(
            <ul className={buyWaterStyle.row_product_list}>
                {productNodes}
            </ul>
        )
    }
});


function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        buyWater:state.buyWater,
        map:state.map,
    }
}
function mapDispatchToProps(dispatch){
    return{
        mapActionKeys : bindActionCreators(mapActions,dispatch),
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(BuyWater);