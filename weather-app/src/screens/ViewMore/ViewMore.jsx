import React from "react";
import "./style.css";

export const ViewMore = () => {
  return (
    <div className="view-more">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="background-image" alt="Background image" src="/img/background-image.png" />
          <img className="back-button-icon" alt="Back button icon" src="/img/back-button-icon.png" />
          <div className="navbar">
            <div className="map">
              <div className="overlap-group">
                <div className="text-wrapper">Map</div>
                <img className="map-icon" alt="Map icon" src="/img/map-icon.png" />
              </div>
            </div>
            <div className="compass">
              <div className="div">
                <img className="img" alt="Compass" src="/img/compass.png" />
                <div className="text-wrapper-2">Compass</div>
              </div>
            </div>
            <div className="home">
              <img className="home-icon" alt="Home icon" src="/img/home-icon.png" />
              <div className="text-wrapper-3">Home</div>
            </div>
          </div>
          <div className="warning-sign">
            <div className="overlap-2">
              <img className="warning-icon" alt="Warning icon" src="/img/warning-icon.png" />
              <p className="WARNING-heavy-rain">
                WARNING:
                <br />
                Heavy rain may result in some flooding and disruption. Avoid sailing.
              </p>
            </div>
          </div>
          <div className="today-s-weather">
            <div className="overlap-3">
              <div className="overlap-4">
                <p className="SUNDAY-QUICK">
                  <span className="span">SUNDAY 15</span>
                  <span className="text-wrapper-4">th</span>
                  <span className="span"> • QUICK VIEW</span>
                </p>
                <div className="title">
                  <img className="storm-icon" alt="Storm icon" src="/img/storm-icon-5.png" />
                  <div className="text-wrapper-5">Southend-on-Sea</div>
                </div>
              </div>
              <div className="weather-info">
                <div className="windspeed">
                  <img className="img-2" alt="Windspeed icon" src="/img/windspeed-icon.png" />
                  <div className="text-wrapper-6">32mph</div>
                  <div className="text-wrapper-7">Windspeed</div>
                </div>
                <div className="wave-height">
                  <img className="img-2" alt="Wave height icon" src="/img/wave-height-icon.png" />
                  <div className="text-wrapper-8">3.1m</div>
                  <div className="text-wrapper-9">Wave Height</div>
                </div>
                <div className="precipitation">
                  <img className="img-2" alt="Precipitation icon" src="/img/precipitation-icon.png" />
                  <div className="overlap-group-2">
                    <div className="text-wrapper-10">100%</div>
                    <div className="text-wrapper-11">Chance of Rain</div>
                  </div>
                </div>
                <div className="wind-direction">
                  <img className="img-2" alt="Wind direction icon" src="/img/wind-direction-icon.png" />
                  <div className="text-wrapper-6">137°</div>
                  <div className="text-wrapper-12">Wind Direction</div>
                </div>
                <div className="wave-direction">
                  <div className="text-wrapper-13">Wave Direction</div>
                  <img className="img-2" alt="Wave direction" src="/img/wave-direction.png" />
                  <div className="text-wrapper-8">136°</div>
                </div>
                <div className="visibility">
                  <div className="text-wrapper-8">3.2km</div>
                  <div className="text-wrapper-14">Visibility</div>
                  <img className="img-2" alt="Visibility icon" src="/img/visibility-icon.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="wind-forecast">
            <div className="overlap-5">
              <div className="times">
                <div className="element">
                  <div className="text-wrapper-15">13:00</div>
                  <div className="text-wrapper-16">11</div>
                  <div className="text-wrapper-17">21</div>
                  <img className="arrow" alt="Arrow" src="/img/arrow-3.png" />
                </div>
                <div className="element-2">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-15">14:00</div>
                    <img className="arrow-2" alt="Arrow" src="/img/arrow-2.png" />
                    <div className="text-wrapper-16">17</div>
                  </div>
                  <div className="text-wrapper-17">32</div>
                </div>
                <div className="element-3">
                  <div className="overlap-6">
                    <div className="text-wrapper-15">15:00</div>
                    <img className="arrow-3" alt="Arrow" src="/img/arrow-1.png" />
                    <div className="text-wrapper-16">19</div>
                  </div>
                  <div className="text-wrapper-17">37</div>
                </div>
                <div className="element-4">
                  <div className="text-wrapper-18">16:00</div>
                  <img className="arrow-4" alt="Arrow" src="/img/arrow.png" />
                  <div className="text-wrapper-17">37</div>
                  <div className="text-wrapper-19">15</div>
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
          <div className="hourly-forecast">
            <div className="overlap-8">
              <div className="times-2">
                <div className="element-5">
                  <div className="text-wrapper-15">13:00</div>
                  <div className="temperature">
                    <div className="overlap-group-4">
                      <div className="rectangle" id="rectangle1"/>
                      <div className="text-wrapper-25">8°</div>
                    </div>
                  </div>
                  <img className="storm-icon-2" alt="Storm icon" src="/img/storm-icon.png" />
                  <div className="text-wrapper-26">100%</div>
                </div>
                <div className="element-6">
                  <div className="text-wrapper-15">14:00</div>
                  <div className="temperature">
                    <div className="overlap-group-4">
                      <div className="rectangle-2" />
                      <div className="text-wrapper-25">7°</div>
                    </div>
                  </div>
                  <img className="storm-icon-3" alt="Storm icon" src="/img/storm-icon.png" />
                  <div className="text-wrapper-26">100%</div>
                </div>
                <div className="element-7">
                  <div className="text-wrapper-15">15:00</div>
                  <div className="temperature">
                    <div className="overlap-group-4">
                      <div className="rectangle-2" />
                      <div className="text-wrapper-25">7°</div>
                    </div>
                  </div>
                  <div className="text-wrapper-26">99%</div>
                  <img className="storm-icon-3" alt="Storm icon" src="/img/storm-icon.png" />
                </div>
                <div className="element-8">
                  <div className="text-wrapper-15">16:00</div>
                  <div className="temperature">
                    <div className="overlap-group-4">
                      <div className="rectangle-3" />
                      <div className="text-wrapper-25">6°</div>
                    </div>
                  </div>
                  <div className="text-wrapper-26">94%</div>
                  <img className="storm-icon-3" alt="Storm icon" src="/img/storm-icon.png" />
                </div>
                <div className="element-9">
                  <div className="text-wrapper-15">17:00</div>
                  <div className="temperature">
                    <div className="overlap-group-4">
                      <div className="rectangle-4" />
                      <div className="text-wrapper-25">5°</div>
                    </div>
                  </div>
                  <div className="text-wrapper-26">92%</div>
                  <img className="storm-icon-3" alt="Storm icon" src="/img/storm-icon.png" />
                </div>
              </div>
              <div className="text-wrapper-27">HOURLY FORECAST</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
