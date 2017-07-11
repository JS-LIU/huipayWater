let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let Carousel = require('../components/Carousel');
let _h = require('../Util/HB');
let {ProductList,ProductRowList} = require('../components/ProductList');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import {waterTicketDetailActions} from '../redux/actions/waterTicketDetailActions';
import {chooseActions} from '../redux/actions/chooseActions';
import waterTicketDetailStyle from '../css/waterTicketDetailStyle.css';

const WaterTicketDetail = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/WaterTicketDetail');
        console.log(this.props.waterTicketDetail.skip);
    },
    // componentDidMount:function(){
    //      _h.ui.scrollToTheBottom(()=>{
    //          this.props.waterTicketDetailActionKeys.changeType(1);
    //      });
    // },
    render: function () {
        return (
            <div>
                <Header
                    waterTicketDetail={this.props.waterTicketDetail}
                    waterTicketDetailActionKeys={this.props.waterTicketDetailActionKeys}/>
                {this.props.waterTicketDetail.skip?
                    (<ProductShow
                        waterTicketDetail={this.props.waterTicketDetail}
                        water={this.props.water}
                        choose={this.props.choose}
                    chooseActionKeys={this.props.chooseActionKeys}/>):
                    (<ProductDetail
                        waterTicketDetail={this.props.waterTicketDetail}/>)}
            </div>
        )
    }
});
const Header = React.createClass({
    cutType:function(index){
        return()=>{
            this.props.waterTicketDetailActionKeys.changeType(index);
        }
    },
    render: function () {
        return (
            <div className={waterTicketDetailStyle.waterDetailTitle}>
                {/*<Link to="/Order" className={waterTicketDetailStyle.leftBtn}>*/}
                    {/*<p className={waterTicketDetailStyle.waterReturn}>订水</p>*/}
                {/*</Link>*/}
                <div className={waterTicketDetailStyle.waterDetailSkip}>
                    <p style={this.props.waterTicketDetail.skip?cActiveStyle:{}} className={waterTicketDetailStyle.skipProduct} onClick={this.cutType(0)}>水票</p>
                    <p style={this.props.waterTicketDetail.skip?{}:cActiveStyle} onClick={this.cutType(1)}>详情</p>
                </div>
                {/*<div className={waterTicketDetailStyle.rightBtn}>*/}
                    {/*<img src="src/images/nav_common_btn_share.png" className={waterTicketDetailStyle.rightShare}/>*/}
                {/*</div>*/}
            </div>
        )
    }
});

