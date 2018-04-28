import React, { Component } from 'react';
var arrow="\u2190";
class Success extends Component {
  render() {
    return (
      <div className="container success">
      <h2>Success!</h2>
      <p> Your Message was Sent!</p>
      <a href="/contact"><strong>{arrow} Back</strong></a>
      </div>
    );
  }
}

export default Success;
