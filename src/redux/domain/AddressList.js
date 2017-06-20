/**
 * Created by LDQ on 2017/6/20.
 */

//  转换规格
let converseAddressList ={

    iterator:function(list,func){
        for(let i = 0;i < list.length;i++){
            func(list[i],i);
        }
    },
    addProp:function(item,prop){
        if(typeof item.selected === "undefined"){
            return Object.assign(item,prop);
        }
    }
};


let addressListOperator = {
    findSelected:function(list){
        function isSelected(item){
            if(item.selected){
                return item;
            }
        }

        return list.find(isSelected);
    },
    changeSelectedState:function(list,selectedAddressInfo){

        //  如果当前选择地址未被选中
        if(!selectedAddressInfo.selected){
            //  将其他的选项变为未选择
            for(let i = 0,addressInfo; list = addressInfo[i++];){
                addressInfo.selected = false;
            }
        }

        selectedAddressInfo.selected = !selectedAddressInfo.selected;
    },
};



class AddressList{
    constructor(info){
        this.addressListInfo = info;
        let list = this.addressListInfo.list;
        converseAddressList.iterator(list,function(address){
            converseAddressList.addProp(address,{selected:false});
        });
    }
    selected(addressInfo){
        addressListOperator.changeSelectedState(this.addressListInfo.list,addressInfo);

    }
    findSelected(){
        return addressListOperator.findSelected(this.addressListInfo.list);
    }
}
module.exports = AddressList;