import React from 'react';

const arrow = '\u2190';
const Success = () => (
  <div className="container success">
    <h2>Success!</h2>
    <p> Your Message was Sent!</p>
    <a href="/contact"><strong>{arrow} Back</strong></a>
  </div>
);

export default Success;
