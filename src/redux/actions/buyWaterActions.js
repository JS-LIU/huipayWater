import {GET_PRODUCTS,CHANGE_ARRAY_WAY} from './buyWaterActionKeys';
import _h from '../../Util/HB';

export const buyWaterActions = {
    getProductList:(index)=>{
        return {
            type: GET_PRODUCTS,
            index
        }
    }
};
