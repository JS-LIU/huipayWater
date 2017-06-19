
export const waterTicket = function(state = {},action) {
    switch (action.type) {
        case 'GET_TICKET_LIST':
            let type = [...state.type];
            type.map((item,index)=>{
                item.selected = false;
            });
            type[action.index].selected = true;
            return Object.assign({},state,{
                type:type,
            });
        default:
            return state;
    }
};