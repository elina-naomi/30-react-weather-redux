import {PUT_WEATHER_INFO, WEATHER_INFO_ERROR, WEATHER_INFO_REQUEST} from "../actions/weatherActions";

function weatherReducer(state, action){
    switch (action.type) {
        case WEATHER_INFO_REQUEST:
        case WEATHER_INFO_ERROR:
            return {...state, message: action.payload}
        case PUT_WEATHER_INFO:
            return {...state, message: action.payload.message, weatherInfo: action.payload.weatherInfo};
        default:
            return state;
    }
}

export default weatherReducer;