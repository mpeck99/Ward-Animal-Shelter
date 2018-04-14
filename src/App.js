import React, { Component } from 'react';
import './App.css';
import Home from './components/index'
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './css/styles.css';
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        </div>
      </Router>

    );
  }
}

export default App;
