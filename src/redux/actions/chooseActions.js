import {SELECTED_BUCKET,CLEAR_BUCKET_SELECTED,SELECTED_COMBO,CLEAR_COMBO_SELECTED} from './chooseActionKeys';
export const chooseActions= {
    selectedBucket:(index)=>{
        return {
            type:SELECTED_BUCKET,
            index
        }
    },
    clearBucketSelected:()=>{
        return {
            type:CLEAR_BUCKET_SELECTED
        }
    },
    selectedCombo:(index)=>{
        return {
            type:SELECTED_COMBO,
            index
        }
    },
    clearComboSelected:()=>{
        return {
            type:CLEAR_COMBO_SELECTED
        }
    },
};