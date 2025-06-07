import React from "react";
import WeatherApp from "./WeatherApp.jsx";

export default function App() {
  const outerStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(220, 230, 240)",
  };

  const cardStyle = {
    padding: "30px",
    borderRadius: "20px",
    backgroundColor: "rgb(245, 250, 255)",
    boxShadow:
      "8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.7)",
    width: "90%",
    maxWidth: "600px",
  };

  return (
    <div style={outerStyle}>
      <div style={cardStyle}>
        <WeatherApp />
      </div>
    </div>
  );
}

