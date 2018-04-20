import React, { Component } from 'react';
var arrow="\u2190";
export default class Cats extends Component{
  constructor(){
    super();
    this.state={
      Cats:[],
    };
  }
  componentDidMount(){
    fetch('http://localhost:8080/cats')
    .then(results=>{
      return results.json();
    }).then(data=>{
      let animals = data.map((cat)=>{
        return(
          <div className="card col-lg-4 col-md-12 col-sm-12 animals">
            <img className="card-img-top animal-pic" src={cat.img} alt={cat.name} />
              <div className="card-body">
                <h5 className="card-title">{cat.name}</h5>
                <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">More</a>
              </div>
          </div>
        )
      })
      this.setState({Cats:animals})
    })
  }
  render(){
    return(
      <div className="container">
      <a href="/"><strong>{arrow} Back</strong></a>
        <div className="row animal-row">
          {this.state.Cats}
        </div>
      </div>
    );
  }
}
