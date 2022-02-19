import React from "react";
import axios from "axios";

export default function Search() {
function handleResponse(response) {
  alert(`The weather in Charlotte is ${response.data.main.temp}`);
}


  let apiKey = "795212133d0fdb468c01b067f3e90e38";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Search">
      Hello from Weather
    </div>
  )
}