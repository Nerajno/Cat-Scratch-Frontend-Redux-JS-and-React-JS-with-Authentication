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
      return(
        <div>
            <h1> Claw-ver Decision!</h1>
          
            <h3> Cat Information</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/logout">Logout</Link></li>
              <li><Link to="/my_profiles"> My Profile</Link></li>
            </ul>
        </div>
      )
    }
  }
