import React, { Component } from 'react';
import Cat from './assets/cat.png';
import Dog from './assets/dog.png';
import Other from './assets/bunny.png'
import { Link } from 'react-router-dom';
export default class Home extends Component {
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
            <div className="animal-search Row">
              <div className="dogs Column">
                <Link to="/dogs" className="animal"><h1>Find A Dog</h1><img src={Dog}/></Link>
              </div>
              <div className="cats Column">
                <Link to="/cats" className="animal"><h1>Find A Cat</h1><img src={Cat}/></Link>
              </div>
              <div className="other Column">
                <Link to="/other-animals" className="animal"><h1>Find Other</h1><img src={Other}/></Link>
              </div>
            </div>
            <h2>Featured Pets</h2>
            <div className="row featured-animals">
              <div className="card col-lg-4 col-md-12">
                <img className="card-img-top" src="" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" class="btn btn-primary">More</a>
                  </div>
              </div>
              <div className="card col-lg-4 col-md-12">
                <img className="card-img-top" src="" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" class="btn btn-primary">More</a>
                  </div>
              </div>
              <div className="card col-lg-4 col-md-12">
                <img className="card-img-top" src="" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" class="btn btn-primary">More</a>
                  </div>
              </div>
            </div>
          </div>
        )
    }
}
