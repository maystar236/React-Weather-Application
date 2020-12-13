import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      feelsLike: response.data.main.feels_like,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
    });
  }
  
if (weatherData.ready) {
  return (
    <div className="container">
      <div className="date-time">
        <span id="date">Date:  </span>
        <br /><formattedDate date={weatherData.date} />
        <span id="time">Local Time: </span>
      </div>
      <form id="search-form">
        <input
          id="searchField"
          type="search"
          placeholder="Enter your city"
          className="entercity"
          autocomplete="off"
        />
        <button id="city-search">
          <i className="fas fa-search"></i>
        </button>
        <button type="button" id="location-search">
          <i className="fas fa-search-location">{weatherData.city}</i>
        </button>
      </form>
      <div className="current-weather">
        <h2></h2>
        <br />
        <div className="row">
          <div className="col-6">
            <h4 id="current-Desc">{weatherData.description}</h4>
            <div className="current-temp">{Math.round(weatherData.temperature)}</div>
            <a href="#" id="celsiusTemp" className="active">
              °C
            </a>
            /
            <a href="#" id="fahrenheitTemp">
              °F
            </a>
          </div>
          <div className="col-6">
            <div className="current-weather">
              <img src="" alt="sunny" id="icon"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6" id="feels-like">
          Feels like: {Math.round(weatherData.feelsLike)}°C
        </div>
        <div className="col-6" id="humidity">
          Humidity: {Math.round(weatherData.humidity)}%
        </div>
        <div className="col-6" id="currentLowTemp">
          Low: {Math.round(weatherData.minTemp)}°C
        </div>
        <div className="col-6" id="weatherPressure">
          Pressure: 
        </div>
        <div className="col-6" id="currentHighTemp">
          High: {Math.round(weatherData.maxTemp)}°C
        </div>
        <div className="col-6" id="wind">
          Wind: {Math.round(weatherData.wind)} km/h
        </div>
        <div className="col-6" id="sunrise">
          Sunrise: {weatherData.sunrise}
        </div>
        <div className="col-6" id="sunset">
          Sunset: {weatherData.sunset}
        </div>
      </div>

      <div className="row"></div>
      <br />

      <h4 className="weather-forecast">18 Hour Forecast</h4>

      <div className="row" id="forecast"></div>

      <br></br>
      Open-sourced on {" "}
      <a
        href="https://github.com/maystar236/Weather-Application-by-Kirsty"
        target="_blank"
        id="github"
      >
        GitHub
      </a>
    </div>
  );
} else {
  const apiKey = "f0fc9549c6de17fa6c965f916fc7d8d4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading....";
}}
