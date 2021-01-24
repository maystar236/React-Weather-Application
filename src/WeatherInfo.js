import React from "react";
import Sunrise from "./FormatSun";
import Sunset from "./sunset.js";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        
    <div className="current-weather">
    <h2>{props.data.city}</h2>
    <br />
    <div className="row">
      <div className="col-6">
        <h4 id="current-Desc">{props.data.description}</h4>
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <div className="col-6">
        <div className="current-weather">
          <img src={`/Images/${props.data.icon}.png`} alt={props.data.description} id="icon"></img>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-6" id="feels-like">
      Feels like: {Math.round(props.data.feelsLike)}°C
    </div>
    <div className="col-6" id="humidity">
      Humidity: {Math.round(props.data.humidity)}%
    </div>
    <div className="col-6" id="currentLowTemp">
      Low: {Math.round(props.data.minTemp)}°C
    </div>
    <div className="col-6" id="weatherPressure">
      Pressure: 
    </div>
    <div className="col-6" id="currentHighTemp">
      High: {Math.round(props.data.maxTemp)}°C
    </div>
    <div className="col-6" id="wind">
      Wind: {Math.round(props.data.wind)} km/h
    </div>
    <div className="col-6" id="sunrise">
    Sunrise: <Sunrise sunrise={props.data.sunrise} />
    </div>
    <div className="col-6" id="sunset">
     Sunset: <Sunset sunset={props.data.sunset} />
    </div>
  </div>
  </div>)
}