const ProductShow = React.createClass({
    chooseCombo:function(index){
        return()=>{
            this.props.chooseActionKeys.clearComboSelected();
            this.props.chooseActionKeys.selectedCombo(index);
        }
    },
    render: function () {
        let productInfo=this.props.waterTicketDetail.ticketInfo;
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
        let ticketCombo = this.props.choose.comboList.map((item,index)=>{
            return(
                <li
                    key={index}
                    onClick={this.chooseCombo(index)}
                    className={waterTicketDetailStyle.combo}
                    style={item.selected?comboActiveStyle:{}}>
                    {item.favorable}
                </li>
            )
        });
        return (
            <div className={waterTicketDetailStyle.waterDetail}>
                <Carousel
                    pictures={productInfo.pictures}
                    carouselStyle={carouselStyle}
                    direction="slideLeft"
                    auto={true}
                />
                <div className={waterTicketDetailStyle.text}>
                    <p className={waterTicketDetailStyle.brandName}><img src="src/images/common_lable_self-suport.png" className={waterTicketDetailStyle.support}/>喜腾山泉 天然饮用水 18L</p>
                    <p className={waterTicketDetailStyle.subBrand}>全市通用，每张水票换购一桶</p>
                    <p className={waterTicketDetailStyle.price}>
                        <span className={waterTicketDetailStyle.priceUnit}>￥</span>
                        <span className={waterTicketDetailStyle.priceNum}>22.00</span>
                        {/*<span>原价：￥26</span>*/}
                        <span className={waterTicketDetailStyle.sale}>已售：350</span></p>
                </div>
                <div className={waterTicketDetailStyle.promote}>
                    <p className={waterTicketDetailStyle.promoteTitle}>促销：</p>
                    <img src="src/images/full_sent.png" className={waterTicketDetailStyle.promotePic}/>
                    买100桶送饮水机一台
                </div>
                <Link to='/TicketCombo'>
                    <div className={waterTicketDetailStyle.selectPromote}>
                        <p className={waterTicketDetailStyle.selectPromoteTitle}>选择套餐</p>
                        <img src="src/images/btn_right_arrow@2x.png" className={waterTicketDetailStyle.more_right_btn}/>
                    </div>
                </Link>
                    <ul className={waterTicketDetailStyle.selectPackage}>
                        {ticketCombo}
                    </ul>
                <div className={waterTicketDetailStyle.service}>
                    <div className={waterTicketDetailStyle.promote}>
                        <p className={waterTicketDetailStyle.promoteTitle}>水票详情</p>

                    </div>
                    <div className={waterTicketDetailStyle.pledge}>
                        <p className={waterTicketDetailStyle.promoteTitle}>1.本水票仅限购买该品牌的水；</p>
                        <p className={waterTicketDetailStyle.promoteTitle}>2.每张水票换购一桶；</p>
                        <p className={waterTicketDetailStyle.promoteTitle}>3.请在有限期限内使用，过期作废。</p>
                    </div>
                </div>
                <ProductJudge/>
                <WaterStore/>
                <div className={waterTicketDetailStyle.recommend}>为你推荐</div>
                <ProductList water={this.props.water}>
                    <ProductRowList  water={this.props.water}/>
                </ProductList>
                {this.props.waterTicketDetail.skip?
                <div className={waterTicketDetailStyle.pullUp}>
                    上拉查看详情
                </div>:'<ProductDetail />'}
                <Footer/>
            </div>
        )
    }
});
const ProductJudge = React.createClass({
    render: function () {
        return (
            <div className={waterTicketDetailStyle.consume_judge}>
                <p className={waterTicketDetailStyle.proPromote}>
                    <span className={waterTicketDetailStyle.productJudge}>商品评价（121）</span>
                    <span className={waterTicketDetailStyle.examine}>查看更多 <img src="src/images/btn_right_arrow@2x.png" className={waterTicketDetailStyle.more_right_btn}/></span>
                </p>
                <div className={waterTicketDetailStyle.promoteContent}>
                    <div className={waterTicketDetailStyle.consumer}>
                        <img src="src/images/tempHeader.png" className={waterTicketDetailStyle.portrait}/>
                        <div className={waterTicketDetailStyle.userName}>
                            <p>林***小</p>
                            <p className={waterTicketDetailStyle.degree}>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_gray.png" alt=""/>
                            </p>
                        </div>
                        <p className={waterTicketDetailStyle.judgeTime}>2016-03-07</p>
                    </div>
                    <div className={waterTicketDetailStyle.judgeContent}>
                        <p>用币兑换太划算了，送货也及时，快递师傅也很辛苦！很划算，下次还会光顾!</p>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>
                </div>
                <div className={waterTicketDetailStyle.promoteContent}>
                    <div className={waterTicketDetailStyle.consumer}>
                        <img src="src/images/tempHeader.png" className={waterTicketDetailStyle.portrait}/>
                        <div className={waterTicketDetailStyle.userName}>
                            <p>林***小</p>
                            <p className={waterTicketDetailStyle.degree}>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_gray.png" alt=""/>
                            </p>
                        </div>
                        <p className={waterTicketDetailStyle.judgeTime}>2016-03-07</p>
                    </div>
                    <div className={waterTicketDetailStyle.judgeContent}>
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
            <div className={waterTicketDetailStyle.waterStore}>
                <div className={waterTicketDetailStyle.storeBasic}>
                    <img src="" className={waterTicketDetailStyle.storePic}/>
                    <div className={waterTicketDetailStyle.storeName}>
                        <p>怡宝桶装水旗舰店</p>
                        <p className={waterTicketDetailStyle.degree}>
                            <img src="src/images/icon_star_orange.png" alt=""/>
                            <img src="src/images/icon_star_orange.png" alt=""/>
                            <img src="src/images/icon_star_orange.png" alt=""/>
                            <img src="src/images/icon_star_orange.png" alt=""/>
                            <img src="src/images/icon_star_gray.png" alt=""/>
                            <span className={waterTicketDetailStyle.judgeNum}>9.0</span>
                        </p>
                    </div>
                    <Link to="/StationCertain">
                        <p className={waterTicketDetailStyle.enter_store_btn}>进入店铺</p>
                    </Link>
                </div>
                <div className={waterTicketDetailStyle.storeDetail}>
                    <div className={waterTicketDetailStyle.chunk}>
                        <p className={waterTicketDetailStyle.amount}>23</p>
                        <p className={waterTicketDetailStyle.describe}>全部商品</p>
                    </div>
                    <div className={waterTicketDetailStyle.chunk}>
                        <p className={waterTicketDetailStyle.amount}>398</p>
                        <p className={waterTicketDetailStyle.describe}>粉丝</p>
                    </div>
                    <div className={waterTicketDetailStyle.chunk}>
                        <p className={waterTicketDetailStyle.amount}>1.98km</p>
                        <p className={waterTicketDetailStyle.describe}>距离</p>
                    </div>
                </div>
            </div>
        )
    }
});

const Footer = React.createClass({
    render: function () {
        return (
            <div className={waterTicketDetailStyle.footer}>
                <div className={waterTicketDetailStyle.serve}>
                    <div className={waterTicketDetailStyle.servicer}>客服</div>
                    <div className={waterTicketDetailStyle.refer}>收藏</div>
                    <div className={waterTicketDetailStyle.cart}>
                        <span className={waterTicketDetailStyle.cart_num}>7</span>
                        <p>购物车</p>
                    </div>
                </div>
                <div className={waterTicketDetailStyle.settle}>
                    <div className={waterTicketDetailStyle.addCart}>加入购物车</div>
                    <div className={waterTicketDetailStyle.purchase}>立即购买</div>
                </div>
            </div>
        )
    }
});

const ProductDetail = React.createClass({
    render: function () {
        return (
            <div>
                的故事发生地方
            </div>
        )
    }
});

function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        waterTicketDetail:state.waterTicketDetail,
        water:state.water,
        choose:state.choose,
    }
}
function mapDispatchToProps(dispatch){
    return{
        waterTicketDetailActionKeys:bindActionCreators(waterTicketDetailActions,dispatch),
        chooseActionKeys:bindActionCreators(chooseActions,dispatch),
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(WaterTicketDetail);

const cActiveStyle={
    borderBottom:"0.04rem solid #000000"
};

const comboActiveStyle={
    border:"0.01rem solid #4dc0ff",
    color:"#4dc0ff"
};