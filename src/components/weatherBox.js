import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function WeatherBox(props) {
  return (
    <>
      {Object.keys(props.data).length > 0 && (
        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded wetherResultBox">
            <img
              className="weathorIcon"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
              alt="weatherIcon"
            />

            <h5 className="weathorCity">{props.data?.name}</h5>
            <h6 className="weathorTemp">
              {(props.data?.main?.temp - 273.15).toFixed(2)}°C
            </h6>
          </div>
        </div>
      )}
    </>
  );
}
