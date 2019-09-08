import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export default class CreateProfile extends React.Component {
    render() {
      return(
        <div>
            <h1>Your Profile Page</h1>
            <h2>Hi, (person's name), Welcome!</h2>
            <h3> Profile Card pic, with update and delete </h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/logout">Logout</Link></li>
              <li><Link to="/cats">Find your purr-fect Cat!</Link></li>
            </ul>
        </div>
      )
    }
  }
