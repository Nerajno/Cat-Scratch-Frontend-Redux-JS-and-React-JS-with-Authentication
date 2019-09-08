import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Logout extends React.Component {
    render() {
      return(
        <div>
          <h3>Thanks for using the Application! We hope to see you soon. </h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

    )
  }
}
