import React from "react";

export default function formattedDate(event) {
    let currentTime = new Date();
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
    let month = months[currentTime.getMonth()];
    let year = currentTime.getFullYear();
    let date = currentTime.getDate();
    let dateNow = `${month} ${date}, ${year}`;
    return dateNow;
  }