import {GET_STATION_PRODUCTS,CHANGE_STATION_ARRAY} from '../actions/stationCertainActionKeys';

export const stationCertainActions = {
    getStationProductList:(index)=>{
        return {
            type: GET_STATION_PRODUCTS,
            index
        }
    },
    changeStationArray:()=>{
        return {
            type: CHANGE_STATION_ARRAY
        }
    },
};