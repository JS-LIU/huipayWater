const shoppingCart = {
    productList:[],

    getListInfo:{},

    checkProduct:{},
};

let goOn = true;

const iteratorProduct = function(cartList, condition) {
    goOn = true;
    for (let i = 0, item; item = cartList[i++];) {
        for(let j = 0, node; node = item.productList[j++];){
            if (goOn) {
                condition(item,node);
            } else {
                break;
            }
        }
    }
};

const comparePid = function(product, dosometh, go = true) {
    return function(item,node) {
        if (node.pId === product.pId) {
            if (!go) {
                goOn = false
            }
            return dosometh(item,node);
        }

    }
};

const iteratorStore = function(cartList, condition) {
    goOn = true;
    for (let i = 0, item; item = cartList[i++];) {
        if (goOn) {
            condition(item);
        } else {
            break;
        }
    }
};

const compareSid = function(product, dosometh, go = true) {
    return function(item) {
        if (item.sId === product.sId) {
            if (!go) {
                goOn = false
            }
            return dosometh(item);
        }
    }
};

shoppingCart.checkProduct=function(productList,product){
    shoppingCart.productList = productList;
    iteratorProduct(shoppingCart.productList, comparePid(product, function(item,node){
        node.checked = !node.checked;
        item.checked = true;
        for(let i = 0, node; node = item.productList[i++];){
            if(!node.checked){
                item.checked = false;
                return;
            }
        }
    }));
    return shoppingCart.productList;
};

shoppingCart.checkStore=function(productList,product){
    shoppingCart.productList = productList;
    iteratorStore(shoppingCart.productList, compareSid(product, function(item){
        item.checked = !item.checked;
        for(let i = 0, node; node = item.productList[i++];){
            node.checked = item.checked;
        }
    }));
    return shoppingCart.productList;
};

shoppingCart.allCheck=function(productList,isAllChecked){
    shoppingCart.productList = productList;
    if(isAllChecked) {
        iteratorStore(shoppingCart.productList, function (item) {
            item.checked = false;
            for (let i = 0, node; node = item.productList[i++];) {
                node.checked = item.checked;
            }
        })
    }else{
        iteratorStore(shoppingCart.productList, function (item) {
            item.checked = true;
            for (let i = 0, node; node = item.productList[i++];) {
                node.checked = item.checked;
            }
        })
    }
    return shoppingCart.productList;
};

shoppingCart.reduceNum=function(productList,product){
    shoppingCart.productList = productList;
    iteratorProduct(shoppingCart.productList, comparePid(product, function(item,node){
        if(node.number > 1) {
            node.number--;
        }else{
            node.number = 0;
        }
    }));
    return shoppingCart.productList;
};

shoppingCart.increaseNum=function(productList,product){
    shoppingCart.productList = productList;
    iteratorProduct(shoppingCart.productList, comparePid(product, function(item,node){
        node.number++;
    }));
    return shoppingCart.productList;
};


shoppingCart.getListInfo = function(obj){

    const changeList = obj.changeList || function(){
            throw new Error('必须传changeList方法');
        };
    const calc = function(){
        shoppingCart.allChecked = true;
        shoppingCart.productNum = 0;
        shoppingCart.totalPrice = 0;

        for(let i = 0,item;item = shoppingCart.productList[i++];){
            if(!item.checked){
                shoppingCart.allChecked = false;
            }else{

            }
        }
        return {
            allChecked:shoppingCart.allChecked
        }
    };

    return {
        productList:changeList(),
        allChecked:calc().allChecked
    }
};

module.exports = shoppingCart;