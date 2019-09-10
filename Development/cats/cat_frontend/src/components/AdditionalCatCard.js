import React from 'react'
import { Link } from 'react-router-dom';


class AdditionalCatCard extends React.Component {


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
          <div className="origin"><p>Origin</p>
          {this.props.cat.origin}
          </div>
          <div className="life_span"><p>Life span</p>
          {this.props.cat.life_span}
          </div>

          <div className="temperament"><p>Temperament</p>
          {this.props.cat.temperament}
          </div>
          <div className="wikipedia_url"><p>Wikipedia</p>
          {this.props.cat.wikipedia_url}
          </div>
          <div className="adaptability"><p>Adaptability Score</p>
          {this.props.cat.adaptability}
          </div>
          <div className="intelligence"><p>Intelligence Score</p>
          {this.props.cat.life_span}
          </div>
          <div className="hairless"><p>Hairless Score</p>
          {this.props.cat.hairless}
          </div>
          <div className="rare"><p>Rare Score</p>
          {this.props.cat.life_span}
          </div>
          <div className="vocalisation"><p>Vocalisation Score</p>
          {this.props.cat.vocalisation}
          </div>
          <div className="suppressed_tail"><p>Supperessed Tail Score</p>
          {this.props.cat.suppressed_tails}
          </div><div className="indoor"><p> Indoor Score</p>
          {this.props.cat.indoor}
          </div>
          <div className="affection_level"><p>Affection Level Score</p>
          {this.props.cat.affection_level}
          </div>
          <div className="child_friendly"><p>Child Friendly Score</p>
          {this.props.cat.child_friendly}
          </div>
          <div className="dog_friendly"><p>Dog Friendly Score</p>
          {this.props.cat.dog_friendly}
          </div>
          <div className="energy_level"><p>Energy Level Score</p>
          {this.props.cat.energy_level}
          </div>
          <div className="grooming"><p>Grooming Score</p>
          {this.props.cat.grooming}
          </div>
          <div className="health_issues"><p>Health Issues Score</p>
          {this.props.cat.health_issues}
          </div>
          <div className="shedding_level"><p>Shedding level Score</p>
          {this.props.cat.shedding_level}
          </div>
          <div className="social_needs"><p>Social Needs Score</p>
          {this.props.cat.social_needs}
          </div>
          <div className="stranger_friendly"><p>Stranger Friendly Score</p>
          {this.props.cat.stranger_friendly}
          </div>
          <div className="experimental"><p>Experimental Score</p>
          {this.props.cat.experimental}
          </div>
          <div className="natural"><p>Natural Score</p>
          {this.props.cat.natural}
          </div>
      </div>
      </div>

    )
  }



}


export default AdditionalCatCard;
