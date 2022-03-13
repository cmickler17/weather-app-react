import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            date: "Saturday 11:00",
            city: response.data.name,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        });
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9"><input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" /></div>
                        <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100" /></div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                  <li>{weatherData.date}</li>
                  <li className="text-capitalize">{weatherData.description}</li>  
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                            <div className="d-flex">
                                <img 
                                src={weatherData.iconUrl}
                                alt={weatherData.description}
                                className="float-left"
                                />
                               <div className="float-left">
                                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                                <span className="unit">°F</span>
                                </div>
                            </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind} mph</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
    let apiKey = "795212133d0fdb468c01b067f3e90e38";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    }

    
}