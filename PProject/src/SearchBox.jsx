import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "8327e5a79c69fbecf53700f03b87859e";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let data = await response.json();
    let result = {
      city: data.name,
      temp: data.main.temp,
      tempMax: data.main.temp_max,
      tempMin: data.main.temp_min,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      weather: data.weather[0].main,
    };
    console.log(result);
    return result;
  };

  let [city, setCity] = useState("");

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    let newinfo = await getWeatherInfo();
    updateInfo(newinfo);
  };

  return (
    <div className="SearchBox">
      <h3>Search for a city</h3>
      <form onSubmit={handleSubmit}>
        <Paper sx={{ borderRadius: "10px" }}>
          <InputBase
            sx={{ ml: 1, flex: 1, borderRadius: "10px" }}
            placeholder="Search for a City"
            inputProps={{ "aria-label": "search for a city" }}
            value={city}
            onChange={handleChange}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Button
            variant="contained"
            type="submit"
            sx={{ borderRadius: "10px" }}
          >
            Search
          </Button>
        </Paper>
      </form>
    </div>
  );
}
