import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";





function CatHome() {
  return (
    <Router>
      <div>
        <h2>Welcome to Cat Scratch!</h2>
        <ul>
            <li>
              <Link to=".components/About">Who are we?</Link>
            </li>
            <li>
              <Link to=".components/CatCard">All Cat Breeds</Link>
            </li>
            <li>
              <Link to=".components/ProfileCard">All profiles</Link>
            </li>
            <li>
              <Link to=".views/Login">Login</Link>
            </li>
            <li>
              <Link to=".views/SignUp">SignUp</Link>
            </li>
        </ul>
          <h6>  © Made by Christopher Swofford </h6>
          <a class="grey-text text-lighten-4 right" href="https://github.com/Swofford2">Check Me Out!</a>
    </div>
    </Router>
  );
}



export default CatHome;
