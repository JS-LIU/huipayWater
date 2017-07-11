export const waterDetail = function(state = {},action) {
    switch (action.type) {
        case'CHANGE_TYPE':
            let skip = state.skip;
            if(action.index == 0){
                skip = true;
            }else{
                skip=false;
            }
            return Object.assign({},state,{
                skip:skip
            });
        default:
            return state;
    }
};