export const stationCertain = function(state = {},action) {
    switch (action.type) {
        case 'GET_STATION_PRODUCTS':
            let type = [...state.type];
            type.map((item,index)=>{
                item.selected = false;
            });
            type[action.index].selected = true;
            return Object.assign({},state,{
                type:type,
            });
        case 'CHANGE_STATION_ARRAY':
            console.log(state);
            let arrange = state.arrange;
            arrange.array = !arrange.array;
            return Object.assign({},state,{
                arrange:arrange
            });
        default:
            return state;
    }
}