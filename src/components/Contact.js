import React, { Component } from 'react';
import Navigation from './Navigation';
import Phone from './assets/phone.png';
import Email from './assets/email.png';
import Location from './assets/location.png';
export default class About extends Component {
    render() {
        return (
          <div className="contact-page container">
          <h1>Contact Us</h1>
          <div className="row ">
            <div className="card col-lg-6 col-md-6 col-sm-12">
              <div className="card-body contact-us-info">
                <h1>Our Information</h1>
                <p><img src={Email}/>wardanimalshelter@cityofward.com</p>
                <p><img src={Phone}/>501-843-7686, ext 309</p>
                <p><img src={Location}/>405 Hickory St, Ward, AR 72176</p>
              </div>
            </div>
            <form className="col-lg-6 col-md-6 col-sm-12 contact-form">
              <div className="form-group">
                <label for="user-name">Full Name</label>
                <input type="text" className="form-control" id="user-name" name="user-name" placeholder="Full Name" />
                </div>
              <div className="form-group">
                <label for="email">Email: </label>
                <input type="email" className="form-control" name="email" id="exampleInputEmail1" placeholder="Email" />
              </div>
              <div className="form-group">
              <label for="msg">Message:</label>
              <textarea className="form-control" name="msg" rows="5" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="btn btn-default contact-button">Send Message</button>
            </form>
        </div>
        </div>
        )
    }
}
