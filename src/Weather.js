import React from "react";

import "./Weather.css";

export default function Weather() {
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9"><input type="search" placeholder="Enter a city..." className="form-control" /></div>
                    <div className="col-3"><input type="search" value="Search" className="btn btn-primary" /></div>
                </div>
            </form>
            <h1>Charlotte</h1>
            <ul>
              <li>Saturday 11:00</li>
              <li>Partly Cloudy</li>  
            </ul>
            <div className="row">
                <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Partly Cloudy"/>
                50°F
                </div>
                <div className="col-6">
                    <ul>
                        <li>Percipitation: 0%</li>
                        <li>Humidity: 34%</li>
                        <li>Wind: 18 mph</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}