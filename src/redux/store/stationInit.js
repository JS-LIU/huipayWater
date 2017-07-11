export const stationInit ={
    stationList:[
        {
            pic:"",
            title:"生命之源水站",
            evaluate:4,
            sale:"1930",
            approve:true,
            approveImg:'src/images/lable_qijiandian@3x.png',
            address:"西城区百万庄大街2号甲"
        },
        {
            pic:"",
            title:"乐百氏旗舰店",
            evaluate:5,
            sale:"2396",
            approve:true,
            approveImg:'src/images/lable_v@2x.png',
            address:"西城区车公庄北里6号楼"
        },
        {
            pic:"",
            title:"木樨地雀巢旗舰店",
            evaluate:5,
            sale:"1954",
            approve:true,
            approveImg:'',
            address:"西城区五路通街人定湖西里"
        },
        {
            pic:"",
            title:"普利思水站",
            evaluate:3,
            sale:"1396",
            approve:false,
            approveImg:'',
            address:"西城区德胜门内羊房18号"
        },
    ],
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
}