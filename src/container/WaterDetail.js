let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let Carousel = require('../components/Carousel');
let _h = require('../Util/HB');
let ProductList = require('../components/ProductList');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import {waterDetailActions} from '../redux/actions/waterDetailActions';
import {chooseActions} from '../redux/actions/chooseActions';
import waterDetailStyle from '../css/waterDetailStyle.css';

const WaterDetail = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/WaterDetail');
    },
    render: function () {
        return (
            <div>
                {/*<Header*/}
                    {/*waterDetail={this.props.waterDetail}*/}
                    {/*waterDetailActionKeys={this.props.waterDetailActionKeys}/>*/}
                {this.props.waterDetail.skip?
                    (<ProductShow
                        waterDetail={this.props.waterDetail}
                        water={this.props.water}
                        choose={this.props.choose}/>):
                    (<ProductDetail
                        waterDetail={this.props.waterDetail}/>)}
            </div>
        )
    }
});
const Header = React.createClass({
    cutType:function(index){
        return()=>{
            this.props.waterDetailActionKeys.changeType(index);
        }
    },
    render: function () {
        return (
            <div className={waterDetailStyle.waterDetailTitle}>
                <Link to="/Order" className={waterDetailStyle.leftBtn}>
                    <p className={waterDetailStyle.waterReturn}>订水</p>
                </Link>
                <div className={waterDetailStyle.waterDetailSkip}>
                    <p style={this.props.waterDetail.skip?cActiveStyle:{}} className={waterDetailStyle.skipProduct} onClick={this.cutType(0)}>商品</p>
                    <p style={this.props.waterDetail.skip?{}:cActiveStyle} onClick={this.cutType(1)}>详情</p>
                </div>
                <div className={waterDetailStyle.rightBtn}>
                    <img src="src/images/nav_common_btn_share.png" className={waterDetailStyle.rightShare}/>
                </div>
            </div>
        )
    }
});

