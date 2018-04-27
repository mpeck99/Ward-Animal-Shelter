import React, { Component } from 'react';
import Footer from './Footer';
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
          <div className="col-md-6 col-lg-4">
          <div className="modal fade" id={animal.name} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">{animal.name}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
              </div>
            <div className="modal-body animal-card">
            <img src={animal.img} alt={animal.name} />
              <p>Age: {animal.age}</p>
              <p>Gender: {animal.gender}</p>
            </div>
            <button type="button" className="btn btn-primary" data-dismiss="modal">Call Today 501-843-7686, ext 309</button>
          </div>
          </div>
          </div>
              <div className="card mb-4 box-shadow">
                <img className="card-img-top animal-pic" src={animal.img} alt="Card image cap" />
                <div className="card-body animal-card">
                  <h1>{animal.name}</h1>
                  <p className="card-text"></p>
                    <div className="btn-group align-items-center">
                      <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target={"#"+animal.name}>More</button>
                    </div>
                </div>
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
      <h1> Avaliable Pets</h1>
        <div className="Others row">
          {this.state.otherAnimals}
        </div>
        <Footer />
      </div>
    );
  }
}
