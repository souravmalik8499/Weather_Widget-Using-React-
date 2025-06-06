import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox(){
    let [city, setCity] = useState("");
    // State to hold the city name input by the user
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0188c9338757c06fb198148ea2b45c8d";

    let getWeatherInfo = async () => {
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
       console.log(jsonResponse);
       let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        Weather: jsonResponse.weather[0].description,
       };
       console.log(result);
        
    };

    
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }

    return (
        <div className='Search-box'>
            <h3>Search for the Weather</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" 
                variant="outlined" required value={city}
                 onChange={handleChange}/>
                <br /><br />
            <Button variant="contained" type="submit" >
            Search
             </Button>
            </form>

        </div>
    );
}