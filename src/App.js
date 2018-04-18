import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Cats from './components/Cats';
import Others from './components/Other';
import Dogs from './components/Dogs';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './css/styles.css';
class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/cats" component={Cats}/>
        <Route path="/dogs" component={Dogs}/>
        <Route path="/other-animals" component={Others}/>
        </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
