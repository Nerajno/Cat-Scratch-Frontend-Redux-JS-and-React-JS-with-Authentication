import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class CatPage extends React.Component {
    render() {
      return(
        <div>
            <h1> Claw-ver Decision!</h1>
            <h2> Cat Image Url</h2>
            <h3> Cat Information</h3>
            <ul>
              <li><Link to=".components/Home">Home</Link></li>
              <li><Link to=".components/logout">Logout</Link></li>
              <li><Link to=".components/MyProfile"> My Profile</Link></li>
            </ul>
        </div>
      )
    }
  }
