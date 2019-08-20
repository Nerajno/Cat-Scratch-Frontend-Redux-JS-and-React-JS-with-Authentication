import React from 'react'
//import ReactDom from 'react-dom';
import { Card, Icon ,Image } from 'semantic-ui-react'
//import SearchBar from './SearchBar'


class AgencyCard extends React.Component {

  render() {
    // console.log(this);
    return (
    <Card>
      <Image src={this.props.User.img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{this.props.User.name}</Card.Header>
        <Card.Meta>
          <span className='age'>{this.props.User.age} years old</span>
        </Card.Meta>
        <p>
        {this.props.User.breed}
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
          {/* {this.props.User.adoption_location} */}
        </a>
      </Card.Content>
    </Card>
    )
    } 
 
  
}
  
  export default AgencyCard