import React, { Component } from 'react';
import Navigation from './Navigation';
export default class About extends Component {
    render() {
        return (
          <div>
          <div className="container">
            <div className="card">
              <div className="card-body">
                <h1>Contact Us</h1>
              </div>
            </div>
            <form>
              <div className="form-group">
                <label for="exampleInputPassword1">Full Name</label>
                <input type="text" className="form-control" id="user-name" placeholder="Full Name" />
                </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email: </label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
              </div>
              <div className="form-group">
              <textarea className="form-control" rows="5" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="btn btn-default">Contact</button>
            </form>
        </div>
        </div>
        )
    }
}
