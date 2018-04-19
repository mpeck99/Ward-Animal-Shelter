import React, {PropTypes} from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Link, IndexLink } from 'react-router-dom';
import Logo from './assets/paw.png';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
export default class Navigation extends React.Component{
  render(){
    return(
      <nav className="navbar navbar-expand-md navbar-light">
          <div className="navbar-brand navbar-left hamburger-menu">
              <a href="/"><img src={Logo} className="logo" />Ward Animal Shelter</a>
              <button type="button" className="navbar-toggler navbar-right" data-toggle="collapse" data-target="#navbarCollapse">
                  <span className="navbar-toggler-icon navbar-toggler-right"></span>
              </button>
                </div>
          <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item pull-right"><Link to={'/'} activeClassName="active" className="link">Home</Link></li>
                  <li className="nav-item pull-right"><Link to={'/about'} activeClassName="active" className="link">About</Link></li>
                  <li className="nav-item pull-right"><Link to={'/contact'} activeClassName="active" className="link">Contact</Link></li>
              </ul>
          </div>

      </nav>
                );
  }
}
