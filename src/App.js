import React from "react";

import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
  <div className="App">
    <div className="container">
        <Weather />
      <footer>
      This project was coded by <a href="https://www.linkedin.com/in/chrissy-mickler-23104427/" target="_blank" rel="noreferrer">Chrissy Mickler</a> and is{" "} 
        <a href="https://github.com/cmickler17/weather-app-react" target="_blank" rel="noreferrer">open-sourced on GitHub</a>.
      </footer>
    </div>
  </div>
  )
}
