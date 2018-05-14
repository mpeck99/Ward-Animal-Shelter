import React, { Component } from 'react';
import Footer from './Footer';
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
          <div className="col-md-6 col-lg-4" key={cat.name}>
          <div className="modal fade" id={cat.name} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">{cat.name}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
              </div>
            <div className="modal-body animal-card">
            <img src={cat.img} alt={cat.name} />
            <p>Age: {cat.age}</p>
            <p>Gender: {cat.gender}</p>
            </div>
              <a href="/contact" className="animal-button" >Contact us!</a>
          </div>
          </div>
          </div>
              <div className="card mb-4 box-shadow">
                <img className="card-img-top animal-pic" src={cat.img} alt={cat.name} />
                <div className="card-body animal-card">
                  <h1>{cat.name}</h1>
                  <p className="card-text"></p>
                    <div className="btn-group align-items-center">
                      <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target={"#"+cat.name}>More</button>
                    </div>
                </div>
              </div>
            </div>
        )
      })
      this.setState({Cats:animals})
    })
  }
  render(){
    return(
      <div>
      <div className="container">
      <a href="/"><strong>{arrow} Back</strong></a>
      <h1> Avaliable Cats</h1>
        <div className="row">
          {this.state.Cats}
        </div>
        <Footer />
      </div>
      </div>
    );
  }
}
