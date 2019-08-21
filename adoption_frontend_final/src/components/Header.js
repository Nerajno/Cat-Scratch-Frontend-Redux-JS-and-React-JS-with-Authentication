import React from "react";
import {Component} from "react"
import { Switch, Route, Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
      super(props);
      this.state = {
        links: [
          {path: "/1", text: "Page 1", isActive: false},
          {path: "/2", text: "Page 2", isActive: false},
          {path: "/3", text: "Page 3", isActive: false},
        ]
      }
    }
  
    handleClick(i) {
      const links = this.state.links.slice(); 
      for (const j in links) {
        links[j].isActive = i == j ;
      }
      this.setState({links: links});
    }
  
  
    render() {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light  bg-light">
            <Link className="navbar-brand" to="/">Home</Link>
            <ul className="navbar-nav">

            <li>test</li>
            <li>test2</li>
            <li>test3</li>
              {/* {this.state.links.map((link, i) => 
                <NavLink 
                  path={link.path} 
                  text={link.text} 
                  isActive={link.isActive}
                  key={link.path} 
                  onClick={() => this.handleClick(i)}
                /> 
                )} */}
            </ul>
          </nav>
        </div>
      );
    }
  }

export default Header