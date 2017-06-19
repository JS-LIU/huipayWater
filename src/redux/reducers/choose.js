import {SELECTED_BUCKET,CLEAR_SELECTED} from '../actions/chooseActionKeys';

function selected(bucketList,index){
    bucketList[index].selected = true;
    return bucketList;
}
function clear(bucketList){
    for(let i = 0;i < bucketList.length;i++){
        bucketList[i].selected = false;
    }
    return bucketList;
}
export const choose = function(state = {},action){
    switch (action.type) {
        case 'SELECTED_BUCKET':
            return Object.assign({},state,{
                bucketList:selected([...state.bucketList],action.index),
                volume:state.bucketList[action.index].capacity,
            });
        case 'CLEAR_SELECTED':
            return Object.assign({},state,{
                bucketList:clear([...state.bucketList]),
            });
        default:
            return state
    }
};