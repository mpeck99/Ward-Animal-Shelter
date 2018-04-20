import React, { Component } from 'react';
var arrow="\u2190";
export default class Others extends Component{
  constructor(){
    super();
    this.state={
      otherAnimals:[],
    };
  }
  componentDidMount(){
    fetch('http://localhost:8080/other')
    .then(results=>{
      return results.json();
    }).then(data=>{
      let animals = data.map((animal)=>{
        return(
          <div className="card col-lg-4 col-md-12 col-sm-12 animals">
            <img className="card-img-top animal-pic" src={animal.img} alt={animal.name} />
              <div className="card-body">
                <h5 className="card-title">{animal.name}</h5>
                <a href="#" className="btn btn-primary">More</a>
              </div>
          </div>
        )
      })
      this.setState({otherAnimals:animals})
    })
  }
  render(){
    return(
      <div className="container">
      <a href="/"><strong>{arrow} Back</strong></a>
        <div className="Others row">
          {this.state.otherAnimals}
        </div>
      </div>
    );
  }
}
