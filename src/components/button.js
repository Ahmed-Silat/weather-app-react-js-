import React from "react";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import WeatherBox from "./weatherBox";
import { API_URL } from "./constants";
import { getWeatherDataByCityName } from "./service";

export default function Button(props) {
  const [data, setData] = useState({});

  const getWeatherDetails = async (cityName) => {
    if (!cityName) return;
    const { data } = await getWeatherDataByCityName(cityName);
    setData(data);
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
