import {SELECTED_BUCKET,CLEAR_BUCKET_SELECTED,SELECTED_COMBO,CLEAR_COMBO_SELECTED} from '../actions/chooseActionKeys';

function selected(list,index){
    list[index].selected = true;
    return list;
}
function clear(list){
    for(let i = 0;i < list.length;i++){
        list[i].selected = false;
    }
    return list;
}
export const choose = function(state = {},action){
    switch (action.type) {
        case 'SELECTED_BUCKET':
            console.log('----choose index----',action.index);
            return Object.assign({},state,{
                bucketList:selected([...state.bucketList],action.index),
                volume:state.bucketList[action.index].capacity,
            });
        case 'CLEAR_BUCKET_SELECTED':
            return Object.assign({},state,{
                bucketList:clear([...state.bucketList]),
            });
        case 'SELECTED_COMBO':
            return Object.assign({},state,{
                comboList:selected([...state.comboList],action.index),
            });
        case 'CLEAR_COMBO_SELECTED':
            return Object.assign({},state,{
                comboList:clear([...state.comboList]),
            });
        default:
            return state
    }
};