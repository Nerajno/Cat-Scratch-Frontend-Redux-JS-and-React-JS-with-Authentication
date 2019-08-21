import React from 'react'
//import ReactDom from 'react-dom';
import { Card, Icon ,Image } from 'semantic-ui-react'
//import SearchBar from './SearchBar'


class AgencyCard extends React.Component {

  render() {
    console.log(this.props.adoption.img);
    return (
    <Card>
      <Image src={this.props.adoption.img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{this.props.adoption.name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <a>
          {this.props.adoption.dogs_available}
        </a>
        <br/>
        <a>
        </a>
      </Card.Content>
    </Card>
    )
    } 
 
  
}
  
  export default AgencyCard