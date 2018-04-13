import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/index';


class App extends Component {
  render() {
    return (
      <Router>
              <div>
                <h2>Welcome to React Express Tutorial</h2>
                <ul>
                <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'#'}>About</Link></li>
                  <li><Link to={'#'}>Contact</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path='/index' component={Home} />
                </Switch>
              </div>
            </Router>
    );
  }
}

export default App;
