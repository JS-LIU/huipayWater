/**
 * Created by LDQ on 2017/6/20.
 */


import AutoMap from '../domain/AutoMap';
import addressListService from './addressListService';


let locationService = {
    activityLocation:getActivityLocation

};

/**
 * 自主选择使用的地址
 * @param addressList
 * @returns {*}
 */
let customAddress = function(addressList){
    let addressInfo = addressListService(addressList).findSelected();
    if(typeof addressInfo !== 'undefined'){
        return addressInfo;
    }else{
        return 'nextSuccessor';
    }
};

/**
 * 默认地址
 * @param addressList
 * @returns {*}
 */
let defaultAddress = function(addressList){
    let addressInfo = addressListService(addressList).findDefault();
    if(typeof addressInfo !== 'undefined'){
        return addressInfo
    }else{
        return 'nextSuccessor';
    }
};

let currentPosition = function(){


};

let getActivityLocation = customAddress.after(defaultAddress).after(currentPosition);

module.exports = locationService;