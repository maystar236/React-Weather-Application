import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import FormattedTime from "./FormatTime";
import FormattedDate from "./FormatDate";
import './App.css';
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
      country: response.data.sys.country,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      feelsLike: response.data.main.feels_like,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      icon: response.data.weather[0].icon,
      timezone: response.data.timezone
    });
  }
 
  function search() {
    const apiKey = "f0fc9549c6de17fa6c965f916fc7d8d4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
function handleSubmit(event) {
  event.preventDefault()
  search();
}

function handleCityChange(event) {
  setCity(event.target.value);
}
function showLocation(position) {
  let apiKey = "f0fc9549c6de17fa6c965f916fc7d8d4";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);

}
 
  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showLocation);
  }



if (weatherData.ready) {
  return (
    <div className="container" >
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
        <input type="submit" className="search-button" value="Search" />
        </button>
         <input
            type="submit"
            className="current-location-button"
            id="current-location-button"
            value="Current location"
            onClick={getLocation}
         />
         </form>
         
     
      <WeatherInfo data={weatherData}/>


      <div className="row"></div>
      <br />

      <h4 className="weather-forecast">18 Hour Forecast</h4>

      <div className="row" id="forecast"></div>
      <WeatherForecast city={weatherData.city}/>

      <br></br>
      Open-sourced on {" "}
      <a
        href="https://github.com/maystar236/React-Weather-Application"
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
