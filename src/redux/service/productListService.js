/**
 * Created by LDQ on 2017/6/19.
 */

import _h from '../../Util/HB';
import ProductList_waterTickets from '../domain/ProductList_waterTickets';
import ProductList_shop from '../domain/ProductList_shop';
import productList_waterProduct from '../domain/productList_waterProduct';

// import sortService from './sortService';


let productListParam = {
    'ProductList_waterTickets':function(state){
        return {
            sortList:state.sort_shopProductList.sortList,
            last:state.productList_shop.last,
            currentPage:state.productList_shop.pageNo,
            productList_shop:state.productList_shop,
            list:state.productList_shop.list,
        }
    }
};



/**
 * 获取水站 商品列表
 * @param state
 * @param pageNo
 * @param targetSort
 */
let getWaterProductList = function(state,pageNo,targetSort){

    let sortType = targetSort.type;
    let postData = Object.assign({},sortType,{
        accessInfo:state.loginInfo.baseLoginData,
        pageNo:pageNo,
        size:6
    });

    return _h.ajax.resource("/product/list").save({},postData)

};

/**
 * 获取水票列表
 * @param state
 * @param pageNo
 * @param targetSort
 */
let getTicketsProductList = function(state,pageNo,targetSort){

    let sortType = targetSort.type;
    let postData = Object.assign({},sortType,{
        accessInfo:state.loginInfo.baseLoginData,
        pageNo:pageNo,
        size:6
    });

    return _h.ajax.resource("/product/list").save({},postData)

};




/**
 * 已经是最后一页
 * @param type
 * @param state
 * @param pageNo
 * @param targetSort
 * @returns {*}
 */
let lastPage = function(type,state,pageNo,targetSort){
    if(productListParam[type].last){
        console.log("lastPage");
        return new Promise((resolve,reject)=>{
            resolve(productListParam[type](state).productList_shop);
        })
    }else {
        return 'nextSuccessor';
    }
};
/**
 * 第一次获取商品列表
 * @param type
 * @param state
 * @param pageNo
 * @param targetSort
 * @returns {string}
 */
let firstPost = function(type,state,pageNo,targetSort){
    let list = productListParam[type](state).list;
    if(list.length === 0){
        console.log("firstPost");
        return getShopProductList(state,pageNo,targetSort).then((listInfo)=>{
            let productListInfo = new _ProductList_shop(listInfo);
            return new Promise((resolve,reject)=>{
                resolve(productListInfo);
            })
        });
    }else{
        return 'nextSuccessor';
    }
};
/**
 * 获取下一页
 * @param type
 * @param state
 * @param pageNo
 * @param targetSort
 * @returns {string}
 */
let newPage = function(type,state,pageNo,targetSort){
    let currentPage = productListParam[type](state).currentPage;
    let existingList = productListParam[type](state).list;
    if(currentPage < pageNo){
        console.log("newPage");
        return getShopProductList(state,pageNo,targetSort).then((listInfo)=>{
            let productListInfo = new _ProductList_shop(listInfo);
            productListInfo.list = existingList.concat(productListInfo.list);
            return new Promise((resolve,reject)=>{
                resolve(productListInfo);
            })
        });

    }else{
        return 'nextSuccessor';
    }
};

/**
 * 更换排序选项
 * @param type
 * @param state
 * @param pageNo
 * @param targetSort
 * @returns {string}
 */
let differentSort = function(type,state,pageNo,targetSort){
    let sortList = productListParam[type](state).sortList;
    let currentSort = sortService(sortList).findCurrentSort();
    if(currentSort.key !== targetSort.key){
        console.log("differentSort");
        return getShopProductList(state,pageNo,targetSort).then((listInfo)=>{
            let productListInfo = new _ProductList_shop(listInfo);
            return new Promise((resolve,reject)=>{
                resolve(productListInfo);
            })
        });
    }else{
        return 'nextSuccessor';
    }
};

/**
 * 正序逆序切换
 * @param type
 * @param state
 * @param pageNo
 * @param targetSort
 * @returns {string}
 */
let differentWay = function(type,state,pageNo,targetSort){
    if(typeof targetSort.way !== 'undefined'){
        console.log("differentWay");
        targetSort.type[targetSort.key] = targetSort.way * -1;
        return getShopProductList(state,pageNo,targetSort).then((listInfo)=>{
            let productListInfo = new _ProductList_shop(listInfo);
            return new Promise((resolve,reject)=>{
                resolve(productListInfo);
            })
        });
    }else{
        return 'nextSuccessor';
    }
};

/**
 * 请求过的商品列表
 * @param type
 * @param state
 * @param pageNo
 * @param targetSort
 * @returns {*}
 */
let oldPage = function(type,state,pageNo,targetSort){
    let currentPage = productListParam[type](state).currentPage;
    if(currentPage <= pageNo){
        console.log("oldPage");
        return new Promise((resolve,reject)=>{
            resolve(productListParam[type](state).productList_shop);
        })
    }else{
        return 'nextSuccessor';
    }
};




let getProductList = lastPage.after(firstPost).after(newPage).after(differentSort).after(differentWay).after(oldPage);






let productListStrategies = {
    'ProductList_waterTickets':getProductList,
    'productList_waterProduct':getProductList,
    'ProductList_shop':ProductList_shop
};
/**
 * 获取商品列表
 * @param type
 * @param state
 * @param pageNo
 * @param targetSort
 */
let productList = function(type,state,pageNo,targetSort){
    return productListStrategies[type](type,state,pageNo,targetSort);
};

module.exports = productList;