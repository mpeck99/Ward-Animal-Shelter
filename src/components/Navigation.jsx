import React from 'react';
import { Link} from 'react-router-dom';
import Logo from './assets/paw.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
export default class Navigation extends React.Component{
  render(){
    return(
      <nav className="navbar navbar-expand-md navbar-light">
          <div className="navbar-brand navbar-left hamburger-menu">
              <a href="/"><img src={Logo} className="logo" alt="menu"/>Ward Animal Shelter</a>
              <button type="button" className="navbar-toggler navbar-right" data-toggle="collapse" data-target="#navbarCollapse">
                  <span className="navbar-toggler-icon navbar-toggler-right"></span>
              </button>
                </div>
          <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item pull-right"><Link to={'/'} className="link">Home</Link></li>
                  <li className="nav-item pull-right"><Link to={'/about'} className="link">About</Link></li>
                  <li className="nav-item pull-right"><Link to={'/contact'} className="link">Contact</Link></li>
              </ul>
          </div>

      </nav>
                );
  }
}
