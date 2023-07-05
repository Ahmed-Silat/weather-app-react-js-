import React from "react";
import { useState } from "react";
import Button from "./button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function SearchInput() {
  const [inputCity, setInputCity] = useState("");

  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
  };

  return (
    <>
        <h1 className="heading">Weather App</h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            onChange={handleChangeInput}
            value={inputCity}
          />
        </div>
      <Button city={inputCity} />
    </>
  );
}
