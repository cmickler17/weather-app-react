import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity); 
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            date: new Date(response.data.dt * 1000),
            city: response.data.name,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        });
    }

    function search() {
        let apiKey = "795212133d0fdb468c01b067f3e90e38";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
    }
  
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCity(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9"><input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCity} /></div>
                        <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100" /></div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
              
            </div>
        )
    } else {
        search();
    return "Loading...";
    }

    
}