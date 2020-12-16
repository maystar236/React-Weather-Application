import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import FormattedTime from "./FormatTime";
import FormattedDate from "./FormatDate";
import axios from "axios";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState (props.defaultCity);
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
      icon: 'src/Images/${response.data.weather[0].icon}.png',
    });
  }
  
function handleSubmit(event) {
  event.preventDefault()
  search();
}

function handleCityChange(event) {
  setCity(event.target.value);
}

function search() {
  const apiKey = "f0fc9549c6de17fa6c965f916fc7d8d4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  
  }

if (weatherData.ready) {
  return (
    <div className="container">
      <div className="date-time">
        <span id="date">Date: <FormattedDate /></span>
        <br />
        <span id="time">Local Time: <FormattedTime /> </span>
      </div>
      <form onSubmit={handleSubmit} id="search-form">
        <input
          id="searchField"
          type="search"
          placeholder="Enter your city"
          className="entercity"
          autocomplete="off"
          onChange={handleCityChange}
        />
        <button id="city-search">
          <i className="fas fa-search"></i>
        </button>
        <button type="button" id="location-search">
          <i className="fas fa-search-location"></i>
        </button>
      </form>
      <WeatherInfo data={weatherData}/>


      <div className="row"></div>
      <br />

      <h4 className="weather-forecast">18 Hour Forecast</h4>

      <div className="row" id="forecast"></div>

      <br></br>
      Open-sourced on {" "}
      <a
        href="https://github.com/maystar236/Weather-Application-by-Kirsty"
        target="_blank" rel="noreferrer"
        id="github"
      >
        GitHub
      </a>
    </div>
  );
} else {
search();
  return "Loading.... please be patient :-)";
}}
