import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class About extends React.Component {
    render() {
      return(
        <div>

            <div>
              <h1>What is Cat Scratch!</h1>
              <p>Cat Scratch is an interactive application that matches humans to cats in a very selective way. It allows for humans to select a
                perfect cat breed by description, origin, and life span. These attirbutes allow for a human to connect to the perfect cat.
                
            <Link to="/catcontainer">All Cat Breed's!</Link></p>
            </div>

        </div>
      )
    }
  }
