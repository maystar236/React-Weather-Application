import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const  [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() { 
        return (props.celsius * 9/5) + 32;
    }

    if (unit === "celsius") {
    return (
        <div className = "WeatherTemperature">
            <span className="current-temp">
            {Math.round(props.celsius)}
            </span>
            <span id="celsiusTemp" className="active">°C</span> | 
            <span id="fahrenheitTemp" className="inactive"><a href="/" onClick={showFahrenheit}>°F</a></span>
        </div>
);
 } else {
 return (
    <div className = "WeatherTemperature">
        <span className="current-temp">
        {Math.round(fahrenheit())}
        </span>
        <span id="fahrenheitTemp" className="active" > °F</span> | 
        <span id="celsiusTemp" className="inactive"><a href="/" onClick={showCelsius}>°C</a></span> 
        
    </div>
    );
}
}