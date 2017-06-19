import {GET_PRODUCTS,CHANGE_ARRAY_WAY} from '../actions/orderActionKeys';
import _h from '../../Util/HB';

export const orderActions = {
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
