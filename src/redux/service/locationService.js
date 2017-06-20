/**
 * Created by LDQ on 2017/6/20.
 */


import AutoMap from '../domain/AutoMap';
import addressListService from './addressListService';


let locationService = {
    activityLocation:getActivityLocation

};

let customAddress = function(addressList){

};


let getActivityLocation = customAddress.after(defaultAddress).after(currentPosition);

module.exports = locationService;