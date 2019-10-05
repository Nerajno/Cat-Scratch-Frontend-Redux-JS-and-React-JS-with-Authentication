import React, { Component } from 'react';
import { connect } from 'react-redux';
import {handleSignUp} from '../actions/user_actions';

class SignUp extends Component{

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSignUp(e)
    this.props.history.push('/dashboard')
}
  render(){
    return(
      <div className="row" id="signup">
      <h6> Welcome to Cat Scratch Fever</h6>
      <br></br>
      <h6> Please fill out the User Profile Form Below</h6>
        <form className=" col s8" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s4">
              <input id ="Name" type="text" className="valid"/>
              <label htmlFor="Name">Name</label>
            </div>
          <div className= "input-field col s4">
            <input id="Location" type="text" className="valid"/>
            <label htmlFor="Location">Location</label>
          </div>
        </div>
        <div className= "row">
          <div className="input-field col s4">
            <input id="spirit_animal" type="text" className="valid"/>
            <label htmlFor="spirit_animal">Spirit Animal</label>
          </div>
        <div className= "input-field col s4">
          <input id="username" type="text" className="valid"/>
          <label htmlFor ="username">Username</label>
        </div>
      </div>
      <div className="row">
        <div className= "input-field col s4">
          <div className="password" type="password" className="valid"/>
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className= "row">
        <div className="input-field col s4">
          <i className="material-icons prefix">add_your_photo</i>
          <input id="photo" type="text" className="valid"/>
           <label htmlFor="photo">Insert your photo</label>
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
export default connect(null,mapDispatchToProps) (SignUp)
