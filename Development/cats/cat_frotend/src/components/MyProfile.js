import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class MyProfile extends React.Component {
    render() {
      return(
        <div>
            <h2>A-paw-ling Cat-titude!</h2>
            <h3>Find your purr-fect cat!</h3>
            <h4>Filter cats by searching cat-egory:</h4>
            <h5> Dropdown box to search by several filters!</h5>
            <ul>
                <li><Link to=".components/Home">Home</Link></li>
                <li><Link to=".components/logout">Logout</Link></li>
            </ul>
        </div>
      )
    }
  }
