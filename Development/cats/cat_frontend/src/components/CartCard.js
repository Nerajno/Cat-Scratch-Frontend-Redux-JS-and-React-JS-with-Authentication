import React from 'react'
import { Link } from 'react-router-dom';


class CartCard extends React.Component {





  render() {
    return (
      <div className="ui column">
        <div className="ui segment image ">
          <Link to={`user/${this.props.user.id}`} >
          <img alt={this.props.user.name}
              src={this.props.user.length > 0 ? this.props.image[0].image : this.props.user.image} />
          </Link>
        </div>
        <div className="content">
          <a className="header">{this.props.user.name}</a>
          <div className="cat_breed"><p>Cat Breed Chosen</p>
            {this.props.user.cat_breed}
          </div>
      
          </div>
          </div>
    )
  }



}


export default CartCard;
