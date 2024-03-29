import React, { Component } from 'react';
import { connect } from 'react-redux';
import {handleSignUp} from '../actions/user_actions';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class SignUp extends Component{

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSignUp(e)
    this.props.history.push('/usercontainer')

}
  render(){
    return(
      <div className="row" id="signup">
      <h1> Welcome to Cat Scratch!
      Please fill out the User Profile Form Below</h1>


        <form className=" col s8" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s4">

              <label htmlFor="Name">Name</label>
              <input id="Name" name="name" type="text" className="valid"/>

            </div>
          <div className= "input-field col s4">
              <label htmlFor="Location">Location</label>
            <input id="Location" type="text" className="valid" name="location"/>

          </div>
        </div>
        <div className= "row">
          <div className="input-field col s4">
              <label htmlFor="spirit_animal">Spirit Animal</label>
            <input id="spirit_animal" type="text" className="valid" name="spirit_animal"/>
          </div>
        <div className= "input-field col s4">
          <label htmlFor ="username">Username</label>
          <input id="username" type="text" className="valid" name="username"/>
        </div>
        <div className= "input-field col s4">
            <label htmlFor="password">Password</label>
          <input id="password" type="password" className="valid" name="password"/>
          </div>
            <div className="input-field col s4">
         <label htmlFor="photo">Insert your photo</label>
          <input id="photo" type="text" className="valid" name="photo"/>
          </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <button className= "waves-effect waves-light orange darken-3 btn-large">Sign Up:)</button>
        </div>
      </div>
    </form>


  </div>
  )
  }
}

const mapDispatchToProps = dispatch => {
  return{handleSignUp: (user) => {dispatch(handleSignUp(user)) }}
}
export default connect(null,mapDispatchToProps)(SignUp)
