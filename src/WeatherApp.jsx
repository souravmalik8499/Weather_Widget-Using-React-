import React, { useState } from "react";

import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
export default function WeatherApp(){
    const [WeatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        Weather:"overcast clouds",
        feelsLike: 36.05,
        humidity: 26,
        temp: 36.57,
        tempMax: 36.57,
        tempMin: 36.05,

    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


    return (
        <div style={{ textAlign: "center"}}>
            <h2>Weather App By Sourav</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    );
}