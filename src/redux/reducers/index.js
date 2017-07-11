

let {combineReducers} = require('redux');
import { routerReducer as routing } from 'react-router-redux';

import {map} from './map';
import {water} from './water';
import {buyWater} from './buyWater';
import {station} from './station';
import {waterTicket} from './waterTicket';
import {waterDetail} from './waterDetail';
import {choose} from './choose';
import {historyUrls} from './historyUrls';
import {stationCertain} from './stationCertain';
import {userInfo} from './userInfo';
import {allIndents} from './allIndents';
import {address} from './address';
import {myVoucher} from './myVoucher';
import {myWaterTicket} from './myWaterTicket';
import {shoppingCart} from './shoppingCart';
import {showDialog} from './showDialog';
import {waterTicketDetail} from './waterTicketDetail';

const rootReducer = combineReducers({
    map,
    buyWater,
    station,
    water,
    choose,
    waterTicket,
    userInfo,
    waterDetail,
    historyUrls,
    allIndents,
    showDialog,
    stationCertain,
    address,
    myVoucher,
    myWaterTicket,
    shoppingCart,
    waterTicketDetail,
    routing
});

module.exports = rootReducer;