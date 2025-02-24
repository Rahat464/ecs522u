import React, { useState, useEffect } from 'react';
import {Link, useParams} from "react-router-dom";
import "./style.css";

import {fetchData} from "../HomeScreen";

export const ViewMore = () => {
  // State variable to store the fetched data
  const [forecast5Data, setForecast5Data] = useState(null);
  const [openMeteoData, setOpenMeteoData] = useState(null);
  const [weatherbitData, setWeatherbitData] = useState(null);

  let {day, location} = useParams();


  const today = new Date();
  const currTimestamp = (today).getTime() / 1000;
  let trihourlyForecast = forecast5Data && forecast5Data.list ? forecast5Data.list :
      Array(40).fill({dt: currTimestamp, cnt : 40, wind: {speed: "?", gust:"?"}, main: {temp: "?"}, pop: "?"});

  // Fetch data from APIs
  useEffect(() => {
    const getForecastData = async () => {
      let data = await fetchData(location);
      setForecast5Data(data.forecast5Data); // Store the data in state
      setOpenMeteoData(data.openMeteoData);
      setWeatherbitData(data.weatherbitData);
    };
    getForecastData();

    // Find which index of the forecast data corresponds to the day selected
    if (forecast5Data) {
      for (let i = 0; i < forecast5Data.cnt; i++) {
        if (currTimestamp >= forecast5Data.list[i].dt) {
          trihourlyForecast = forecast5Data.list.slice(i +(8*day), (i + 5 +(8*day) <= forecast5Data.cnt) ? i + 5 +(8*day) : forecast5Data.cnt);
          break;
        }
      }
    }

  }, []);

  // Find today's date
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[today.getDay()];

  // Icon
  const iconUrl = "https://openweathermap.org/img/wn/{icon}@2x.png";

  return (
    <div className="view-more">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="background-image" alt="Background image" src="/img/background-image.png"/>
          <Link to={"/"}>
            <img className="back-button-icon" alt="Back button icon" src="/img/back-button-icon.png"/>
          </Link>
          <div className="navbar">
            <Link to="/map">
              <div className="map">
                <div className="overlap-group">
                  <div className="text-wrapper">Map</div>
                  <img className="map-icon" alt="Map" src="/img/map-icon.png"/>
                </div>
              </div>
            </Link>
            <Link to="/compass">
              <div className="compass">
                <div className="div" id="viewmore-div">
                  <img className="img" alt="Compass" src="/img/compass.png"/>
                  <div className="text-wrapper-2">Compass</div>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="home">
                <img className="home-icon" alt="Home" src="/img/home-icon.png"/>
                <div className="text-wrapper-3">Home</div>
              </div>
            </Link>
          </div>
          <div className="warning-sign">
            <div className="overlap-2">
              <img className="warning-icon" alt="Warning icon" src="/img/warning-icon.png"/>
              <p className="WARNING-heavy-rain">
                {weatherbitData && weatherbitData.alerts && weatherbitData.alerts[0] ?
                    ("1 of " + (weatherbitData.alerts.length).toString() + ": " + weatherbitData.alerts[0].title) :
                    "No warnings"
                }
              </p>
            </div>
          </div>
          <div className="today-s-weather">
            <div className="overlap-3">
              <div className="overlap-4">
                <p className="SUNDAY-QUICK">
                  <span className="span">
                    {String((today).getDate()) + " " + dayName.toUpperCase()}
                  </span>
                  <span className="text-wrapper-4"></span>
                  <span className="span"> • QUICK VIEW</span>
                </p>
                <div className="title">
                  <img className="storm-icon" alt="Storm icon"
                       src={iconUrl.replace("{icon}",
                           trihourlyForecast && trihourlyForecast[0].weather ?
                               trihourlyForecast[0].weather[0].icon : "01d")}
                  />
                  <div className="text-wrapper-5">{location}</div>
                </div>
              </div>
              <div className="weather-info">
                <div className="windspeed">
                  <img className="img-2" alt="Windspeed icon" src="/img/windspeed-icon.png"/>
                  <div className="text-wrapper-6">
                    {trihourlyForecast ? parseFloat(trihourlyForecast[0].wind.speed).toFixed(1) : "?"}
                  </div>
                  <div className="text-wrapper-7">Windspeed</div>
                </div>
                <div className="wave-height">
                  <img className="img-2" alt="Wave height icon" src="/img/wave-height-icon.png"/>
                  <div className="text-wrapper-8">
                    {openMeteoData && openMeteoData.daily && openMeteoData.daily.wave_height_max ?
                        openMeteoData.daily.wave_height_max[0] : "?"} m
                  </div>
                  <div className="text-wrapper-9">Wave Height</div>
                </div>
                <div className="precipitation">
                  <img className="img-2" alt="Precipitation icon" src="/img/precipitation-icon.png"/>
                  <div className="overlap-group-2">
                    <div className="text-wrapper-10">
                      {trihourlyForecast ? trihourlyForecast[0].pop : "?"}%
                    </div>
                    <div className="text-wrapper-11">Precipitation</div>
                  </div>
                </div>
                <div className="wind-direction">
                  <img className="img-2" alt="Wind direction icon" src="/img/wind-direction-icon.png"/>
                  <div className="text-wrapper-6">
                    {trihourlyForecast ? parseFloat(trihourlyForecast[0].wind.deg).toFixed(1) : "??"}°
                  </div>
                  <div className="text-wrapper-12">Wind Direction</div>
                </div>
                <div className="wave-direction">
                  <div className="text-wrapper-13">Wave Direction</div>
                  <img className="img-2" alt="Wave direction" src="/img/wave-direction.png"/>
                  <div className="text-wrapper-8">
                    {openMeteoData ? (openMeteoData.daily.wind_wave_direction_dominant[0]).toFixed(1) : "?"}°
                  </div>
                </div>
                <div className="visibility">
                  <div className="text-wrapper-8">
                    {trihourlyForecast ? parseFloat((trihourlyForecast[0].visibility / 1000).toFixed(1)) : "?"}km
                  </div>
                  <div className="text-wrapper-14">Visibility</div>
                  <img className="img-2" alt="Visibility icon" src="/img/visibility-icon.png"/>
                </div>
              </div>
            </div>
          </div>
          {/*WIND FORECAST*/}
          <div className="wind-forecast">
            <div className="overlap-5">
              <div className="times">
                <div className="element">
                  <div className="text-wrapper-15">
                    {/*  Get time in HH:MM */}
                    {new Date(trihourlyForecast[0].dt * 1000).toLocaleTimeString().slice(0, 5)}
                  </div>
                  <div className="text-wrapper-16">
                    {trihourlyForecast[0].wind ? parseFloat(trihourlyForecast[1].wind.speed).toFixed(1) : "?"}
                  </div>
                  <div className="text-wrapper-17">
                    {trihourlyForecast[0].wind ? parseFloat(trihourlyForecast[0].wind.gust).toFixed(1) : "?"}
                  </div>
                  <img className="arrow" alt="Arrow" src="/img/arrow-3.png"/>
                </div>
                <div className="element-2">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-15">
                      {new Date(trihourlyForecast[1].dt * 1000).toLocaleTimeString().slice(0, 5)}
                    </div>
                    <img className="arrow-2" alt="Arrow" src="/img/arrow-2.png"/>
                    <div className="text-wrapper-16">
                      {trihourlyForecast[1].wind ? parseFloat(trihourlyForecast[0].wind.speed).toFixed(1) : "?"}
                    </div>
                  </div>
                  <div className="text-wrapper-17">
                    {trihourlyForecast[1].wind ? parseFloat(trihourlyForecast[1].wind.gust).toFixed(1) : "?"}
                  </div>
                </div>
                <div className="element-3">
                  <div className="overlap-6">
                    <div className="text-wrapper-15">
                      {new Date(trihourlyForecast[2].dt * 1000).toLocaleTimeString().slice(0, 5)}
                    </div>
                    <img className="arrow-3" alt="Arrow" src="/img/arrow-1.png"/>
                    <div className="text-wrapper-16">
                      {trihourlyForecast[2].wind ? parseFloat(trihourlyForecast[0].wind.speed).toFixed(1) : "?"}
                    </div>
                  </div>
                  <div className="text-wrapper-17">
                    {trihourlyForecast[2].wind ? parseFloat(trihourlyForecast[2].wind.gust).toFixed(1) : "?"}
                  </div>
                </div>
                <div className="element-4">
                  <div className="text-wrapper-18">
                    {new Date(trihourlyForecast[3].dt * 1000).toLocaleTimeString().slice(0, 5)}
                  </div>
                  <img className="arrow-4" alt="Arrow" src="/img/arrow.png"/>
                  <div className="text-wrapper-17">
                    {trihourlyForecast[3].wind ? parseFloat(trihourlyForecast[3].wind.gust).toFixed(1) : "?"}
                  </div>
                  <div className="text-wrapper-19">
                    {trihourlyForecast[3].wind ? parseFloat(trihourlyForecast[0].wind.speed).toFixed() : "?"}
                  </div>
                </div>
              </div>
              <div className="titles">
                <div className="overlap-7">
                  <div className="text-wrapper-20">TIME</div>
                  <div className="text-wrapper-21">WIND FORECAST</div>
                </div>
                <div className="text-wrapper-22">DIRECTION</div>
                <div className="text-wrapper-23">SPEED</div>
                <div className="text-wrapper-24">GUST</div>
              </div>
            </div>
          </div>
          {/*WEATHER FORECAST*/}
          <div className="hourly-forecast">
            <div className="overlap-8">
              <div className="times-2">
                <div className="element-5">
                  <div className="text-wrapper-15">
                    {new Date(trihourlyForecast[0].dt * 1000).toLocaleTimeString().slice(0, 5)}
                  </div>
                  <div className="temperature">
                    <div className="overlap-group-4">
                      <div className="rectangle" id="rectangle1"/>
                      <div className="text-wrapper-25">
                        {trihourlyForecast && trihourlyForecast[0] ? parseFloat(trihourlyForecast[0].main.temp).toFixed(1) : 'Loading...'}°
                      </div>
                    </div>
                  </div>
                  <img className="storm-icon-2" alt="Storm icon" src={iconUrl.replace("{icon}",
                      trihourlyForecast && trihourlyForecast[0] && trihourlyForecast[0].weather && trihourlyForecast[0].weather[0] ?
                          trihourlyForecast[0].weather[0].icon : "01d")}
                  />
                  <div className="text-wrapper-26">
                    {trihourlyForecast ? trihourlyForecast[0].pop : "?"}%
                  </div>
                </div>
                <div className="element-6">
                  <div className="text-wrapper-15">
                    {new Date(trihourlyForecast[1].dt * 1000).toLocaleTimeString().slice(0, 5)}
                  </div>
                  <div className="temperature">
                    <div className="overlap-group-4">
                      <div className="rectangle-2"/>
                      <div className="text-wrapper-25">
                        {trihourlyForecast ? parseFloat(trihourlyForecast[1].main.temp).toFixed(1) : "?"}°
                      </div>
                    </div>
                  </div>
                  <img className="storm-icon-2" alt="Storm icon" src={iconUrl.replace("{icon}",
                      trihourlyForecast && trihourlyForecast[0] && trihourlyForecast[0].weather && trihourlyForecast[0].weather[0] ?
                          trihourlyForecast[0].weather[0].icon : "01d")}
                  />
                  <div className="text-wrapper-26">
                    {trihourlyForecast ? trihourlyForecast[1].pop : "?"}%
                  </div>
                </div>
                <div className="element-7">
                  <div className="text-wrapper-15">
                    {new Date(trihourlyForecast[2].dt * 1000).toLocaleTimeString().slice(0, 5)}
                  </div>
                  <div className="temperature">
                    <div className="overlap-group-4">
                      <div className="rectangle-2"/>
                      <div className="text-wrapper-25">
                        {trihourlyForecast ? parseFloat(trihourlyForecast[2].main.temp).toFixed(1) : "?"}°
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-26">
                    {trihourlyForecast ? trihourlyForecast[2].pop : "?"}%
                  </div>
                  <img className="storm-icon-2" alt="Storm icon" src={iconUrl.replace("{icon}",
                      trihourlyForecast && trihourlyForecast[0] && trihourlyForecast[0].weather && trihourlyForecast[0].weather[0] ?
                          trihourlyForecast[0].weather[0].icon : "01d")}
                  />
                </div>
                <div className="element-8">
                  <div className="text-wrapper-15">
                    {new Date(trihourlyForecast[3].dt * 1000).toLocaleTimeString().slice(0, 5)}
                  </div>
                  <div className="temperature">
                    <div className="overlap-group-4">
                      <div className="rectangle-3"/>
                      <div className="text-wrapper-25">
                        {trihourlyForecast ? parseFloat(trihourlyForecast[3].main.temp).toFixed(1) : "?"}°
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-26">
                    {trihourlyForecast ? trihourlyForecast[3].pop : "?"}%
                  </div>
                  <img className="storm-icon-2" alt="Storm icon" src={iconUrl.replace("{icon}",
                      trihourlyForecast && trihourlyForecast[0] && trihourlyForecast[0].weather && trihourlyForecast[0].weather[0] ?
                          trihourlyForecast[0].weather[0].icon : "01d")}
                  />
                </div>
                <div className="element-9">
                  <div className="text-wrapper-15">
                    {new Date(trihourlyForecast[4].dt * 1000).toLocaleTimeString().slice(0, 5)}
                  </div>
                  <div className="temperature">
                    <div className="overlap-group-4">
                      <div className="rectangle-4"/>
                      <div className="text-wrapper-25">
                        {trihourlyForecast ? parseFloat(trihourlyForecast[4].main.temp).toFixed(1) : "?"}°
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-26">
                    {trihourlyForecast ? trihourlyForecast[4].pop : "?"}%
                  </div>
                  {/* TODO: Investigate possible issue with the icon (they are all index 0)
                    */}
                  <img className="storm-icon-2" alt="Storm icon" src={iconUrl.replace("{icon}",
                      trihourlyForecast && trihourlyForecast[0] && trihourlyForecast[0].weather && trihourlyForecast[0].weather[0] ?
                          trihourlyForecast[0].weather[0].icon : "01d")}
                  />
                </div>
              </div>
              <div className="text-wrapper-27">TRI-HOURLY FORECAST</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
/* TODO:
 Wind Direction arrows
 Temperature Colours
 Handle Error:  Uncaught TypeError: Cannot read properties of undefined (reading 'wind_wave_direction_dominant') at ViewMore (ViewMore.jsx:141:1)
 */
