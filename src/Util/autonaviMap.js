
/*
 *   绘制地图
 *   代码来源：http://lbs.amap.com/api/javascript-api/example/map/map-show/
 * */
function AutonaviMap() {
    this.map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 14
    });
}
AutonaviMap.prototype.findDispatch = function(){

    return (dispatch)=>{
        console.log(dispatch);
    }
}
////  地图样式
//AutonaviMap.prototype.style = function(){
//    return {
//        height:document.body.clientWidth * 17 / 18 + 'px'
//    }
//}
/*
 *   浏览器定位
 *   代码来源：http://lbs.amap.com/api/javascript-api/example/location/browser-location/
 * */

AutonaviMap.prototype.browserLocation = function ($) {
    var geolocation;
    var defer = $.Deferred();                                           //  声明延后执行
    var map = this.map;
    map.plugin('AMap.Geolocation', function (){
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,                               //  是否使用高精度定位，默认:true
            timeout: 10000,                                         //  超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20),                   //  定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            buttonPosition: 'RB'
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', onComplete);//  返回定位信息
        AMap.event.addListener(geolocation, 'error', onError);      //  返回定位出错信息
    });

    //  解析定位结果
    function onComplete(data) {
        defer.resolve(data);
        //this.getLng = data.position.getLng();
        //this.getLat = data.position.getLat();
    }
    //  解析定位错误信息
    function onError(data) {
        alert('定位失败：为了互联网的进步请您开启3G/4G网络');
    }
    return defer.promise;
}

/*
 *   获取拖拽后的地理位置      moveend事件
 *   代码来源：http://lbs.amap.com/api/javascript-api/example/map/get-current-administrative-region/
 *   地图中心经纬度           map.getCenter()
 * */

AutonaviMap.prototype.mapmove = function (func) {
    var map = this.map;
    return map.on('moveend', function () {
        //  解析定位结果（地图中心经纬度）
        var center = [map.getCenter().lng, map.getCenter().lat];
        func(center);
    });
}


/*
 *   点标记
 *   代码来源：http://lbs.amap.com/api/javascript-api/example/marker/marker-content/
 * */

AutonaviMap.prototype.addMarker = function (marker, po) {
    var marker = new AMap.Marker({
        icon: new AMap.Icon({
            size: new AMap.Size(16, 23),  //图标大小
            image: marker
        }),
        position: po,
        width: '100%'
    }), map = this.map;
    marker.setMap(map);
}

/*
 *   清除点标记
 * */
AutonaviMap.prototype.clearMarker = function () {
    var map = this.map;

    map.clearMap();
}

/*
 *   逆向地理编码（坐标-地址）
 *   代码来源：http://lbs.amap.com/api/javascript-api/example/geocoder/regeocoding/
 * */
AutonaviMap.prototype.regeocoder = function (lnglatXY) {
    var geocoder = new AMap.Geocoder({
        radius: 1000,
        extensions: "all"
    });
    //var defer = $.Deferred();
    geocoder.getAddress(lnglatXY, function (status, result) {
        if (status === 'complete' && result.info === 'OK'){
            geocoder_CallBack(result);
            // var city = result.regeocode.addressComponent.city;
            // if (city == '') {
            //     city = result.regeocode.addressComponent.province;
            // }
            // var locationNameObj = {
            //     locationName: result.regeocode.formattedAddress,         //  返回地址描述
            //     city: city,                                              //  返回城市
            //     district: result.regeocode.addressComponent.district     //  区
            // }
            //defer.resolve(locationNameObj);
        }
    });
    //return defer.promise;
    function geocoder_CallBack(data) {
        let location = data.regeocode.formattedAddress; //返回地址描述
        let city = data.regeocode.addressComponent.city;
        if (city == '') {
            city = data.regeocode.addressComponent.province;
        }
        document.getElementById('mark').innerHTML = location;
        document.getElementById('city').innerHTML = city;
    }
}

/*
 *   正向地理编码（地址-坐标）
 *   代码来源：http://lbs.amap.com/api/javascript-api/example/geocoder/geocoding/
 * */
AutonaviMap.prototype.geocoder = function ($, addressName) {
    var geocoder = new AMap.Geocoder({
        radius: 1000,
        extensions: "all"
    });
    var defer = $.Deferred();
    //地理编码,返回地理编码结果
    geocoder.getLocation(addressName, function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
            var lnglatXwebY = [result.geocodes[0].location.lng,
                result.geocodes[0].location.lat];
            defer.resolve(lnglatXY);
        }
    });
    return defer.promise;
}

/*
 *   输入后提示查询
 *   代码来源：http://lbs.amap.com/api/javascript-api/example/poi-search/search-after-enter-prompt/
 * */

AutonaviMap.prototype.searchAfterEnterPrompt = function ($q, city, keywords) {
    var defer = $q.defer();
    AMap.service(["AMap.Autocomplete"], function () {
        var autoOptions = {
            city: city || ""                                                     //  城市，默认全国
        };
        var auto = new AMap.Autocomplete(autoOptions);
        //  查询成功时返回查询结果
        if (keywords.length > 0) {
            auto.search(keywords, function (status, result) {
                if (status == "complete" && result.info === 'OK') {
                    var locationInfoArr = result.tips;
                    defer.resolve(locationInfoArr);
                }
            });
        }
    });
    return defer.promise;
}
//  设置地图中心点
AutonaviMap.prototype.setCenter = function (lnglatXY) {
    var map = this.map;
    map.setCenter(lnglatXY);
}
/**
 *  根据城市设置中心点
 *  代码来源：http://lbs.amap.com/api/javascript-api/example/map/map-show/
 */

AutonaviMap.prototype.setCity = function (city) {
    var map = this.map;
    map.setCity(city);
}

module.exports = AutonaviMap;