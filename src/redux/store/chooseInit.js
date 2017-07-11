let bucket = [18.5,18,5,4.5,4];
let combo = ["买10送1","买20送3","买50送8","买100送20"];

var bucketList = function(list){
    var myList = [];
    for(let i =0;i < list.length;i++){
        myList.push({
            capacity:list[i],
            selected:false
        })
    }
    return myList;
};

var comboList = function(list){
    var mealList = [];
    for(let i =0;i < list.length;i++){
        mealList.push({
            favorable:list[i],
            selected:false
        })
    }
    return mealList;
};

export const chooseInit = {
    bucketList:bucketList(bucket),
    comboList:comboList(combo),
    volume:bucket[0]
};