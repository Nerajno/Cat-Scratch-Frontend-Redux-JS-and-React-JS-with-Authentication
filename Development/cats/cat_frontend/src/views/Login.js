import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/user_actions';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleLogin(e)
    this.props.history.push('/dashboard')
  }
  render(){
  return(
    <div>
        <h2> Please Login!</h2>
      <form className= "ui-form" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col s12 m4">
            <div className="field">
              <label>Username</label>
              <input required type="text" name="username" placeholder="Username"/>
            </div>
            <div className="field">
              <label>Password</label>
              <input required type="password" name="password" placeholder="Password"/>
              <button className="waves-effect waves-light purple lighten-1 btn" type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
      <ul>
        <li><Link to="/">Home</Link></li>
      
      </ul>

    </div>
  )
  }
}
const mapDispatchToProps = dispatch =>{
  return { handleLogin: (user) => {dispatch(handleLogin(user)) }}
}
export default withRouter(connect(null, mapDispatchToProps)(Login))
