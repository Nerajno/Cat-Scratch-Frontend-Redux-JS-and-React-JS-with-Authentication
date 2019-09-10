import React from 'react'
import { Link } from 'react-router-dom';


class CatCard extends React.Component {


  pullRandomCatImage = () => {
    let randomCat = this.props.catImages[Math.floor(Math.random() * this.props.catImages.length)];
    let image = randomCat.url
    return image
  }


  render() {
    return (


      <div class="ui card">
      <div className="ui segment image ">
        <Link to={`cat/${this.props.cat.id}`} >
        <img alt={this.props.cat.name}
            src={this.props.catImages.length > 0 ? this.pullRandomCatImage() : null} />
        </Link>
      </div>
      <div className="content">
        <a className="header">{this.props.cat.name}</a>

          <div className="description"><p>Description</p>
            {this.props.cat.description}
          </div>
          <div className="Information">
          <a href={this.props.cat.wikipedia_url}> More on the {this.props.cat.name}</a>
          </div>
          <div className="origin"><p>Origin</p>
          <a href="https://www.google.com/maps">{this.props.cat.origin}</a>

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
