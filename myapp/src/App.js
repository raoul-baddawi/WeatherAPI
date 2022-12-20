import './App.css';
import cloudy from "./images/weather-icons/cloudy.svg";
import mostlycloudy from "./images/weather-icons/mostlycloudy.svg";
import clear from "./images/weather-icons/clear.svg";



function App() {
  return (
    <div className="App">

<form className='searchBox'>
        <input type="text" placeholder="Type in a city name" className="text-city"/>
        <input type="submit" value="FIND WEATHER" className="button"/>
     </form>
     
    
<div className="cloud">
     <img src= {mostlycloudy} alt='mostly-clouded' width="13%" height="13%" />

          <h3>Overcast clouds</h3>
          <h2>
            Temperature <span> 10 &deg; to 11 &deg; C</span>
          </h2>
          <p>
            Humidity <span> 78% </span>{" "}
            Pressure
            <span> 1008.48</span>
          </p>
  </div>

  <div className="small">
          <div class="time">
            <div>
              <div>03:00</div>
              <div>
              <img src= {mostlycloudy} alt='mostly-clouded' width="30%" height="30%" />
              </div>

              <div>8&deg;C</div>
            </div>
           

            <div>
              <div>06:00</div>
              <div>
              <img src= {mostlycloudy} alt='mostly-clouded' width="30%" height="30%" />
              </div>

              <div>9&deg;C</div>
            </div>

            <div>
              <div>09:00</div>
              <div>
              <img src= {clear} alt='clear' width="30%" height="30%" />
              </div>

              <div>14 &deg; C</div>
            </div>

            <div>
              <div>12:00</div>
              <div>
              <img src= {clear}  alt='clear' width="30%" height="30%" />
              </div>

              <div>17 &deg; C</div>
            </div>

            <div>
              <div>15:00</div>
              <div>
              <img src= {clear}  alt='clear' width="30%" height="30%" />
              </div>

              <div>18 &deg; C</div>
            </div>
            <div>
              <div>18:00</div>

              <div>
              <img src= {clear} alt='clear' width="30%" height="30%" />
              </div>

              <div>16 &deg; C</div>
            </div>
            <div>
              <div>21:00</div>
              <div>
              <img src= {mostlycloudy} alt='mostly-clouded' width="30%" height="30%" />
              </div>

              <div>13 &deg; C</div>
            </div>

            </div>
            </div>
     
    </div>
  ); 
}

export default App;
