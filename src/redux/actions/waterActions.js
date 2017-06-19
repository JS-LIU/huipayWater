import {GET_PRODUCTS,CHANGE_ARRAY_WAY} from '../actions/waterActionKeys';

export const waterActions = {
    getProductList:(index)=>{
        return {
            type: GET_PRODUCTS,
            index
        }
    },
    changeArray:()=>{
        return {
            type: CHANGE_ARRAY_WAY
        }
    },
};