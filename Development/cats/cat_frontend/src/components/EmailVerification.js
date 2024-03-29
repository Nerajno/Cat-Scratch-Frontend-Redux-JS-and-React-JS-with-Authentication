import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export default class EmailVerification extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleEmailVerification(e)
    this.props.history.push('/')
  }
    render() {
      return(
        <div>
            <h1>Can we email your results?</h1>
            <div className="field">
              <label>Enter your email:</label>
              <input required type="email" name="email" placeholder="Email"/>
              <button className="waves-effect waves-light purple lighten-1 btn" type="submit">Submit</button>
          </div>
            <h4>Thank you for submission!</h4>

          </div>
      )
    }
  }
