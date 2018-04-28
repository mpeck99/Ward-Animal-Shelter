import React, { Component } from 'react';
import Footer from './Footer';
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
          <div className="col-md-6 col-lg-4">
          <div className="modal fade" id={dog.name} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">{dog.name}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
              </div>
            <div className="modal-body animal-card">
            <img src={dog.img} alt={dog.name} />
            <p>Age: {dog.age}</p>
            <p>Gender: {dog.gender}</p>
            </div>
              <button type="button" className="btn btn-primary" data-dismiss="modal">Call Today 501-843-7686, ext 309</button>
          </div>
          </div>
          </div>
              <div className="card mb-4 box-shadow">
                <img className="card-img-top animal-pic" src={dog.img} alt={dog.name} />
                <div className="card-body animal-card">
                  <h1>{dog.name}</h1>
                  <p className="card-text"></p>
                    <div className="btn-group align-items-center">
                      <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target={"#"+dog.name}>More</button>
                    </div>
                </div>
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
      <h1> Avaliable Dogs</h1>
        <div className="row animal-row">
          {this.state.Dogs}
        </div>
        <Footer />
      </div>
    );
  }
}
