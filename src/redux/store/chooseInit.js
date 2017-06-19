var bucket = [18.5,18,5,4.5,4];

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

export const chooseInit = {
    bucketList:bucketList(bucket),
    volume:bucket[0]
};