
export const water = function(state = {},action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            let type = [...state.type];
            type.map((item,index)=>{
                item.selected = false;
            });
            type[action.index].selected = true;
            return Object.assign({},state,{
                type:type,
            });
        case 'GET_PRODUCTS_BY_BRAND':
            let proType = state.type;
            let category = proType[3].category;
            category.map((item,index)=>{
                item.selected = false;
            });
            category[action.index].selected = true;
            console.log(category);
            return Object.assign({},state,{
                type:proType,
            });
        case 'CHANGE_ARRAY_WAY':
            let arrange = state.arrange;
            arrange.array = !arrange.array;
            return Object.assign({},state,{
                arrange:arrange
            });
        default:
            return state;
    }
}