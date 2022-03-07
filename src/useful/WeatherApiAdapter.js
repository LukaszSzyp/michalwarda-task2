export const WeatherApiAdapter = (lat, lon, source, setDataWeather) => {
  const { REACT_APP_X_RAPIDAPI_KEY } = process.env;
  const weatherData = {
    temperature: "",
    pressure: "",
    humidity: "",
  };

  switch (source) {
    case "Aeris":
      fetch(`https://aerisweather1.p.rapidapi.com/observations/${lat},${lon}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "aerisweather1.p.rapidapi.com",
          "x-rapidapi-key": REACT_APP_X_RAPIDAPI_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const weatherDataPath = data.response.ob;
          weatherData.temperature = weatherDataPath.tempC;
          weatherData.pressure = weatherDataPath.pressureMB;
          weatherData.humidity = weatherDataPath.humidity;
          setDataWeather(weatherData);
          console.log(data);
        });
      break;

    case "2020":
      fetch(
        `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${lon}&lat=${lat}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
            "x-rapidapi-key": REACT_APP_X_RAPIDAPI_KEY,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          const weatherDataPath = data.data[0];
          weatherData.temperature = weatherDataPath.temp;
          weatherData.pressure = weatherDataPath.pres;
          weatherData.humidity = weatherDataPath.rh;
          setDataWeather(weatherData);
          console.log(data);
        });
      break;
    default:
      break;
  }
};
