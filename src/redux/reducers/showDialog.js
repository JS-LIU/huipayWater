import {SHOW_DIALOG} from '../actions/dialogActionKeys';

export const showDialog = function(state = {},action) {
    switch (action.type) {
        case 'SHOW_DIALOG':
            return Object.assign({},state,{
                showDialog:true
            });
        case 'HIDE_DIALOG':
            return Object.assign({},state,{
                showDialog:false
            });
        default:
            return state;
    }
};