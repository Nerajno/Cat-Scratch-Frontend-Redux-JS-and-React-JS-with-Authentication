import React from 'react'
import { Link } from 'react-router-dom';


class UserCard extends React.Component {





  render() {
    return (
      <div className="ui column">
        <div className="ui segment image ">
          <Link to={`user/${this.props.user.id}`} >
          <img alt={this.props.user.name}
              src={this.props.user.length > 0 ? this.props.user[0].img_url : this.props.user.img_url} />
          </Link>
        </div>
        <div className="content">
          <a className="header">{this.props.user.name}</a>
          <div className="description"><p>Spirit Animal</p>
            {this.props.user.spirit_animal}
          </div>
          <div className="location"><p>Location</p>
          {this.props.user.location}
          </div>
          
          </div>
          </div>
    )
  }



}


export default UserCard;
