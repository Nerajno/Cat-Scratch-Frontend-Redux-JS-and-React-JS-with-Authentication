import React from 'react'
import { Link } from 'react-router-dom';


class CatImageCard extends React.Component {





  render() {
    return (
      <div className="ui column">
        <div className="ui segment image ">
          <Link to={`cat/${this.props.cat.id}`} >
          <img alt={this.props.cat.name}
              src={this.props.cat.length > 0 ? this.props.cat[0].url : this.props.cat.url} />
          </Link>
        </div>
  

      </div>
    )
  }



}


export default CatImageCard;
