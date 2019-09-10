import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, Icon, Image, } from 'semantic-ui-react';


export default class CatPage extends React.Component {
  state ={
    loading: true,
    cats : []
  };

   componentDidMount(){
    const url = "https://api.thecatapi.com/v1/breeds";
    // const response = await fetch(url);
    // const data = await response.json();
    // this.setState({cat: data.results[0], loading: false });
    fetch(url)
    .then(res => res.json())
    .then(cats =>this.setState({
      cats: cats
    }))
  }

  render() {
    return (
      <div className="ui column">

        <div className="content">  <a className="header">{this.props.cat.name}</a>
          <div className="description"><p>Description</p>
            {this.props.cat.description}
          </div>
          <div className="origin"><p>Origin</p>
          {this.props.cat.origin}
          </div>
          <div className="life_span"><p>Life span</p>
          {this.props.cat.life_span}
          </div>
        </div>

      </div>
    )
  }



}
