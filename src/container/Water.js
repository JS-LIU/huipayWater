let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let _h = require('../Util/HB');

import {ProductList,ProductRowList,ProductVerList} from '../components/ProductList';
import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import {waterActions} from '../redux/actions/waterActions';
import waterStyle from '../css/waterStyle.css';

const Water = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/Water');
        this.props.historyUrlsActionKeys.mark('/Water');
    },
    render: function () {
        return (
            <div>
                <WaterHeader
                    water={this.props.water}
                    waterActionKeys={this.props.waterActionKeys}
                />
                <div className={waterStyle.productList}>
                    <ProductType water={this.props.water} waterActionKeys={this.props.waterActionKeys}/>
                    <ProductList water={this.props.water} waterActionKeys={this.props.waterActionKeys}>
                        {this.props.water.arrange.array?
                            (<ProductRowList
                                water={this.props.water}/>):
                            (<ProductVerList
                                water={this.props.water}/>)}
                    </ProductList>
                </div>
            </div>
        )
    }
});

let WaterHeader = React.createClass({
    cutArray:function(){
        this.props.waterActionKeys.changeArray();
    },
    render: function () {
        return (
            <div className={waterStyle.waterTitle}>
                <Link to="/Order">
                    <p className={waterStyle.waterReturn}>返回</p>
                </Link>
                <p className={waterStyle.search_box}>
                    <img src="src/images/search-box_btn_search.png" alt="" className={waterStyle.search_btn}/>
                    <input type="string" className={waterStyle.water_search} placeholder="搜索商品"/>
                </p>
                <p onClick={this.cutArray}>
                    {this.props.water.arrange.array?
                        (<img src={this.props.water.arrange.imgAction} className={waterStyle.right_btn}/>):
                        (<img src={this.props.water.arrange.img} className={waterStyle.right_btn}/>)
                    }
                </p>
            </div>
        )
    }
});

let ProductType = React.createClass({
    cutType:function(index){
        return()=>{
            this.props.waterActionKeys.getProductList(index);
        }
    },
    selectBrand:function(index){
        return()=>{
            this.props.waterActionKeys.getProductListByBrand(index);
        }
    },
    render:function(){
        let typeNodes = this.props.water.type.map((item,index)=>{
            return(
                <li key={index} onClick={this.cutType(index)} className={waterStyle.product_type_item} style={item.selected?cActiveStyle:{}}>
                    <span className={waterStyle.type_item_title}>{item.title}</span>
                </li>
            )
        });
        let brandTypeNodes = this.props.water.type[3].category.map((item,index)=>{
            return(
                <li key={index} onClick={this.selectBrand(index)} className={waterStyle.category_type}  style={item.selected?brandActiveStyle:{}}>
                    <span>{item.brand}</span>
                </li>
            )
        });
        return(
            <div>
                <ul className={waterStyle.product_type}>
                    {typeNodes}
                </ul>
                {this.props.water.type[3].selected?
                    (<div>
                        <div className={waterStyle.mask}></div>
                        <ul className={waterStyle.brand_type}>{brandTypeNodes}</ul>
                    </div>):''}
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

module.exports = connect(mapStateToProps,mapDispatchToProps)(Water);

const cActiveStyle = {
    color:"#0A89FE"
};
const brandActiveStyle = {
    color:"#0A89FE",
    background:'url("src/images/select_brand.png") no-repeat 6.9rem center',
    backgroundSize:'0.3rem 0.16rem ',
};
