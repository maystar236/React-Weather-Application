import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container1">
      <Weather defaultCity="Melbourne,AU"/>

      </div>
    </div>
  );
}

