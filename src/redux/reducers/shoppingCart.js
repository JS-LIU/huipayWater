export const shoppingCart = function(state = {},action) {
    switch (action.type) {
        case'UPDATE_PRODUCT_LIST':
            return Object.assign({},state,{
                cartList:action.productInfo.productList,
                allChecked:action.productInfo.allChecked,
            });
        case'INCREASE_NUM':
            let num = action.item.number;
            num++;
            console.log(num);
            return Object.assign({},state,{
            });
        default:
            return state;
    }
};