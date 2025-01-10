import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  return (
    <div className="container">
      <h3 className="icon">
        {info.humidity > 80 ? (
          <ThunderstormIcon sx={{ fontSize: 40 }} />
        ) : info.temp > 20 ? (
          <WbSunnyIcon sx={{ fontSize: 40 }} />
        ) : (
          <AcUnitIcon sx={{ fontSize: 40 }} />
        )}
      </h3>
      <h2>Weather Info</h2>
      <div className="weather-info">
        <h3 id="location">{info.city}</h3>
        <h3 id="temperature">{info.temp}&deg;C</h3>
        <p id="temp-max">Max: {info.tempMax}&deg;C</p>
        <p id="temp-min">Min: {info.tempMin}&deg;C</p>
        <p id="feels-like">Feels Like: {info.feelsLike}&deg;C</p>
        <p id="description">{info.weather}</p>
      </div>
    </div>
  );
}
