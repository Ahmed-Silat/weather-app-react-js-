import axios from "axios";
import { API_KEY, WEATHER_URL } from "./constants";

export const getWeatherDataByCityName = (cityName) => {
  const url = `${WEATHER_URL}`;

  return axios.get(url, { params: { q: cityName, appid: API_KEY } });
};
