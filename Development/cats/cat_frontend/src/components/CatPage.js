import React from 'react'
import CatCard  from '../components/CatCard';

class CatContainer extends React.Component{
  state ={
    loading: true,
    cats : [],
    catImages: []
  };

   componentDidMount(){
    const url = "https://api.thecatapi.com/v1/breeds";
    const url2 = "https://api.thecatapi.com/v1/images/search?limit=66";
    // const response = await fetch(url);
    // const data = await response.json();
    // this.setState({cat: data.results[0], loading: false });
    fetch(url)
    .then(res => res.json())
    .then(cats =>this.setState({
      cats: cats
    }))

    fetch(url2)
    .then(res => res.json())
    .then(data => this.setState({
      catImages: data
    }))

  }


      render(){
        return (
            <div className="ui three column grid container">
              {this.state.cats.map( cat => <div className="five wide column"><CatCard catImages={this.state.catImages} cat={cat}/> </div>)}
            </div>
        )
      }

    }

    




export default CatContainer;
