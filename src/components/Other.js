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
          <div className="card col-lg-4 col-md-12 col-sm-12 animals">
            <img className="card-img-top animal-pic" src={animal.img} alt={animal.name} />
              <div className="card-body">
                <h5 className="card-title">{animal.name}</h5>
                <a href="#" className="btn btn-primary" data-toggle="modal" data-target={"#"+animal.name}>More</a>
              </div>
              <div className="modal fade" id={animal.name} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">{animal.name}</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                <div className="modal-body">
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
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
        <div className="Others row">
          {this.state.otherAnimals}
        </div>
        <Footer />
      </div>
    );
  }
}
