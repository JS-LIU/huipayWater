import {GET_PRODUCTS,CHANGE_ARRAY_WAY,GET_PRODUCTS_BY_BRAND} from '../actions/waterActionKeys';

export const waterActions = {
    getProductList:(index)=>{
        return {
            type: GET_PRODUCTS,
            index
        }
    },
    getProductListByBrand:(index)=>{
        return {
            type: GET_PRODUCTS_BY_BRAND,
            index
        }
    },
    changeArray:()=>{
        return {
            type: CHANGE_ARRAY_WAY
        }
    },
};