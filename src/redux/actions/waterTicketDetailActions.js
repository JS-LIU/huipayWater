import {CHANGE_TYPE} from '../actions/waterTicketDetailActionKeys';

export const waterTicketDetailActions = {
    changeType:(index)=>{
        return {
            type:CHANGE_TYPE,
            index
        }
    },
};