import React from "react";
//import ReactDOM from "react-dom";
import { Card, Icon ,Image } from 'semantic-ui-react'

class PersonalInfo extends React.Component {

  constructor() {
    super()
    this.state = {
        users:[]
      }
  }

    componentDidMount(){
      fetch("http://localhost:3000/api/v1/users", {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
      .then(res => res.json())
      .then(data => this.setState({users:data}))
      }
     

    render() {
      console.log(this.state.users);
      return (
       
      <Card>
        <Image src={this.props.Dog.img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.Dog.name}</Card.Header>
          <Card.Meta>
            <span className='age'>{this.props.Dog.age} years old</span>
          </Card.Meta>
          <p>
          {this.props.Dog.breed}
          </p>
        </Card.Content>
        <Card.Content extra>
          <a>
          <Icon name='home' />
            {this.props.Dog.dog_location}
          </a>
          <br/>
          <a>
          <Icon name='home' />
            {this.props.Dog.adoption_location}
          </a>
        </Card.Content>
      </Card>
      )} 
  }
    
    export default PersonalInfo