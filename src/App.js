import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";
import HourlyW from "./components/HourlyW";
import clearSky from "./images/weather-icons/clear.svg";
import cloudy from "./images/weather-icons/mostlycloudy.svg";
import fog from "./images/weather-icons/fog.svg";
import rain from "./images/weather-icons/rain.svg";
import rsfc from "./images/weather-icons/storm.svg";
import partC from "./images/weather-icons/partlycloudy.svg"

class App extends React.Component {
  state = {
    city: "",
    weather: null,
    result: "",
    image111: null,
    image112: null,
    image113: null,
    image114: null,
    image118: null,
  };

  handleChange = (event) => {
    this.setState({ city: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const API_KEY = '933b254f193edd9c5930f05faa337f3c'
    const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}`;

    axios
      .get(API_ENDPOINT)
      .then((response) => {
        console.log(response.data);
        this.setState({ weather: response.data });
        console.log(response.data)
      })

      .catch((error) => {
        console.error(error);
      });
  };
  componentDidUpdate(){
    console.log();
  }
  render() {
    const { weather } = this.state;

    
    if (weather && weather.weather[0].description === "clear sky") {
      this.result = "Content";
      this.state.image111 = clearSky;
      this.state.image112 =  clearSky;
      this.state.image113 = cloudy;
      this.state.image114 = cloudy;
      this.state.image118 = clearSky;

    } 
    
    else if (
      weather &&
      weather.weather[0].description === "overcast clouds"
    ) {
      this.result = "cloudy";
      this.state.image111 = cloudy;
      this.state.image112 = cloudy;
      this.state.image113 = clearSky;
    } 
    
    else if (weather && weather.weather[0].description === "cloudy") {
      this.result = "cloudy";
    } 
    
    else if (
      weather &&
      weather.weather[0].description === "scattered clouds"
    ) {
      this.result = "cloudy";
      this.state.image111 = fog;
      this.state.image112 = clearSky;
      this.state.image113 = cloudy;
      this.state.image114 = cloudy;
      this.state.image118 = cloudy;
    }
    
    else if (weather && weather.weather[0].description === "broken clouds") {
      this.result = "cloudy";
      this.state.image111 = clearSky;
      this.state.image112 = cloudy;
      this.state.image113 = fog;
      this.state.image114 = rain;
      this.state.image118 = cloudy;

    } 
    else if (weather && weather.weather[0].description === "thunderstorm with rain") {
      this.result = "off-cloudy";
      this.state.image111 = clearSky;
      this.state.image112 = cloudy;
      this.state.image113 = fog;
      this.state.image114 = rain;
      this.state.image118 = rsfc;

    } 
    
    else if (weather && weather.weather[0].description === "light rain") {
      this.result = "off-cloudy";
      this.state.image114 = rain;
      this.state.image111 = rain;
      this.state.image112 = rain;
      this.state.image113 = fog;
      this.state.image118 = rain;
    } 
    
    else if (weather && weather.weather[0].description === "few clouds") {
      this.result = "cloudy";
      this.state.image111 = cloudy;
      this.state.image112 = clearSky;
      this.state.image113 = fog;
      this.state.image114 = cloudy;
      this.state.image118 = partC;
    }


    return (
      <div className="Container">
        <div className="App-header">
          <form onSubmit={this.handleSubmit} className="form">
            <input
              placeholder="Type in a city Name!"
              className="App-input"
              type="text"
              value={this.state.city}
              onChange={this.handleChange}
            />
            <button type="submit" className="App-link">
              FIND WEATHER
            </button>
          </form>
        </div>
        {weather && (
          <div className={`${this.result} Content`}>
            <img src={this.state.image118} alt="lol" width={'250px'} height={'250px'}></img>
            <div itemID="Grid">
              <p className="temp">
                <span>Temperature</span> &nbsp;&nbsp;
                {Math.floor(weather.main.temp_min - 273.15)}°C &nbsp;&nbsp;to
                &nbsp;&nbsp; {Math.floor(weather.main.temp_max - 273.15)}°C
              </p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Description: {weather.weather[0].description}</p>
            </div>
            <ul>
              <HourlyW
                hour="09:00"
                temp={(weather.main.temp - 273).toFixed(2) + "C°"}
                image={this.state.image111}
              />
              <HourlyW
                hour="12:00"
                temp={(weather.main.temp - 273).toFixed(2) + "C°"}
                image={this.state.image114}
              />
              <HourlyW
                hour="15:00"
                temp={(weather.main.temp - 273).toFixed(2) + "C°"}
                image={this.state.image111}
              />
              <HourlyW
                hour="18:00"
                temp={(weather.main.temp - 273).toFixed(2) + "C°"}
                image={this.state.image112}
              />
              <HourlyW
                hour="21:00"
                temp={(weather.main.temp - 273).toFixed(2) + "C°"}
                image={this.state.image112}
              />
              <HourlyW
                hour="00:00"
                temp={(weather.main.temp - 273).toFixed(2) + "C°"}
                image={this.state.image112}
              />
              <HourlyW
                hour="03:00"
                temp={(weather.main.temp - 273).toFixed(2) + "C°"}
                image={this.state.image113}
              />
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;
