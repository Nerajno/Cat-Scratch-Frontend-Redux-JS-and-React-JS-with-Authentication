import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";






function CatHome() {
  return (
    <Router>
      <div>

    <h1> <span class="badge badge-secondary">Cat Scratch!</span></h1>

        <ul>
            <li>
              <Link to="/about">Who are we?</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/usercontainer">All Users</Link>
            </li>
            <li>
            <Link to="/catcontainer">Cat Selection</Link>
            </li>
            <li>
            <Link to="/cartcontainer">All User Cat Carts</Link>
            </li>
            <li>
            <Link to="/logout">Logout</Link>
            </li>
            <li>
            <Link to="/emailverification">Email Your Results!</Link>
            </li>
            <li>
            <Link to="/catimagecontainer">Random Cat Images!</Link>
            </li>
            <li>
            <Link to="/adduserform">Add a New User!</Link>
            </li>


        </ul>

          <h6>  © Made by Christopher Swofford </h6>

    </div>
    </Router>
  );
}



export default CatHome;
