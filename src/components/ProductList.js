let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');

import productListStyle from '../css/productListStyle.css'

const ProductList = React.createClass({
    render:function(){
        return(
            <div>
                {this.props.children}
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
    cutArray:function(){
        this.props.waterActionKeys.changeArray();
    },
    render:function(){
        let typeNodes = this.props.water.type.map((item,index)=>{
            return(
                <li
                    key={index}
                    onClick={this.cutType(index)}
                    className={productListStyle.product_type_item}
                    style={item.selected?cActiveStyle:{}}>
                    {item.selected?(<div>
                        <span className={productListStyle.type_item_title}>{item.title}</span>
                        <img src={item.imgAction} alt="" className={productListStyle.type_item_icon}/>
                    </div>):(<div>
                        <span className={productListStyle.type_item_title}>{item.title}</span>
                        <img src={item.img} alt="" className={productListStyle.type_item_icon}/>
                    </div>)}
                </li>
            )
        });
        return(
            <ul className={productListStyle.product_type}>
                {typeNodes}
                <li onClick={this.cutArray} className={productListStyle.product_type_item}>
                    {this.props.water.arrange.array?
                        (<img src={this.props.water.arrange.imgAction} className={productListStyle.type_item_icon}/>):
                        (<img src={this.props.water.arrange.img} className={productListStyle.type_item_icon}/>)
                    }
                </li>
            </ul>
        )
    }
});

let StationProductType = React.createClass({
    cutType:function(index){
        return()=>{
            this.props.stationCertainActionKeys.getStationProductList(index);
        }
    },
    cutArray:function(){
        this.props.stationCertainActionKeys.changeStationArray();
    },
    render:function(){
        let typeNodes = this.props.stationCertain.type.map((item,index)=>{
            return(
                <li
                    key={index}
                    onClick={this.cutType(index)}
                    className={productListStyle.product_type_item}
                    style={item.selected?cActiveStyle:{}}>
                    {item.selected?(<div>
                        <span className={productListStyle.type_item_title}>{item.title}</span>
                        <img src={item.imgAction} alt="" className={productListStyle.type_item_icon}/>
                    </div>):(<div>
                        <span className={productListStyle.type_item_title}>{item.title}</span>
                        <img src={item.img} alt="" className={productListStyle.type_item_icon}/>
                    </div>)}
                </li>
            )
        });
        return(
            <ul className={productListStyle.product_type}>
                {typeNodes}
                <li onClick={this.cutArray} className={productListStyle.product_type_item}>
                    {this.props.stationCertain.arrange.array?
                        (<img src={this.props.stationCertain.arrange.imgAction} className={productListStyle.type_item_icon}/>):
                        (<img src={this.props.stationCertain.arrange.img} className={productListStyle.type_item_icon}/>)
                    }
                </li>
            </ul>
        )
    }
});

const ProductRowList = React.createClass({
    render: function () {
        let productNodes = this.props.water.productList.map((item,index)=>{
            return(
                <li className={productListStyle.row_productList_item} key={index}>
                    <Link to="/WaterDetail"  className="w">
                        <div className={productListStyle.row_item_pic_box}>
                            <img src="" alt="商品图片" className={productListStyle.row_item_pic}/>
                        </div>
                        <p className={productListStyle.row_item_title}>{item.title}</p>
                        <p className={productListStyle.row_item_price}><span className={productListStyle.row_price_unit}>￥</span>{item.price}</p>
                        <div className={productListStyle.row_item_extra}>
                            <span className={productListStyle.row_item_extra_sort}><img src={item.sort} className={productListStyle.item_sort_pic}/></span>
                            <span className={productListStyle.row_item_extra_sold}>已售：{item.sold}</span>
                            <img src="src/images/list_commom_btn_shopping-cart-.png" alt="" className={productListStyle.row_item_cart}/>
                        </div>
                    </Link>
                </li>
            )
        });
        return (
            <div>
                <ul className={productListStyle.row_product_list}>
                    {productNodes}
                </ul>
            </div>
        )
    }
});

let ProductVerList = React.createClass({
    render:function(){
        let productNodes = this.props.water.productList.map((item,index)=>{
            return(
                <li key={index}>
                    <Link to="/WaterDetail" className={productListStyle.ver_productList_item}>
                        <div className={productListStyle.ver_item_pic_box}>
                            <img src="" alt="商品图片" className={productListStyle.ver_item_pic}/>
                        </div>
                        <div className={productListStyle.ver_item_describe}>
                            <p className={productListStyle.ver_item_title}>{item.title}</p>
                            <p className={productListStyle.ver_item_subTotle}>{item.privilege}</p>
                            <p className={productListStyle.ver_item_price}><span className={productListStyle.ver_price_unit}>￥</span>{item.price}</p>
                            <div className={productListStyle.ver_item_extra}>
                                <span className={productListStyle.ver_item_extra_sort}><img src={item.sort} className={productListStyle.ver_item_sort_pic}/></span>
                                <span className={productListStyle.ver_item_extra_sold}>已售：{item.sold}</span>
                                <img src="src/images/list_commom_btn_shopping-cart-.png" alt="" className={productListStyle.ver_item_cart}/>
                            </div>
                        </div>
                    </Link>
                </li>
            )
        });
        return(
            <ul className={productListStyle.ver_product_list}>
                {productNodes}
            </ul>
        )
    }
});

module.exports = {ProductList,ProductType,StationProductType,ProductRowList,ProductVerList};

const cActiveStyle = {
    color:"#0A89FE"
};