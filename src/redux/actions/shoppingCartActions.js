import {UPDATE_PRODUCT_LIST} from './shoppingCartActionKeys';
import _shoppingCart from '../service/shoppingCartService';

export const shoppingCartActions = {
    checkProduct:(product)=> {
        return (dispatch,getState)=>{
            let products = getState().shoppingCart.cartList;
            let productInfo = _shoppingCart.getListInfo({
                changeList:function(){
                    return _shoppingCart.checkProduct(products,product);
                }
            });
            dispatch({type:'UPDATE_PRODUCT_LIST',productInfo});
        }
    },
    checkStore:(product)=> {
        return (dispatch,getState)=>{
            let products = getState().shoppingCart.cartList;
            let productInfo = _shoppingCart.getListInfo({
                changeList:function(){
                    return _shoppingCart.checkStore(products,product);
                }
            });
            dispatch({type:'UPDATE_PRODUCT_LIST',productInfo});
        }
    },
    allChecked:()=> {
        return (dispatch,getState)=>{
            let products = getState().shoppingCart.cartList;
            let isAllChecked = getState().shoppingCart.allChecked;
            let productInfo = _shoppingCart.getListInfo({
                changeList:function(){
                    return _shoppingCart.allCheck(products,isAllChecked);
                }
            });
            dispatch({type:'UPDATE_PRODUCT_LIST',productInfo});
        }
    },
    reduceNum:(product)=> {
        return (dispatch,getState)=>{
            let products = getState().shoppingCart.cartList;
            let productInfo = _shoppingCart.getListInfo({
                changeList:function(){
                    return _shoppingCart.reduceNum(products,product);
                }
            });
            dispatch({type:'UPDATE_PRODUCT_LIST',productInfo});
        }
    },
    increaseNum:(product)=> {
        return (dispatch,getState)=>{
            let products = getState().shoppingCart.cartList;
            let productInfo = _shoppingCart.getListInfo({
                changeList:function(){
                    return _shoppingCart.increaseNum(products,product);
                }
            });
            dispatch({type:'UPDATE_PRODUCT_LIST',productInfo});
        }
    },
};