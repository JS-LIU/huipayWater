
export const map = function(state = {},action) {
    switch (action.type) {
        case 'SET_LOCATION_ADDRESS':
            return Object.assign({},state,{
                address:action.address,
                boolean:false,
            });
        case 'SET_LOCATION_CITY':
            return Object.assign({},state,{
                city:action.city
            });
        default:
            return state;
    }
};
