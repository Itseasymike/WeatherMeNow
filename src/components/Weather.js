import React, { Component } from 'react';
import '../App.css';
// add Geolocation?
class  Weather extends Component {
  render () {
    return(
      <div className="container">
        <h1>Weather Me Now</h1>

        <div className="weather">
          <h2>Your Weather</h2>
        </div>

        <div className="location">
          <h2>Your Location</h2>
        </div>

        <div>
          <h3>Type Any City</h3><input></input><button>Enter</button>
        </div>

      </div>

      );
    }
  }

export default Weather;
