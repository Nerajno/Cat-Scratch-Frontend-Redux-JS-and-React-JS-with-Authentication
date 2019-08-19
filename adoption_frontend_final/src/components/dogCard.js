import React from 'react'
import ReactDom from 'react-dom';
import { Card, Icon, Image } from 'semantic-ui-react'


class DogCard extends React.Component {

  render() {
    console.log(this);
    
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
          {this.props.Dog.location}
        </a>
      </Card.Content>
    </Card>
    )
    } 
 
  
}
  
  export default DogCard