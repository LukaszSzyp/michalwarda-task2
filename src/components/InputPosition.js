import { useState } from "react";

export default function InputPosition({ checkWeather }) {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [source, setSource] = useState();

  const handleOnChangeLat = (e) => {
    setLat(e.target.value);
  };
  const handleOnChangeLon = (e) => {
    setLon(e.target.value);
  };

  const handleSourceOnChange = (e) => {
    setSource(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };

  return (
    <div>
      <h4>Szerokość</h4>
      <input
        type="text"
        id="lat"
        name="lat"
        onChange={(e) => handleOnChangeLat(e)}
      />
      <h4>Długość</h4>
      <input
        type="text"
        id="lon"
        name="lon"
        onChange={(e) => handleOnChangeLon(e)}
      />
      <div>
        <label for="WeatherAPI">Aeris Weather API</label>
        <input
          type="radio"
          id="WeatherAPI"
          name="WeatherAPI"
          value="Aeris"
          checked={source === "Aeris"}
          onChange={(e) => handleSourceOnChange(e)}
        />
        <label for="Weather2020API">Weather2020 API</label>
        <input
          type="radio"
          id="Weather2020API"
          name="WeatherAPI"
          value="2020"
          checked={source === "2020"}
          onChange={(e) => handleSourceOnChange(e)}
        />
      </div>
      <button
        className="checkWeather"
        onClick={() => checkWeather(lat, lon, source)}
      >
        Sprawdź pogodę
      </button>
    </div>
  );
}
