import {applyMiddleware, createStore} from "redux";
import weatherReducer from "../reducers/weatherReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";

const initialState = {
    message: 'Enter city name'
};

const store = createStore(weatherReducer, initialState, applyMiddleware(thunk, logger));
export default store;