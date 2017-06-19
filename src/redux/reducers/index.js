

let {combineReducers} = require('redux');
import { routerReducer as routing } from 'react-router-redux';

import {map} from './map';
import {water} from './water';
import {order} from './order';
import {station} from './station';
import {waterTicket} from './waterTicket';
import {waterDetail} from './waterDetail';
import {choose} from './choose';
import {historyUrls} from './historyUrls';
import {stationCertain} from './stationCertain';
import {userInfo} from './userInfo';
import {allIndents} from './allIndents';
import {address} from './address';

const rootReducer = combineReducers({
    map,
    order,
    station,
    water,
    choose,
    waterTicket,
    userInfo,
    waterDetail,
    historyUrls,
    allIndents,
    stationCertain,
    address,
    routing
});

module.exports = rootReducer;