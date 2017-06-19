/**
 * Created by LDQ on 2017/6/19.
 */
class ProductListInterface{
    constructor(info){
        if(typeof info.last === 'undefined'){
            this.last = true;
        }else{
            this.last = info.last;
        }
    }
}

module.exports = ProductListInterface;