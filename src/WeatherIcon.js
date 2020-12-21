import React from "react";

export default function WeatherIcon(props) {
    return (
        <img src="/Images/${response.data.weather[0].icon}.png" alt={props.alt}/>
    );
}