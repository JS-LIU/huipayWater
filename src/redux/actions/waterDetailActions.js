import {CHANGE_TYPE} from '../actions/waterDetailActionKeys';

export const waterDetailActions = {
    changeType:(index)=>{
        return {
            type:CHANGE_TYPE,
            index
        }
    },
};