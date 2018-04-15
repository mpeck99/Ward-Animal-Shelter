import React, { Component } from 'react';
export default class Home extends Component {
    render() {
        return (
          <div className="body">
            <div className="jumbotron header-img">
              <div className="header-info">
                <h1>We need your help!</h1>
                <p>Help us find these pets forever homes.
                Contact us to see how you can help</p>
                <button type="button" className="contact-us"> Contact Us Today!</button>
                </div>
            </div>
          </div>
        )
    }
}