const ProductShow = React.createClass({
    render: function () {
        let productInfo=this.props.waterDetail.productInfo;
        let window_w = document.body.clientWidth;
        let totalDistance = window_w * productInfo.pictures.length;
        var carouselStyle = {
            bigBox:{
                width:window_w+"px",
            },
            smBox:{
                width:totalDistance + "px"
            }
        };
        return (
            <div className={waterDetailStyle.waterDetail}>
                <Carousel
                    pictures={productInfo.pictures}
                    carouselStyle={carouselStyle}
                    direction="slideLeft"
                    auto={true}
                />
                <div className={waterDetailStyle.text}>
                    <p className={waterDetailStyle.brandName}><img src="src/images/common_lable_self-suport.png" className={waterDetailStyle.support}/>喜腾山泉 天然饮用水 18L</p>
                    <p className={waterDetailStyle.subBrand}>乐百氏矿泉水限时特价</p>
                    <p className={waterDetailStyle.price}>
                        <span className={waterDetailStyle.priceUnit}>￥</span>
                        <span className={waterDetailStyle.priceNum}>22.00</span>
                        <span>原价：￥26</span>
                        <span className={waterDetailStyle.sale}>已售：350</span></p>
                </div>
                <div className={waterDetailStyle.promote}>
                    <p className={waterDetailStyle.promoteTitle}>促销：</p>
                    <img src="src/images/common_lable_self-suport.png" className={waterDetailStyle.promotePic}/>
                    买100桶送饮水机一台
                </div>
                <Link to="/Choose">
                    <div className={waterDetailStyle.promote}>
                        <p className={waterDetailStyle.promoteTitle}>选择：</p>
                        <p className={waterDetailStyle.capacity}>{this.props.choose.volume}L</p>
                        <img src="src/images/btn_right_arrow@2x.png" className={waterDetailStyle.more_right_btn}/>
                    </div>
                </Link>
                <div className={waterDetailStyle.service}>
                    <div className={waterDetailStyle.promote}>
                        <p className={waterDetailStyle.promoteTitle}>服务：</p>
                        24小时以内送达
                    </div>
                    <div className={waterDetailStyle.pledge}>
                        <p className={waterDetailStyle.promoteTitle}>押金：</p>
                        <p className={waterDetailStyle.sDescribe}>水站送水时将回收同一品牌空桶，无同一品牌空桶的，水站将另外收取水桶押金。退押金时凭空桶及押金条与水站直接办理，与本平台无关。</p>
                    </div>
                </div>
                <ProductJudge/>
                <WaterStore/>
                <div className={waterDetailStyle.recommend}>为你推荐</div>
                <ProductList
                    water={this.props.water}/>
                <div className={waterDetailStyle.pullUp}>
                    上拉查看详情
                </div>
                <Footer/>
            </div>
        )
    }
});
const ProductJudge = React.createClass({
    render: function () {
        return (
            <div className={waterDetailStyle.consume_judge}>
                <p className={waterDetailStyle.proPromote}>
                    <span className={waterDetailStyle.productJudge}>商品评价（121）</span>
                    <span className={waterDetailStyle.examine}>查看更多 <img src="src/images/btn_right_arrow@2x.png" className={waterDetailStyle.more_right_btn}/></span>
                </p>
                <div className={waterDetailStyle.promoteContent}>
                    <div className={waterDetailStyle.consumer}>
                        <img src="src/images/tempHeader.png" className={waterDetailStyle.portrait}/>
                        <div className={waterDetailStyle.userName}>
                            <p>林***小</p>
                            <p className={waterDetailStyle.degree}>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_gray.png" alt=""/>
                            </p>
                        </div>
                        <p className={waterDetailStyle.judgeTime}>2016-03-07</p>
                    </div>
                    <div className={waterDetailStyle.judgeContent}>
                        <p>用币兑换太划算了，送货也及时，快递师傅也很辛苦！很划算，下次还会光顾!</p>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>
                </div>
                <div className={waterDetailStyle.promoteContent}>
                    <div className={waterDetailStyle.consumer}>
                        <img src="src/images/tempHeader.png" className={waterDetailStyle.portrait}/>
                        <div className={waterDetailStyle.userName}>
                            <p>林***小</p>
                            <p className={waterDetailStyle.degree}>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_gray.png" alt=""/>
                            </p>
                        </div>
                        <p className={waterDetailStyle.judgeTime}>2016-03-07</p>
                    </div>
                    <div className={waterDetailStyle.judgeContent}>
                        <p>用币兑换太划算了，送货也及时，快递师傅也很辛苦！很划算，下次还会光顾!</p>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
});

const WaterStore = React.createClass({
    render: function () {
        return (
            <div className={waterDetailStyle.waterStore}>
                <div className={waterDetailStyle.storeBasic}>
                    <img src="" className={waterDetailStyle.storePic}/>
                    <div className={waterDetailStyle.storeName}>
                        <p>怡宝桶装水旗舰店</p>
                        <p className={waterDetailStyle.degree}>
                            <img src="src/images/icon_star_orange.png" alt=""/>
                            <img src="src/images/icon_star_orange.png" alt=""/>
                            <img src="src/images/icon_star_orange.png" alt=""/>
                            <img src="src/images/icon_star_orange.png" alt=""/>
                            <img src="src/images/icon_star_gray.png" alt=""/>
                            <span className={waterDetailStyle.judgeNum}>9.0</span>
                        </p>
                    </div>
                    <Link to="/StationCertain">
                        <p className={waterDetailStyle.enter_store_btn}>进入店铺</p>
                    </Link>
                </div>
                <div className={waterDetailStyle.storeDetail}>
                    <div className={waterDetailStyle.chunk}>
                        <p className={waterDetailStyle.amount}>23</p>
                        <p className={waterDetailStyle.describe}>全部商品</p>
                    </div>
                    <div className={waterDetailStyle.chunk}>
                        <p className={waterDetailStyle.amount}>398</p>
                        <p className={waterDetailStyle.describe}>粉丝</p>
                    </div>
                    <div className={waterDetailStyle.chunk}>
                        <p className={waterDetailStyle.amount}>1.98km</p>
                        <p className={waterDetailStyle.describe}>距离</p>
                    </div>
                </div>
            </div>
        )
    }
});

const Footer = React.createClass({
    render: function () {
        return (
            <div className={waterDetailStyle.footer}>
                <div className={waterDetailStyle.serve}>
                    <div className={waterDetailStyle.servicer}>客服</div>
                    <div className={waterDetailStyle.refer}>收藏</div>
                    <div className={waterDetailStyle.cart}>
                        <span className={waterDetailStyle.cart_num}>7</span>
                        <p>购物车</p>
                    </div>
                </div>
                <div className={waterDetailStyle.settle}>
                    <div className={waterDetailStyle.addCart}>加入购物车</div>
                    <div className={waterDetailStyle.purchase}>立即购买</div>
                </div>
            </div>
        )
    }
});

const ProductDetail = React.createClass({
    render: function () {
        return (
            <div>

            </div>
        )
    }
});

function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        waterDetail:state.waterDetail,
        water:state.water,
        choose:state.choose,
    }
}
function mapDispatchToProps(dispatch){
    return{
        waterDetailActionKeys : bindActionCreators(waterDetailActions,dispatch),
        chooseActionKeys : bindActionCreators(chooseActions,dispatch),
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(WaterDetail);

const cActiveStyle={
    borderBottom:"0.04rem solid #000000"
};