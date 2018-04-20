import React, { Component } from 'react';
var arrow="\u2190";
export default class Dogs extends Component{
  constructor(){
    super();
    this.state={
      Dogs:[],
    };
  }
  componentDidMount(){
    fetch('http://localhost:8080/dogs')
    .then(results=>{
      return results.json();
    }).then(data=>{
      let animals = data.map((dog)=>{
        return(
          <div className="card col-lg-4 col-md-12 col-sm-12 animals">
            <img className="card-img-top animal-pic" src={dog.img} alt={dog.name} />
              <div className="card-body">
                <h5 className="card-title">{dog.name}</h5>
                <a href="#" className="btn btn-primary">More</a>
              </div>
          </div>
        )
      })
      this.setState({Dogs:animals})
    })
  }
  render(){
    return(
      <div className="container">
      <a href="/"><strong>{arrow} Back</strong></a>
        <div className="row animal-row">
          {this.state.Dogs}
        </div>
      </div>
    );
  }
}
