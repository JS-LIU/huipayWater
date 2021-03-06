export const waterInit = {
    productList: [
        {
            pic: "",
            title: "喜腾山泉 天然饮用水  18L",
            privilege:"买十送一",
            price: "22.00",
            sort: "src/images/common_lable_self-suport.png",
            sold: "1233",
        },
        {
            pic: "",
            title: "景田",
            privilege:"买十送一",
            price: "23.00",
            sort: "src/images/common_lable_self-suport.png",
            sold: "563",
        },
        {
            pic: "",
            title: "乐百氏",
            privilege:"买十送一",
            price: "25.00",
            sort: "src/images/common_lable_self-suport.png",
            sold: "303",
        },
        {
            pic: "",
            title: "农夫山泉",
            privilege:"",
            price: "25.00",
            sort: "src/images/common_lable_self-suport.png",
            sold: "303",
        },
    ],
    pageNo: 0,
    last: false,
    arrange: {
        array: false,
        img: "src/images/btn_transverse.png",
        imgAction: "src/images/btn_portrait.png",
    },
    type: [
        {
            varietyId: {tagName: "推荐"},
            title: "推荐",
            selected: true
        },
        {
            varietyId: {salesTag: -1},
            title: "销量",
            selected: false
        },
        {
            varietyId: {priceTag: -1},
            title: "价格",
            selected: false
        },
        {
            varietyId: {brandTag: -1},
            title: "品牌",
            selected: false,
            category:[
                {
                    brand:'喜腾山泉',
                    selected:false
                },
                {
                    brand:'农夫山泉',
                    selected:false
                },
                {
                    brand:'乐百氏',
                    selected:false
                },
                {
                    brand:'景田',
                    selected:false
                },
                {
                    brand:'怡宝',
                    selected:false
                },
            ]
        },
    ]
};
