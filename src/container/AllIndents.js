let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import allIndentsStyle from '../css/allIndentsStyle.css';

const AllIndents = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/AllIndents');
        this.props.historyUrlsActionKeys.mark('/AllIndents');
    },
    console:function(index){
        return()=> {
            console.log(index)
        }
    },
    render: function () {
        let indentsNodes = this.props.allIndents.indentsList.map((item,index)=>{
            return(
                <div className={allIndentsStyle.indentsNodes} key={index}>
                    <div className={allIndentsStyle.indents_head}>
                        <p className={allIndentsStyle.indents_store_name}>{item.storeName}</p>
                        <p className={allIndentsStyle.indents_state}>{item.condition}</p>
                    </div>
                    <ul className={allIndentsStyle.productList}>
                        {item.productList.map((item,index)=> {
                            return (
                                <li key={index} className={allIndentsStyle.productNodes}>
                                    <div className={allIndentsStyle.product_pic}><img src={item.pic} alt="" /></div>
                                    <div className={allIndentsStyle.product_detail}>
                                        <p className={allIndentsStyle.product_name}>{item.productName}</p>
                                        <p className={allIndentsStyle.product_volume}>{item.volume}</p>
                                        <p className={allIndentsStyle.product_price}>
                                            ￥ <span className={allIndentsStyle.product_sale}>{item.sale}</span> x {item.number}
                                        </p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <p className={allIndentsStyle.statistics}>
                        共{item.number}件商品，实付：
                        <span className={allIndentsStyle.price_unit}>￥</span>
                        <span className={allIndentsStyle.price_total}></span>
                    </p>
                    {item.waitReturn?"":<div>
                        {item.complete || item.saleReturn ?
                            <Link to="/" className={allIndentsStyle.next_operate}>
                                <p className={allIndentsStyle.operate_item}  onClick={this.console(0)}>再来一单</p>
                            </Link>:
                            <div className={allIndentsStyle.next_operate}>
                                {item.payment?<Link to="/" className={allIndentsStyle.operate_item} onClick={this.console(1)}>支付</Link>:
                                    <div>
                                        {item.delivery?<Link to="/" className={allIndentsStyle.operate_item} onClick={this.console(2)}>签收</Link>:
                                            <div>
                                                <Link to="/" className={allIndentsStyle.operate_item} onClick={this.console(0)}>再来一单</Link>
                                                <Link to="/" className={allIndentsStyle.operate_item}  onClick={this.console(3)}>评价</Link>
                                            </div>}
                                    </div>}
                            </div>}
                        </div>}
                </div>
            )
        });
        return (
            <div className={allIndentsStyle.allIndents}>
                {indentsNodes}
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