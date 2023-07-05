import React from "react";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import WeatherBox from "./weatherBox";

export default function Button(props) {
  const apiKey = "1be544e55f8d80d9a557faff52a0e60d";

  const [data, setData] = useState({});

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleSearch = () => {
    getWeatherDetails(props.city);
  };
  return (
    <>
        <div className="d-grid gap-3 col-4 mt-4">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      <WeatherBox data={data} />
    </>
  );
}
