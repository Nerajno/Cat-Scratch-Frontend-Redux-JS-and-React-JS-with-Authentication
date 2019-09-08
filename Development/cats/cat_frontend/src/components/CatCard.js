import React from 'react'
import { Link } from 'react-router-dom';


class CatCard extends React.Component {





  render() {
    return (
      <div className="ui column">
        <div className="ui segment image ">
          <Link to={`cat/${this.props.cat.id}`} >
          <img alt={this.props.cat.name}
              src={this.props.cat.length > 0 ? this.props.cat[0].url : this.props.cat.url} />
          </Link>
        </div>
        <div className="content">
          <a className="header">{this.props.cat.name}</a>
          <div className="description"><p>Description</p>
            {this.props.cat.description}
          </div>
          <div className="origin"><p>Origin</p>
          {this.props.cat.origin}
          </div>
          <div className="life_span"><p>Life span</p>
          {this.props.cat.life_span}
          </div>
        </div>

      </div>
    )
  }



}


export default CatCard;
