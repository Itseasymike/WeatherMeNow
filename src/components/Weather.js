import React, { Component } from 'react';
import '../App.css';

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
          <h3>Type Any Location</h3><input></input>
        </div>

      </div>

      );
    }
  }

export default Weather;
