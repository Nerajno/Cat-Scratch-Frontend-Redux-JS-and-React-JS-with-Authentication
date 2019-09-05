import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default class Navbar extends React.Component {
    render() {
      return(
        <div>
          <Card>
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href=".components/Home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href=".views/Login">Login</Nav.Link>
              </Nav.Item>
            </Nav>
            </Card.Header>
          </Card>
      </div>
    )
  }
}
