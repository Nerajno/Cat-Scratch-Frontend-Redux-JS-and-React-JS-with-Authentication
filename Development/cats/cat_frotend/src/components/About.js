import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class About extends React.Component {
    render() {
      return(
        <div>
          <h3>We want to help you select the perfect cat for you!
         There are several ways to find the best cat for you.
          Breed matters and we will link you to your perfect match!  </h3>
          <ul>
            <li><Link to=".components/Home">Home</Link></li>
            <li><Link to=".views/Login">Login</Link></li>
            <li><Link to=".components/logout">Logout</Link></li>
          </ul>
        </div>
      )
    }
  }
