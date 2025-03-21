import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import "./style.css";
import {fetchData} from "./index";


export const HomeScreen = () => {
  // State variable to store the fetched data
  const [forecast5Data, setForecast5Data] = useState(null);
  const [openMeteoData, setOpenMeteoData] = useState(null);
  const [weatherbitData, setWeatherbitData] = useState(null);

  const iconUrl = "http://openweathermap.org/img/wn/{icon}@2x.png";

  // When the user first opens the app, fetch the weather data for a predefined location
  // FetchData returns {forecast5Data, locationData} which are two JSON objects containing the weather forecast and location data
  // Fetch data when the component mounts
  useEffect(() => {
    const getForecastData = async () => {
      let data = await fetchData("Dover");
      setForecast5Data(data.forecast5Data); // Store the data in state
      setOpenMeteoData(data.openMeteoData);
      setWeatherbitData(data.weatherbitData);
    };
    getForecastData();

  }, []);

  // Declare a variable to store the user input
  // We do not use state as that would trigger a re-render every time the user types a letter
  // Hence also a new fetch/API request which is not necessary
  let userInput;
  // Whenever the user edits the input field, the value is stored in the state
  const handleInputChange = (e) => {
    userInput = e.target.value;
  };

  // When the user clicks the search button, the value of the input field is passed to the fetchData function
  // The input is only passed if it is not empty
  async function handleSearch() {
    if (userInput) {
      let data = await fetchData(userInput);
      setForecast5Data(data.forecast5Data);
      setOpenMeteoData(data.openMeteoData);
      setWeatherbitData(data.weatherbitData);
    }
  }

  // Get today's day to display on the home screen
  const today = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div className="home-screen">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="background-image" alt="Background image" src="/img/background-image.png" />
          <div className="navbar">
            <Link to="/map">
              <div className="map">
                <div className="overlap-group">
                  <img className="map-icon" alt="Map icon" src="/img/map-icon.png" />
                  <div className="text-wrapper">Map</div>
                </div>
              </div>
            </Link>
            <Link to="/compass">
              <div className="compass">
                <div className="div">
                  <img className="img" alt="Compass" src="/img/compass.png" />
                  <div className="text-wrapper-2">Compass</div>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="overlap-2">
                <div className="home">
                  <img className="home-icon" alt="Home icon" src="/img/home-icon.png" />
                  <div className="text-wrapper-3">Home</div>
                </div>
                <div className="shade" />
              </div>
            </Link>
          </div>
          <div className="more-forecasts">
            <div className="day-1"> {/*Tomorrow*/}
              <img className="cloudy" alt="Cloudy"
                   src={forecast5Data ? iconUrl.replace("{icon}", forecast5Data.list[8].weather[0].icon) : ""}/>
              <div className="text-wrapper-8">{days[(today.getDay() + 1) % 7]}</div>
              <div className="view-more-2">
                <div className="overlap-group-2">
                  <div className="rectangle"/>
                  <Link to={{ pathname: "/viewmore/1/" +
                    (forecast5Data && forecast5Data.city ? forecast5Data.city.name : "Dover")}}>
                    <div className="text-wrapper-5">VIEW MORE</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="day-2">
              <img className="cloudy" alt="Cloudy"
                   src={forecast5Data ? iconUrl.replace("{icon}", forecast5Data.list[16].weather[0].icon) : ""}/>
              <div className="text-wrapper-4">{days[(today.getDay() + 2) % 7]}</div>
              <div className="view-more" id="viewMore2">
                <div className="overlap-group-2">
                  <div className="rectangle"/>
                  <Link to={{ pathname: "/viewmore/2/" +
                    (forecast5Data && forecast5Data.city ? forecast5Data.city.name : "Dover")}}>
                    <div className="text-wrapper-5">VIEW MORE</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="day-3">
              <img className="cloudy" alt="Cloudy"
                   src={forecast5Data ? iconUrl.replace("{icon}", forecast5Data.list[24].weather[0].icon) : ""}/>
              <div className="text-wrapper-6">{days[(today.getDay() + 3) % 7]}</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="rectangle"/>
                  <Link to={{ pathname: "/viewmore/3/" +
                        (forecast5Data && forecast5Data.city ? forecast5Data.city.name : "Dover")}}>
                    <div className="text-wrapper-5">VIEW MORE</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="day-4">
              <img className="cloudy" alt="Cloudy"
                   src={forecast5Data ? iconUrl.replace("{icon}", forecast5Data.list[32].weather[0].icon) : ""}/>
              <div className="text-wrapper-7">{days[(today.getDay() + 4) % 7]}</div>
              <div className="div-wrapper">
                <div className="overlap-group-2">
                  <div className="rectangle"/>
                  <Link to={{ pathname: "/viewmore/4/" +
                        (forecast5Data && forecast5Data.city ? forecast5Data.city.name : "Dover")}}>
                    <div className="text-wrapper-5">VIEW MORE</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="today-s-weather">
            <div className="view-more-3">
              <div className="overlap-group-2">
                <div className="rectangle"/>
                <Link to={{ pathname: "/viewmore/0/" +
                      (forecast5Data && forecast5Data.city ? forecast5Data.city.name : "Dover")}}>
                  <div className="text-wrapper-5">VIEW MORE</div>
                </Link>
              </div>
            </div>
            <div className="title">
              <img className="storm-icon" alt="Storm icon"
                   src={forecast5Data ? iconUrl.replace("{icon}", forecast5Data.list[0].weather[0].icon) : ""}/>
              <div className="text-wrapper-18">
                {forecast5Data && forecast5Data.city ? forecast5Data.city.name : "City Name"}
              </div>
            </div>
            <div className="weather-info">
              <div className="precipitation">
                <img className="img-2" alt="Precipitation icon" src="/img/precipitation-icon.png"/>
                <div className="overlap-group-3">
                  <div className="text-wrapper-13">
                    {forecast5Data ? forecast5Data.list[0].pop : "?"}%
                  </div>
                  <div className="text-wrapper-14">Precipitation</div>
                </div>
              </div>
              <div className="wave-height">
                <img className="img-2" alt="Wave height icon" src="/img/wave-height-icon.png"/>
                <div className="text-wrapper-11">
                    {openMeteoData ? openMeteoData.daily.wave_height_max[0] : "?"} m
                </div>
                <div className="text-wrapper-12">Wave Height</div>
              </div>
              <div className="wave-direction">
                <div className="text-wrapper-16">Wave Direction</div>
                <img className="img-2" alt="Wave direction" src="/img/wave-direction.png"/>
                <div className="text-wrapper-11">
                    {openMeteoData ? (openMeteoData.daily.wind_wave_direction_dominant[0]).toFixed(1) : "?"}°
                </div>
              </div>
              <div className="wind-direction">
                <img className="img-2" alt="Wind direction icon" src="/img/wind-direction-icon.png"/>
                <div className="text-wrapper-9">
                    {forecast5Data ? forecast5Data.list[0].wind.deg : "??"}°
                </div>
                <div className="text-wrapper-15">Wind Direction</div>
              </div>
              <div className="windspeed">
                <img className="img-2" alt="Windspeed icon" src="/img/windspeed-icon.png"/>
                <div className="text-wrapper-9">
                    {forecast5Data ? (forecast5Data.list[0].wind.speed).toFixed(1) : "?"}m/s
                </div>
                <div className="text-wrapper-10">Windspeed</div>
              </div>
              <div className="visibility">
                <div className="text-wrapper-11">
                    {forecast5Data ? parseFloat((forecast5Data.list[0].visibility / 1000).toFixed(1)) : "?"}km
                </div>
                <div className="text-wrapper-17">Visibility</div>
                <img className="img-2" alt="Visibility icon" src="/img/visibility-icon.png"/>
              </div>
            </div>
          </div>
          <div className="warning-sign">
            <div className="overlap-3">
              <img className="warning-icon" alt="Warning icon" src="/img/warning-icon.png"/>
              <p className="WARNING-heavy-rain">
                {weatherbitData && weatherbitData.alerts && weatherbitData.alerts[0] ?
                    ("1 of " + (weatherbitData.alerts.length).toString() + ": " + weatherbitData.alerts[0].title) :
                    "No warnings"
                }
              </p>
            </div>
          </div>
          <div className="search">
            <input
                className="input"
                placeholder="Search..."
                type="text"
                value={userInput}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>
              <img className="search-icon" alt="Search icon" src="https://www.svgrepo.com/show/532555/search.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
