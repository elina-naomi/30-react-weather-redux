import {api_key, base_url} from "../utils/Constants";

export const PUT_WEATHER_INFO = 'PUT_WEATHER_INFO';
export const WEATHER_INFO_REQUEST = 'WEATHER_INFO_REQUEST';
export const WEATHER_INFO_ERROR = 'WEATHER_INFO_ERROR';

export const putWeatherInfoAction = res => (
    {
        type: PUT_WEATHER_INFO,
        payload: res
    }
);

export const requestWeatherInfoAction = () => (
    {
        type: WEATHER_INFO_REQUEST,
        payload: 'Just a moment please...'
    }
)

export const errorWeatherInfoAction = () => (
    {
        type: WEATHER_INFO_ERROR,
        payload: 'Entered data is incorrect. Please try again.'
    }
)

export const getWeatherInfoAction = (city) => {
    console.log('Hello from getWeather action');
    return(dispatch) => {
        dispatch(requestWeatherInfoAction());
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                const weatherInfo = {
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                };
                return {weatherInfo, message: null};
            })
            .then(res => {
                console.log(res);

                dispatch(putWeatherInfoAction(res))
            })
            .catch(e => {
                console.log(e.message);
                dispatch(errorWeatherInfoAction())
            });
    }

}