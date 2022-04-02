import React from "react";

import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse (response) {
        console.log(response.data);
    }

    let apiKey = "795212133d0fdb468c01b067f3e90e38";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <WeatherIcon code="01d" size={36} />
                    <div className="WeatherForecast-temps">
                        <span className="WeatherForecast-temp-max">54°</span>
                        <span className="WeatherForecast-temp-min">40°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}