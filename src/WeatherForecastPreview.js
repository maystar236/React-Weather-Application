import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }
    function maxTemperature() {
        let maxTemperature = Math.round(props.data.main.temp_max);
        return `${maxTemperature}°C`
    }
    function minTemperature() {
        let minTemperature = Math.round(props.data.main.temp_min);
        return `${minTemperature}°C`
    }
    return (
        <div className = "col-6">
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} />
        <strong>{maxTemperature()}</strong> <br />
        {minTemperature()}
        </div>
    )
}