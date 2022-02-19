import React from "react";
import axios from "axios";

export default function Search() {



  let apiKey = "795212133d0fdb468c01b067f3e90e38";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=${apiKey}&units=imperial`;

  return (
    <div className="Search">
      <form>
        <input type="search" placeholder="Enter a city..." autoFocus={true}/>
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}