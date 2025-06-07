import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0188c9338757c06fb198148ea2b45c8d";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            if (jsonResponse.cod !== 200) {
                throw new Error("City not found");
            }

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                Weather: jsonResponse.weather[0].description,
            };

            return result;
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
        setError(false); // ✅ Clear error when typing
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            setError(false); // ✅ Clear error before fetching
            console.log(city);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity(""); // Clear input after search
        } catch (err) {
            setError(true); // Show error if city not found
        }
    };

    return (
        <div className='Search-box'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No weather data found for this city</p>}
            </form>
        </div>
    );
}
