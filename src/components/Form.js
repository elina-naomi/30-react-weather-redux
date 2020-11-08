import React from 'react';

const Form = props => {
    console.log(`${JSON.stringify(props)} from Form`);
    const handleSubmitWeather = event => {
        console.log(event.currentTarget.city.value.trim());
        event.preventDefault();
        const city = event.currentTarget.city.value.trim();
        props.getWeather(city);
    }

    return (
        <form onSubmit={handleSubmitWeather}>
            <input type='text' name='city' placeholder='City'/>
            <button type='submit'>Get weather</button>
        </form>
    );
};

export default Form;