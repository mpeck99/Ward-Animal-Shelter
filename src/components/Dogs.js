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
          <div className="card col-lg-4 col-md-12 col-sm-12 animals">
            <img className="card-img-top animal-pic" src={dog.img} alt={dog.name} />
              <div className="card-body">
                <h5 className="card-title">{dog.name}</h5>
                <a href="#" className="btn btn-primary" data-toggle="modal" data-target={"#"+dog.name}>More</a>
              </div>
              <div className="modal fade" id={dog.name} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">{dog.name}</h5>
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
        <Footer />
      </div>
    );
  }
}
