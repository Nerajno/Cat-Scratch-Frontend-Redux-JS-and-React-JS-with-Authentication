import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export default class CatCard extends React.Component {
    render() {
      return(
        <div>
            <h1>Fur-midable Feline</h1>
            <h2>Cat in-fur-mation by search:</h2>
            <ul>
            <div class="row">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </div>
        
              <li><Link to=".components/Home">Home</Link></li>
              <li><Link to=".components/logout">Logout</Link></li>
              <li><Link to=".components/AddToCart">Add To Cat Cart</Link></li>


      )
    }
  }
