import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cat from './assets/cat.png';
import Dog from './assets/dog.png';
import Other from './assets/bunny.png';
import Footer from './Footer';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      featuredAnimals: [],
    };
  }
  componentDidMount() {
    // eslint-disable-next-line no-undef
    fetch('http://localhost:8080')
      .then(results => results.json()).then((data) => {
        const animals = data.map(animal => (
          <div className="col-lg-4" key={animal.name}>
            <div className="modal fade" id={animal.name} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{animal.name}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body animal-card">
                    <img src={animal.img} alt={animal.name} />
                    <p>Age: {animal.age}</p>
                    <p>Gender: {animal.gender}</p>
                  </div>
                  <a href="/contact" className="animal-button" >Contact us!</a>
                </div>
              </div>
            </div>
            <div className="card mb-4 box-shadow">
              <img className="card-img-top animal-pic" src={animal.img} alt={animal.name} />
              <div className="card-body animal-card">
                <h1>{animal.name}</h1>
                <p className="card-text" />
                <div className="btn-group align-items-center">
                  <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target={`#${animal.name}`}>More</button>
                </div>
              </div>
            </div>
          </div>
        ));
        this.setState({ featuredAnimals: animals });
      });
  }
  render() {
    return (
      <div>
        <div className="jumbotron header-img">
          <div className="header-info">
            <h1>We need your help!</h1>
            <p>Help us find these pets forever homes.
                Contact us to see how you can help
            </p>
            <a href="/contact" className="contact-us"> Contact Us Today!</a>
          </div>
        </div>
        <div className="animal-search row">
          <div className="dogs col-lg-4 col-md-12 col-sm-12">
            <Link to="/dogs" href="/dogs" className="animal"><h1>Find A Dog</h1><img src={Dog} alt="Search Dogs" /></Link>
          </div>
          <div className="cats col-lg-4 col-md-12 col-sm-12">
            <Link to="/cats" href="/cats" className="animal"><h1>Find A Cat</h1><img src={Cat} alt="Search Cats" /></Link>
          </div>
          <div className="other col-lg-4 col-md-12 col-sm-12">
            <Link to="/other-animals" href="/other-animals" className="animal"><h1>Find Other</h1><img src={Other} alt="Search Other Animals" /></Link>
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
    );
  }
}
