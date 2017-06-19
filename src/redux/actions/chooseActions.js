import {SELECTED_BUCKET,CLEAR_SELECTED} from './chooseActionKeys';
export const chooseActions= {
    selectedBucket:(index)=>{
        return {
            type:SELECTED_BUCKET,
            index
        }
    },
    clearSelected:()=>{
        return {
            type:CLEAR_SELECTED
        }
    },
};