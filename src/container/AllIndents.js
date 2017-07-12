let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let Button = require ('../components/Button');
import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import allIndentsStyle from '../css/allIndentsStyle.css';

const AllIndents = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/AllIndents');
        this.props.historyUrlsActionKeys.mark('/AllIndents');
    },

    render: function () {
        return (
            <div className={allIndentsStyle.allIndents}>
                {/*<div className={allIndentsStyle.title}>全部订单</div>*/}
                <div className={allIndentsStyle.indentsNodes} >
                    <div className={allIndentsStyle.indents_head}>
                        <p className={allIndentsStyle.indents_store_name}>乐百氏旗舰店</p>
                        <p className={allIndentsStyle.indents_state}>待付款</p>
                    </div>
                    <ul className={allIndentsStyle.productList}>
                        <li className={allIndentsStyle.productNodes}>
                            <div className={allIndentsStyle.product_pic}><img src="src/images/goods_ticket_bg.png" alt=""/></div>
                            <div className={allIndentsStyle.product_detail}>
                                <p className={allIndentsStyle.product_name}>乐百氏 矿泉水</p>
                                <p className={allIndentsStyle.product_volume}>18.9L</p>
                                <p className={allIndentsStyle.product_price}>
                                    ￥ <span className={allIndentsStyle.product_sale}>22.00</span> x 1
                                </p>
                            </div>
                        </li>
                        <li className={allIndentsStyle.productNodes}>
                            <div className={allIndentsStyle.product_pic}><img src="src/images/goods_ticket_bg.png" alt=""/></div>
                            <div className={allIndentsStyle.product_detail}>
                                <p className={allIndentsStyle.product_name}>乐百氏 矿泉水</p>
                                <p className={allIndentsStyle.product_volume}>18.9L</p>
                                <p className={allIndentsStyle.product_price}>
                                    ￥ <span className={allIndentsStyle.product_sale}>22.00</span> x 1
                                </p>
                            </div>
                        </li>
                    </ul>
                    <p className={allIndentsStyle.statistics}>
                        共1件商品，实付：
                        <span className={allIndentsStyle.price_unit}>￥</span>
                        <span className={allIndentsStyle.price_total}>23.00</span>
                    </p>
                    <div className={allIndentsStyle.operate}>
                        <p className={allIndentsStyle.operate_item}>再来一单</p>
                    </div>
                </div>


            </div>
        )
    }
});
function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        allIndents:state.allIndents,
    }
}
function mapDispatchToProps(dispatch){
    return{
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(AllIndents);
