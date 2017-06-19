import {GET_TICKET_LIST} from '../actions/waterTicketActionKeys';

export const waterTicketActions = {
    getTicketList:(index)=>{
        return {
            type: GET_TICKET_LIST,
            index
        }
    },
};
