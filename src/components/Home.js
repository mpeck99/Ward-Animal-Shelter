import React, { Component } from 'react';
import Navigation from './Navigation';
export default class Home extends Component {
    render() {
        return (
          <div className="jumbotron header-img">
          <h1>We need your help!</h1>
          <p>Help us find these pets forever homes
          Contact us to see how you can help</p>
          <button type="button" className="contact-us"> Contact Us Today!</button>
          </div>
        )
    }
}
