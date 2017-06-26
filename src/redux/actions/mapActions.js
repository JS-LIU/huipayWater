
import {SET_LOCATION_ADDRESS,SET_LOCATION_CITY} from './mapActionKeys';

export const mapActions = {
    setLocationAddress:(address)=> {
        return {
            type: SET_LOCATION_ADDRESS,
            address
        }
    },
    setLocationCity:(city)=> {
        return {
            type: SET_LOCATION_CITY,
            city
        }
    }
};