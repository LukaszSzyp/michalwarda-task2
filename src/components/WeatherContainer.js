import DataTile from "./DataTile";
import InputPosition from "./InputPosition";
import { useState } from "react";
import { WeatherApiAdapter } from "./../useful/WeatherApiAdapter";

export default function WeatherContainer() {
  const [dataWeather, setDataWeather] = useState({
    temperature: "",
    pressure: "",
    humidity: "",
  });
  const checkWeather = (lat, lon, source) =>
    WeatherApiAdapter(lat, lon, source, setDataWeather);
  return (
    <div>
      <InputPosition checkWeather={checkWeather} />
      <DataTile
        temperature={dataWeather.temperature}
        pressure={dataWeather.pressure}
        humidity={dataWeather.humidity}
      />
    </div>
  );
}
