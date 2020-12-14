import React from "react";

export default function Sunset (props) {
    let sunsetUnix = props.sunset;
    let sunsetDate = new Date(sunsetUnix*1000);
    let sunsetHour = sunsetDate.getHours();
    if (sunsetHour < 10) {
      sunsetHour = `0${sunsetHour}`;
    }
    let sunsetMinutes = sunsetDate.getMinutes();
    if (sunsetMinutes < 10) {
      sunsetMinutes = `0${sunsetMinutes}`;
    }
    let sunsetTime = `${sunsetHour}:${sunsetMinutes}`;
    return sunsetTime;
  }