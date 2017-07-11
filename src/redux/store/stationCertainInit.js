export const stationCertainInit ={
    storeName:'乐百氏旗舰店',
    partnerId:'20160831',
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
        }
    ]
};