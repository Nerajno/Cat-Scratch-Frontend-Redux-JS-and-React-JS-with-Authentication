import React from 'react'
//import ReactDom from 'react-dom';
import { Card, Icon ,Image } from 'semantic-ui-react'
//import SearchBar from './SearchBar'


class UserCard extends React.Component {

  
  render() {
    console.log(this.props.user);
    return (
    <Card>
      <Image src={this.props.user.img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{this.props.user.name}</Card.Header>
        <Card.Meta>
          <span className='age'>{this.props.user.age} years old</span>
        </Card.Meta>
        <p>
        
        </p>
      </Card.Content>
      <Card.Content extra>
        <a>
        <Icon name='home' />
       
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
  
  export default UserCard