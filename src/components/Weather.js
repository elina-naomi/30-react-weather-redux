import React from 'react';

const Weather = (props) => {
    return (
        <div className='infoWeath'>
            {!props.message &&
                <div>
                    <p>Location: {props.weatherInfo.city}, {props.weatherInfo.country}</p>
                    <p>Temp: {props.weatherInfo.temp}</p>
                    <p>Pressure: {props.weatherInfo.pressure}</p>
                    <p>Sunset: {new Date(props.weatherInfo.sunset * 1000).toTimeString()}</p>
                </div>
            }
            <p>{props.message}</p>
        </div>
    );

};

export default Weather;