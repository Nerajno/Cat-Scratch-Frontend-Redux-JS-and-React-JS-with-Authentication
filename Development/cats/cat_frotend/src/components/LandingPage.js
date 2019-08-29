import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage(props){
  return(
    <div>
    {
      window.location.pathname === '/' ?
      <div className = 'container col s8'>
      <div className ="card small red lighten-5 left-align">
      <br></br>
      <br></br>
      <span className="lp-card-title center-align">🐱Welcome to Cat Scratch!🐱</span>
      <br></br>
      <Link className="waves-effect waves-light purple purple lighten-2- btn-large" to="/sign_up">Sign Up</Link><span></span>
      <br></br>
      <Link className="waves-effect waves-light blue darken btn-large" to:"/login"</Link>
      <br></br>
      <br></br>
      <p><span className="profile-card-title-content">Login or Sign Up to Enter</span></p>
    </div>
  </div>
    :
    null
  }
</div>
 )
}
export default LandingPage
