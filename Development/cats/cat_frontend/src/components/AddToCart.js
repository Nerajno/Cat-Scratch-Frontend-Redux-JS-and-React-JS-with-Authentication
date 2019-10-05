import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export default class AddToCart extends React.Component {
    render() {
      return(
        <div>
            <h1>Cat Paws-Ability</h1>
            <h2>Cat- atonic Selection</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/logout">Logout</Link></li>
              <li><Link to="/emailverification">Finished Adding To Cart</Link></li>
            </ul>
        </div>
      )
    }
  }
