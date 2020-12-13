import React from "react";

export default function FormattedDate(props) {
        let months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        let month = months[props.date.getMonth()];
        let year = props.date.getFullYear();
        let date = props.date.getDate();
        let dateNow = `Date: ${month} ${date}, ${year}`;
        return dateNow;

        function formatTime(event) {
            let hour = props.date.getHours();
            if (hour < 10) {
              hour = `0${hour}`;
            }
            let minutes = props.date.getMinutes();
            if (minutes < 10) {
              minutes = `0${minutes}`;
            }
            let timeNow = `Time: ${hour}:${minutes}`;
            return timeNow;
          }
          function formatHours(timestamp) {
            let date = new Date(timestamp);
            let hours = date.getHours();
            if (hours < 10) {
              hours = `0${hours}`;
            }
            let minutes = date.getMinutes();
            if (minutes < 10) {
              minutes = `0${minutes}`;
            }
          
            return `${hours}:${minutes}`;
          }
      }
