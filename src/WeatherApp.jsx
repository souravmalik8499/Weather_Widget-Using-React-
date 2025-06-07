
import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [WeatherInfo, setWeatherInfo] = useState(null); // Step 1: Start as null

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  const getBadgeStyle = (weather, temp) => {
    const base = {
      display: "inline-block",
      padding: "8px 15px",
      borderRadius: "20px",
      fontWeight: "bold",
      color: "#fff",
      marginBottom: "20px",
    };

    if (weather.includes("rain")) {
      return { ...base, backgroundColor: "rgb(80, 150, 255)" };
    } else if (weather.includes("cloud")) {
      return { ...base, backgroundColor: "rgb(130, 130, 130)" };
    } else if (weather.includes("sun") || weather.includes("clear")) {
      return { ...base, backgroundColor: "rgb(255, 190, 70)" };
    } else if (temp > 35) {
      return { ...base, backgroundColor: "rgb(255, 100, 100)" };
    } else if (temp < 15) {
      return { ...base, backgroundColor: "rgb(100, 200, 255)" };
    } else {
      return { ...base, backgroundColor: "rgb(160, 160, 160)" };
    }
  };

  const appStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={appStyle}>
      <h2>React Weather App by Sourav</h2>

      <SearchBox updateInfo={updateInfo} />

      {WeatherInfo ? (
        <>
          <div style={getBadgeStyle(WeatherInfo.Weather, WeatherInfo.temp)}>
            {WeatherInfo.Weather.toUpperCase()}
          </div>
          <InfoBox info={WeatherInfo} />
        </>
      ) : (
        <div style={{ marginTop: "40px", color: "#555", fontStyle: "italic" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
            width="100"
            alt="Search Weather"
            style={{ marginBottom: "20px" }}
          />
          <p>Please enter a city name to view the weather forecast.</p>
        </div>
      )}
    </div>
  );
}
