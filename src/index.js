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
const Order = require('../src/container/Order');
const Station = require('../src/container/Station');
const Shop = require('../src/container/Shop');
const My = require('../src/container/My');
const WaterTicket = require('../src/container/WaterTicket');
const Water = require('../src/container/Water');
const WaterDetail = require('../src/container/WaterDetail');
const Choose = require('./container/Choose');
const StationCertain = require('./container/StationCertain');
const StationInfo = require('./container/StationInfo');
const AllIndents = require('./container/AllIndents');
const IndentDetail = require('./container/IndentDetail');
const AddressList = require('./container/AddressList');


import {mapInit} from  './redux/store/mapInit';
import {waterInit} from  './redux/store/waterInit';
import {waterDetailInit} from  './redux/store/waterDetailInit';
import {orderInit} from  './redux/store/orderInit';
import {stationInit} from  './redux/store/stationInit';
import {waterTicketInit} from  './redux/store/waterTicketInit';
import {chooseInit} from  './redux/store/chooseInit';
import {historyUrlsInit} from '../src/redux/store/historyUrlsInit';
import {userInfoInit} from '../src/redux/store/userInfoInit';
import {allIndentsInit} from '../src/redux/store/allIndentsInit';
import {addressInit} from './redux/store/addressInit';

import _h from '../src/Util/HB';
const {syncHistoryWithStore} = require('react-router-redux');
const store = Store(initState());
const history = syncHistoryWithStore(hashHistory, store);


const getRoutes = ()=>{
    return (
        <Router history={history}>
            <Route path="/HomePage" component={HomePage}>
                <IndexRedirect to="/Order"/>
                <Route path="/Order" component={Order}></Route>
                <Route path="/Station" component={Station}></Route>
                <Route path="/Shop" component={Shop}></Route>
                <Route path="/My" component={My}></Route>
            </Route>
            <Route path="/WaterTicket" component={WaterTicket}></Route>
            <Route path="/Water" component={Water}></Route>
            <Route path="/WaterDetail" component={WaterDetail}></Route>
            <Route path="/Choose" component={Choose}></Route>
            <Route path="/StationCertain" component={StationCertain}></Route>
            <Route path="/StationInfo" component={StationInfo}></Route>
            <Route path="/AllIndents" component={AllIndents}></Route>
            <Route path="/IndentDetail" component={IndentDetail}></Route>
            <Route path="/AddressList" component={AddressList}></Route>
        </Router>
    )};

_h.ui.setBaseFontSize(750,100);

function initState(){
    return {
        map:mapInit,
        order:orderInit,
        water:waterInit,
        choose:chooseInit,
        waterDetail:waterDetailInit,
        userInfo:userInfoInit,
        station:stationInit,
        allIndents:allIndentsInit,
        waterTicket:waterTicketInit,
        address:addressInit,
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