import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import React, { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "",
    temp: 30,
    tempMax: 35,
    tempMin: 25,
    feelsLike: 32,
    humidity: 70,
    weather: "",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
