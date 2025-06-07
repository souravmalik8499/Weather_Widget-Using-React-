import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError]=useState(false);
    // State to hold the city name input by the user
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0188c9338757c06fb198148ea2b45c8d";

    let getWeatherInfo = async () => {
        try{
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
       return result;
        } catch(err) {
            throw err;
        }
       
        
    };

    
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async(evt) => {
        try{
            evt.preventDefault();

        console.log(city);
        setCity("");
     let newInfo =  await getWeatherInfo();
      updateInfo(newInfo);
        } catch (err){
            setError(true);
        }
        
    };

    return (
        <div className='Search-box'>
            
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" 
                variant="outlined" required value={city}
                 onChange={handleChange}/>
                <br /><br />
            <Button variant="contained" type="submit" >
            Search
             </Button>
             {error && <p style={{color:"red"}}> No weather data found for this city</p>}  
            </form>

        </div>
    );
}