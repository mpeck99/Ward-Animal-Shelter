import React, { Component } from 'react';
import Navigation from './Navigation';
import Phone from './assets/phone.png';
import Email from './assets/email.png';
import Location from './assets/location.png';
import GoogleMaps from './Map';
import Footer from './Footer';
import axios from 'axios';
import { Redirect } from 'react-router';
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email:'',
      message:'',
      success:''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMsgChange = this.handleMsgChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event) {
    this.setState({name: event.target.value});

  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});

  }
  handleMsgChange(event) {
    this.setState({message: event.target.value});

  }
  handleSubmit(e){
        e.preventDefault();
        axios.get('http://localhost:8080/send',{
          params:{
          name:this.state.name,
          email:this.state.email,
          msg:this.state.message
        }
      })
        .then(function(res){
          console.log(res);
          console.log('sent');

        })
        this.props.history.push("/");
    }
    render() {
        return (
          <div className="contact-page container">
          <h1>Contact Us</h1>
          <div className="map">
          <GoogleMaps />
          </div>
          <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="contact-us-info">
                <h1>Our Information</h1>
                <p><img src={Email}/>wardanimalshelter@cityofward.com</p>
                <p><img src={Phone}/>501-843-7686, ext 309</p>
                <p><img src={Location}/>405 Hickory St, Ward, AR 72176</p>
                </div>
                </div>
            <form className="col-lg-6 col-md-6 col-sm-12 contact-form" onSubmit={this.handleSubmit.bind(this)} ref="contact" method="POST">
              <div className="form-group">
                <label htmlFor="user-name">Full Name</label>
                <input type="text" className="form-control" id="user-name" name="user-name" placeholder="Full Name" value={this.state.name} onChange={this.handleNameChange} />
                </div>
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" className="form-control" name="email" id="email" placeholder="Email" alue={this.state.email} onChange={this.handleEmailChange} />
              </div>
              <div className="form-group">
              <label htmlFor="msg">Message:</label>
              <textarea className="form-control" name="msg" rows="5" id="message" placeholder="Your message" alue={this.state.message} onChange={this.handleMsgChange}></textarea>
              </div>
              <button type="submit" className="btn btn-default contact-button">Send Message</button>
              <p>{this.state.success}</p>
            </form>
        </div>
        <Footer />
        </div>
        )
    }
}
