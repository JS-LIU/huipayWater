import {SHOW_DIALOG,HIDE_DIALOG} from './dialogActionKeys';

export const dialogActions = {
    showDialog: () => {
        return {
            type: SHOW_DIALOG
        }
    },
    hideDialog: () => {
        return {
            type: HIDE_DIALOG
        }
    },
}
