/**
 * Created on 2017/5/16.
 */
const React = require('react');
const ReactDom = require('react-dom');
const { Router, Route, hashHistory,IndexRedirect} = require('react-router');
const Store = require('../src/redux/store/store');
const {Provider} = require('react-redux');

const HomePage = require('../src/components/HomePage');
const Map = require('../src/container/Map');
const BuyWater = require('./container/BuyWater');
const Station = require('../src/container/Station');
const SubStation = require('../src/container/SubStation');
const StationCertain = require('./container/StationCertain');
const StationInfo = require('./container/StationInfo');
const StationQrCode = require('./container/StationQrCode');
const UserEvaluation = require('./container/UserEvaluation');
const ShoppingCart = require('./container/ShoppingCart');
const My = require('../src/container/My');
const WaterTicket = require('../src/container/WaterTicket');
const Water = require('../src/container/Water');
const WaterDetail = require('../src/container/WaterDetail');
const ChooseBucket = require('./container/ChooseBucket');
const AllIndents = require('./container/AllIndents');
const IndentDetail = require('./container/IndentDetail');
const AddressList = require('./container/AddressList');
const AddressManage = require('./container/AddressManage');
const ConfirmIndent = require('./container/ConfirmIndent');
const ConfirmBuy = require('./container/ConfirmBuy');
const PaymentResult = require('./container/PaymentResult');
const NewBuildAddress = require('./container/NewBuildAddress');
const TicketCombo = require('./container/TicketCombo');
const WaterTicketDetail = require('./container/WaterTicketDetail');
const PersonalInfo = require('./container/PersonalInfo');
const MyVoucher = require('./container/MyVoucher');
const MyCollect = require('./container/MyCollect');
const MySetting = require('./container/MySetting');
const MyWaterTicket = require('./container/MyWaterTicket');
const AccountManage = require('./container/AccountManage');
const MyWaterTicketDetail = require('./container/myWaterTicketDetail');
const VoucherDetail = require('./container/VoucherDetail');
const A_test = require('./container/A_test');

import {mapInit} from  './redux/store/mapInit';
import {waterInit} from  './redux/store/waterInit';
import {waterDetailInit} from  './redux/store/waterDetailInit';
import {buyWaterInit} from  './redux/store/buyWaterInit';
import {stationInit} from  './redux/store/stationInit';
import {stationCertainInit} from  './redux/store/stationCertainInit';
import {waterTicketInit} from  './redux/store/waterTicketInit';
import {chooseInit} from  './redux/store/chooseInit';
import {historyUrlsInit} from '../src/redux/store/historyUrlsInit';
import {userInfoInit} from '../src/redux/store/userInfoInit';
import {allIndentsInit} from '../src/redux/store/allIndentsInit';
import {addressInit} from './redux/store/addressInit';
import {shoppingCartInit} from './redux/store/shoppingCartInit';
import {dialogInit} from './redux/store/dialogInit';
import {myVoucherInit} from './redux/store/myVoucherInit';
import {myWaterTicketInit} from './redux/store/myWaterTicketInit';
import {waterTicketDetailInit} from './redux/store/waterTicketDetailInit';

import _h from '../src/Util/HB';
const {syncHistoryWithStore} = require('react-router-redux');
const store = Store(initState());
const history = syncHistoryWithStore(hashHistory, store);

const getRoutes = ()=>{
    return (
        <Router history={history}>
            <Route path="/HomePage" component={HomePage}>
                <IndexRedirect to="/Order"/>
                <Route path="/BuyWater" component={BuyWater}></Route>
                <Route path="/Station" component={Station}></Route>
                <Route path="/ShoppingCart" component={ShoppingCart}></Route>
                <Route path="/My" component={My}></Route>
            </Route>
            <Route path="/WaterTicket" component={WaterTicket}></Route>
            <Route path="/Water" component={Water}></Route>
            <Route path="/WaterDetail" component={WaterDetail}></Route>
            <Route path="/ChooseBucket" component={ChooseBucket}></Route>
            <Route path="/StationCertain" component={StationCertain}></Route>
            <Route path="/SubStation" component={SubStation}></Route>
            <Route path="/StationInfo" component={StationInfo}></Route>
            <Route path="/StationQrCode" component={StationQrCode}></Route>
            <Route path="/UserEvaluation" component={UserEvaluation}></Route>
            <Route path="/AllIndents" component={AllIndents}></Route>
            <Route path="/IndentDetail" component={IndentDetail}></Route>
            <Route path="/AddressList" component={AddressList}></Route>
            <Route path="/AddressManage" component={AddressManage}></Route>
            <Route path="/ConfirmIndent" component={ConfirmIndent}></Route>
            <Route path="/ConfirmBuy" component={ConfirmBuy}></Route>
            <Route path="/PaymentResult" component={PaymentResult}></Route>
            <Route path="/NewBuildAddress" component={NewBuildAddress}></Route>
            <Route path="/TicketCombo" component={TicketCombo}></Route>
            <Route path="/WaterTicketDetail" component={WaterTicketDetail}></Route>
            <Route path="/PersonalInfo" component={PersonalInfo}></Route>
            <Route path="/MyVoucher" component={MyVoucher}></Route>
            <Route path="/MyCollect" component={MyCollect}></Route>
            <Route path="/MyWaterTicket" component={MyWaterTicket}></Route>
            <Route path="/MyWaterTicketDetail" component={MyWaterTicketDetail}></Route>
            <Route path="/MySetting" component={MySetting}></Route>
            <Route path="/AccountManage" component={AccountManage}></Route>
            <Route path="/VoucherDetail" component={VoucherDetail}></Route>
            <Route path="/A_test" component={A_test}></Route>
        </Router>
    )};

_h.ui.setBaseFontSize(750,100);

function initState(){
    return {
        map:mapInit,
        buyWater:buyWaterInit,
        water:waterInit,
        choose:chooseInit,
        waterDetail:waterDetailInit,
        userInfo:userInfoInit,
        station:stationInit,
        stationCertain:stationCertainInit,
        allIndents:allIndentsInit,
        waterTicket:waterTicketInit,
        address:addressInit,
        showDialog:dialogInit,
        myVoucher:myVoucherInit,
        myWaterTicket:myWaterTicketInit,
        shoppingCart:shoppingCartInit,
        waterTicketDetail:waterTicketDetailInit,
        historyUrls:localStorage.historyUrlsInit?JSON.parse(localStorage.historyUrlsInit):historyUrlsInit,
    }
}

ReactDom.render(
    <Provider store={store}>
        <div>
            {getRoutes()}
        </div>
    </Provider>,

    document.getElementById('root')
);