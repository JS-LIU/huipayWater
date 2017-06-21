/**
 * Created by LDQ on 2017/6/21.
 */

import AddressList from '../domain/AddressList';

let addressListService = function(addressList){
    let addressList = new AddressList(addressList);
    return {
        selected:function(selectedAddressInfo){
            addressList.selected(selectedAddressInfo);
            return addressList.addressListInfo
        },
        findSelected:function(){
            return addressList.findSelected()
        },
        findDefault:function(){
            return addressList.findDefault();
        }
    }
};

module.exports = addressListService;