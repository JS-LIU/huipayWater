let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let {MyOrderList,RestList} = require('./../components/AssembleList');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import myStyle from '../css/myStyle.css'

const My = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/My');
        this.props.historyUrlsActionKeys.mark('/My');
    },
    render: function () {
        return (
            <div className={myStyle.my}>
                <div className={myStyle.my_header}>
                    <div className={myStyle.my_header_icon}>
                        <img src="" alt="" className={myStyle.header_icon_pic}/>
                    </div>
                    <div className={myStyle.my_info}>
                        <p className={myStyle.my_info_name}>郑强</p>
                        <p>汇贝号：54613200</p>
                    </div>
                    <div className={myStyle.more_right_btn}>
                        <Link to="/">
                            <img src="src/images/btn_right_arrow@2x.png" className={myStyle.rightBtn}/>
                        </Link>
                    </div>
                </div>
                <div className={myStyle.general_idea}>
                    <div className={myStyle.idea_item}>
                        <p>11</p>
                        <p className={myStyle.idea_item_describe}>水票</p>
                    </div>
                    <div className={myStyle.idea_item}>
                        <p>3</p>
                        <p className={myStyle.idea_item_describe}>代金券</p>
                    </div>
                    <div className={myStyle.idea_item}>
                        <p>200</p>
                        <p className={myStyle.idea_item_describe}>喜币</p>
                    </div>
                </div>
                <div className={myStyle.my_order}>
                    <div className={myStyle.my_order_title}>
                        <p className={myStyle.title_text}>我的订单</p>
                        <p className={myStyle.check_more}>
                            <Link to="/AllIndents">
                            查看全部
                            </Link>
                        </p>
                    </div>
                    <MyOrderList itemList={[{
                        name:"待付款",
                        url:'',
                        icon:'src/images/me_order_pending-payment.png'
                    }, {
                        name:'待收货',
                        url:'',
                        icon:'src/images/me_order_pending_receive.png'
                    },{
                        name:'待评价',
                        url:'',
                        icon:'src/images/me_order_pending_evaluation.png'
                    },{
                        name:'退换',
                        url:'',
                        icon:'src/images/me_order_return-goods.png'
                    }]}/>
                </div>
                <RestList itemList={[{
                    name:"我要开店",
                    url:'',
                    icon:'src/images/me_icon_open_station.png'
                }, {
                    name:'我的收藏',
                    url:'',
                    icon:'src/images/me_icon_collection.png'
                }]}/>
                <RestList itemList={[{
                    name:"设置",
                    url:'',
                    icon:'src/images/me_icon_setup.png'
                }, {
                    name:'客服',
                    url:'',
                    icon:'src/images/me_icon_service.png'
                }]}/>
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
module.exports = connect(mapStateToProps,mapDispatchToProps)(My);