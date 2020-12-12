import React from "react";



export default function Weather() {
  let weatherData = {
    city: "Melbourne",
    currentTemp: 29,
    date: "Tuesday 10th November 2020",
    time: "19:16",
    currentDesc: "Sunny",
    feelsLike: 34,
    humidity: 77,
    windSpeed: 12,
    pressure: 134,
    lowTemp: 23,
    highTemp: 32,
    sunrise: "4:56pm",
    sunset: "7:38pm"
  };
  return (
    <div className="container">
      <div className="date-time">
        <span id="date">Date: {weatherData.date}</span>
        <br />
        <span id="time">Local Time: {weatherData.time}</span>
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
          <i className="fas fa-search-location"></i>
        </button>
      </form>
      <div className="current-weather">
        <h2 id={weatherData.searchResult}>{weatherData.city}</h2>
        <br />
        <div className="row">
          <div className="col-6">
            <h4 id="current-Desc">{weatherData.currentDesc}</h4>
            <div className="current-temp">{weatherData.currentTemp}</div>
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
          Feels like: {weatherData.feelsLike}°C
        </div>
        <div className="col-6" id="humidity">
          Humidity: {weatherData.humidity}%
        </div>
        <div className="col-6" id="currentLowTemp">
          Low: {weatherData.lowTemp}°C
        </div>
        <div className="col-6" id="weatherPressure">
          Pressure: {weatherData.pressure}
        </div>
        <div className="col-6" id="currentHighTemp">
          High: {weatherData.highTemp}°C
        </div>
        <div className="col-6" id="wind">
          Wind: {weatherData.windSpeed}
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
}
