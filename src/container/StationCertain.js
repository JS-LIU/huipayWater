let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let _h = require('../Util/HB');

import{ProductList,ProductType,ProductRowList,ProductVerList} from '../components/ProductList';
import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import {waterActions} from '../redux/actions/waterActions';
import stationCertainStyle from '../css/stationCertainStyle.css';

const StationCertain = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/StationCertain');
    },
    render: function () {
        return (
            <div className={stationCertainStyle.stationCertain}>
                <WaterStore />
                <SpecialOffer/>
                <ProductList water={this.props.water} waterActionKeys={this.props.waterActionKeys}>
                    <ProductType water={this.props.water} waterActionKeys={this.props.waterActionKeys}/>
                    {this.props.water.arrange.array?
                        (<ProductRowList
                            water={this.props.water}/>):
                        (<ProductVerList
                            water={this.props.water}/>)}
                </ProductList>
                <Footer/>
            </div>
        )
    }
});

const WaterStore = React.createClass({
    render: function () {
        return (
            <div className={stationCertainStyle.waterStore}>
                <div className={stationCertainStyle.storeBasic}>
                    <img src="" className={stationCertainStyle.storePic}/>
                    <div className={stationCertainStyle.storeName}>
                        <p>怡宝桶装水旗舰店</p>
                        <p className={stationCertainStyle.degree}>
                            <img src="src/images/icon_star_orange.png" className={stationCertainStyle.judgeStar}/>
                            <img src="src/images/icon_star_orange.png" className={stationCertainStyle.judgeStar}/>
                            <img src="src/images/icon_star_orange.png" className={stationCertainStyle.judgeStar}/>
                            <img src="src/images/icon_star_orange.png" className={stationCertainStyle.judgeStar}/>
                            <img src="src/images/icon_star_gray.png" className={stationCertainStyle.judgeStar}/>
                            <Link to="/StationInfo" className={stationCertainStyle.rightBtnBox}>
                                <img src="src/images/btn_right_arrow@2x.png" className={stationCertainStyle.rightBtn}/>
                            </Link>
                            <span className={stationCertainStyle.judgeNum}>9.0</span>
                        </p>
                        <p className={stationCertainStyle.location}>
                            <span>西城区百万庄大街2号甲</span>
                            <span className={stationCertainStyle.distance}>0.96km</span>
                        </p>
                    </div>
                </div>
                <div className={stationCertainStyle.storeDetail}>
                    <div className={stationCertainStyle.chunk}>
                        <p className={stationCertainStyle.amount}>23</p>
                        <p className={stationCertainStyle.describe}>全部商品</p>
                    </div>
                    <div className={stationCertainStyle.chunk}>
                        <p className={stationCertainStyle.amount}>398</p>
                        <p className={stationCertainStyle.describe}>粉丝</p>
                    </div>
                    <div className={stationCertainStyle.chunk}>
                        <p className={stationCertainStyle.amount}>1.98km</p>
                        <p className={stationCertainStyle.describe}>距离</p>
                    </div>
                </div>
            </div>
        )
    }
});

const SpecialOffer = React.createClass({
    render: function () {
        return (
            <ul className={stationCertainStyle.discount}>
                <li className={stationCertainStyle.discount_coupon}>
                    <p className={stationCertainStyle.saleNum}><span className={stationCertainStyle.saleUnit}>￥</span>5</p>
                    <p className={stationCertainStyle.saleDescribe}>满50元减5元</p>
                </li>
                <li className={stationCertainStyle.discount_coupon}>
                    <p className={stationCertainStyle.saleNum}><span className={stationCertainStyle.saleUnit}>￥</span>10</p>
                    <p className={stationCertainStyle.saleDescribe}>满100元减10元</p>
                </li>
                <li className={stationCertainStyle.discount_coupon}>
                    <p className={stationCertainStyle.saleNum}><span className={stationCertainStyle.saleUnit}>￥</span>30</p>
                    <p className={stationCertainStyle.saleDescribe}>满200元减30元</p>
                </li>
            </ul>
        )
    }
});
const Footer = React.createClass({
    render: function () {
        return (
            <div className={stationCertainStyle.footer}>
                <div className={stationCertainStyle.serve}>
                    <div className={stationCertainStyle.servicer}>分类</div>
                    <div className={stationCertainStyle.refer}>客服</div>
                    <div className={stationCertainStyle.cart}>
                        <span className={stationCertainStyle.cart_num}>7</span>
                        <p>购物车</p>
                    </div>
                </div>
                <div className={stationCertainStyle.settle}>
                    <div className={stationCertainStyle.purchase}>去结算</div>
                </div>
            </div>
        )
    }
});
function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        water:state.water,
    }
}
function mapDispatchToProps(dispatch){
    return{
        waterActionKeys : bindActionCreators(waterActions,dispatch),
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(StationCertain);

