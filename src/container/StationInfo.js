let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let $ = require ('jquery');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import stationInfoStyle from '../css/stationInfoStyle.css'

const StationInfo = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/StationInfo');
    },
    render: function () {
        return (
            <div className={stationInfoStyle.stationInfo}>
                <div className={stationInfoStyle.infoModule}>
                    <img src="" alt="商店大图" className={stationInfoStyle.stationPic}/>
                    <div className={stationInfoStyle.stationTitle}>
                        <p className={stationInfoStyle.titleName}>乐百氏水便利</p>
                        <p className={stationInfoStyle.stationStar}>
                            <img src="src/images/icon_star_orange.png" className={stationInfoStyle.judgeStar}/>
                            <img src="src/images/icon_star_orange.png" className={stationInfoStyle.judgeStar}/>
                            <img src="src/images/icon_star_orange.png" className={stationInfoStyle.judgeStar}/>
                            <img src="src/images/icon_star_orange.png" className={stationInfoStyle.judgeStar}/>
                            <img src="src/images/icon_star_gray.png" className={stationInfoStyle.judgeStar}/>
                            8.0分
                        </p>
                    </div>
                </div>
                <div className={stationInfoStyle.infoModule}>
                    <div className={stationInfoStyle.quickMark}>
                        <p className={stationInfoStyle.infoLeft}>店铺二维码</p>
                        <Link to="/" className={stationInfoStyle.rightBtnBox}>
                            <img src="src/images/btn_right_arrow@2x.png" className={stationInfoStyle.rightBtn}/>
                        </Link>
                    </div>
                    <div className={stationInfoStyle.address}>
                        <p className={stationInfoStyle.infoLeft}>金水区经三路丰产路交叉东北角</p>
                        <p className={stationInfoStyle.rightBtnBox}>1.98km</p>
                    </div>
                    <div className={stationInfoStyle.telephone}>
                        <p className={stationInfoStyle.infoLeft}>6346608 、1356864468</p>
                        <Link to="/" className={stationInfoStyle.rightBtnBox}>
                            <img src="src/images/station-details_btn_phone.png" className={stationInfoStyle.rightBtnPhone}/>
                        </Link>
                    </div>
                    <div className={stationInfoStyle.subBranch}>
                        <p className={stationInfoStyle.infoLeft}>其他分店</p>
                        <Link to="/" className={stationInfoStyle.rightBtnBox}>
                            5<img src="src/images/btn_right_arrow@2x.png" className={stationInfoStyle.rightBtn}/>
                        </Link>
                    </div>
                </div>
                <div className={stationInfoStyle.infoModule}>
                    <p className={stationInfoStyle.sentTime}>配送时间：8:30 - 19:00</p>
                    <p className={stationInfoStyle.sentRange}>配送范围：附近5公里</p>
                </div>
                <div className={stationInfoStyle.abstract}>
                    <p className={stationInfoStyle.headline}>商家简介:</p>
                    <div className={stationInfoStyle.particulars}>
                        我公司是最早从事桶装水经营的公司之一，现有职工20多人，现有连锁门店10多家。我们的精英总是：客户至上、用心服务、客户至上、用心服务，您的健康使我们最大的希望。
                    </div>
                    <p className={stationInfoStyle.pullDown}></p>
                </div>
                <Judge/>
            </div>
        )
    }
});

const Judge = React.createClass({
    render: function () {
        return (
            <div className={stationInfoStyle.consume_judge}>
                <p className={stationInfoStyle.proPromote}>
                    <span className={stationInfoStyle.productJudge}>评价（121）</span>
                    <span className={stationInfoStyle.examine}> <img src="src/images/btn_right_arrow@2x.png" className={stationInfoStyle.more_right_btn}/></span>
                </p>
                <div className={stationInfoStyle.promoteContent}>
                    <div className={stationInfoStyle.consumer}>
                        <img src="src/images/tempHeader.png" className={stationInfoStyle.portrait}/>
                        <div className={stationInfoStyle.userName}>
                            <p>林***小</p>
                            <p className={stationInfoStyle.degree}>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_gray.png" alt=""/>
                            </p>
                        </div>
                        <p className={stationInfoStyle.judgeTime}>2016-03-07</p>
                    </div>
                    <div className={stationInfoStyle.judgeContent}>
                        <p>用币兑换太划算了，送货也及时，快递师傅也很辛苦！很划算，下次还会光顾!</p>
                        <img src="" alt=""/>
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
function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
    }
}
function mapDispatchToProps(dispatch){
    return{
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(StationInfo);
