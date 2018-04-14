import React, {PropTypes} from 'react';
import Home from './index';
import About from './About';
import Contact from './Contact';
import { Link } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
export default class Navigation extends React.Component{
  render(){
    return(
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                  <span className="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item"><Link to={'/'} className="link">Home</Link></li>
                  <li className="nav-item"><Link to={'/about'} className="link">About</Link></li>
                  <li className="nav-item"><Link to={'/contact'} classname="link">Contact</Link></li>
              </ul>
          </div>
        </div>
      </nav>
                );
  }
}
