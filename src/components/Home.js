import React, { Component } from 'react';
import Cat from './assets/cat.png';
import Dog from './assets/dog.png';
import Other from './assets/bunny.png'
import { Link } from 'react-router-dom';
import Footer from './Footer';
export default class Home extends Component {
  constructor(){
    super();
    this.state={
      featuredAnimals:[],
    };
  }
  componentDidMount(){
    fetch('http://localhost:8080')
    .then(results=>{
      return results.json();
    }).then(data=>{
      let animals = data.map((animal)=>{
        return(
          <div className="card col-lg-4 col-md-12 col-sm-12 animals">
            <img className="card-img-top animal-pic" src={animal.img} alt={animal.name} />
              <div className="card-body">
                <h5 className="card-title">{animal.name}</h5>
                <a href="#" className="btn btn-primary" data-toggle="modal" data-target={"#"+animal.name}>More</a>
              </div>
              <div className="modal fade" id={animal.name} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">{animal.name}</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                <div className="modal-body">
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              </div>
              </div>
              </div>
          </div>
        )
      })
      this.setState({featuredAnimals:animals})
    })
  }
    render() {
        return (
          <div>
            <div className="jumbotron header-img">
              <div className="header-info">
                <h1>We need your help!</h1>
                <p>Help us find these pets forever homes.
                Contact us to see how you can help</p>
                <a href="/contact" className="contact-us"> Contact Us Today!</a>
              </div>
            </div>
            <div className="animal-search row">
              <div className="dogs col-lg-4 col-md-12 col-sm-12">
                <Link to="/dogs" className="animal"><h1>Find A Dog</h1><img src={Dog}/></Link>
              </div>
              <div className="cats col-lg-4 col-md-12 col-sm-12">
                <Link to="/cats" className="animal"><h1>Find A Cat</h1><img src={Cat}/></Link>
              </div>
              <div className="other col-lg-4 col-md-12 col-sm-12">
                <Link to="/other-animals" className="animal"><h1>Find Other</h1><img src={Other}/></Link>
              </div>
            </div>
            <div className="container">
              <h2>Featured Pets</h2>
              <div className="row">
                {this.state.featuredAnimals}
              </div>
            </div>
            <Footer />
          </div>
        )
    }
}
