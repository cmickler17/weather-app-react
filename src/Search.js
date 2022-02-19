import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showWeather(response) {
    setTemperature(`Temperature: ${Math.round(response.data.main.temp)} °F`);
    setDescription(`Description: ${response.data.weather[0].description}`);
    setHumidity(`Humidity: ${response.data.main.humidity}%`);
    setWind(`Wind: ${Math.round(response.data.wind.speed)} mp/h`);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "795212133d0fdb468c01b067f3e90e38";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          autoFocus={true}
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <ul class="weather-forecast">
        <li>{temperature}</li>
        <li>{description}</li>
        <li>{humidity}</li>
        <li>{wind}</li>
        <li>
          <img src={icon} alt={description} />
        </li>
      </ul>
      <footer>This project was coded by <a href="https://www.linkedin.com/in/chrissy-mickler-23104427/">Chrissy Mickler</a> and is <a href="https://github.com/cmickler17/weather-app-react">open sourced on GitHub</a>.</footer>
    </div>
  );
}