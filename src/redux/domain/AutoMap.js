/**
 * Created by LDQ on 2017/6/20.
 */
class AutoMap{
    constructor(){
        this.map = new AMap.Map('container', {
            resizeEnable: true
        });
    }
    currentLocationInfo(){
        let geolocation;
        this.map.plugin('AMap.Geolocation', function() {
            geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,               //是否使用高精度定位，默认:true
                timeout: 10000,                         //超过10秒后停止定位，默认：无穷大
                buttonOffset: new AMap.Pixel(10, 20),   //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                zoomToAccuracy: true,                   //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                buttonPosition:'RB'
            });
            this.map.addControl(geolocation);
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
            AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
        });
        function onComplete(data) {
            console.log('============定位成功');

            console.log("省："+data.addressComponent.province);
            console.log("市："+data.addressComponent.city);
            console.log("区："+data.addressComponent.district);
            console.log("乡镇："+data.addressComponent.township);
            console.log("街道："+data.addressComponent.street);
            console.log("门牌号："+data.addressComponent.streetNumber);
            console.log("所在社区："+data.addressComponent.neighborhood);
            console.log("社区类型："+data.addressComponent.neighborhoodType);
            console.log("所在大楼："+data.addressComponent.building);
            console.log("楼类型："+data.addressComponent.buildingType);

            console.log(data.formattedAddress);

            console.log("精度："+data.position.getLng());
            console.log('纬度：' + data.position.getLat());
        }
        function onError(data) {
            console.log('============定位失败');
        }
    }

    dragSiteSelection(){
        AMapUI.loadUI(['misc/PositionPicker'], function(PositionPicker) {
            let positionPicker = new PositionPicker({
                mode: 'dragMap',
                map: map,
                iconStyle: { //自定义外观
                    url: '//webapi.amap.com/ui/1.0/assets/position-picker2.png',
                    ancher: [24, 40],
                    size: [48, 48]
                }
            });
            positionPicker.start();
            positionPicker.on('success', function(positionResult) {
                let regeocode = positionResult.regeocode;
                console.log("省："+regeocode.addressComponent.province);
                console.log("市："+regeocode.addressComponent.city);
                console.log("区："+regeocode.addressComponent.district);
                console.log("乡镇："+regeocode.addressComponent.township);
                console.log("街道："+regeocode.addressComponent.street);
                console.log("门牌号："+regeocode.addressComponent.streetNumber);
                console.log("所在社区："+regeocode.addressComponent.neighborhood);
                console.log("社区类型："+regeocode.addressComponent.neighborhoodType);
                console.log("所在大楼："+regeocode.addressComponent.building);
                console.log("楼类型："+regeocode.addressComponent.buildingType);

                console.log("经度："+positionResult.position.getLng());
                console.log("纬度："+positionResult.position.getLat());

                console.log(positionResult.address);
            });

        });
    }
    autoComplete(){
        new AMap.Autocomplete({
            input: "tipinput"
        });
    }



}


module.exports = AutoMap;
