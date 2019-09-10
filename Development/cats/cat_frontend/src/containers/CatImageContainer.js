import React from 'react'
import CatCard  from '../components/CatCard';

class CatContainer extends React.Component{
  state ={
    loading: true,
    cats : []
  };

   componentDidMount(){
    const url = "https://api.thecatapi.com/v1/images/search?limit=10";
    // const response = await fetch(url);
    // const data = await response.json();
    // this.setState({cat: data.results[0], loading: false });
    fetch(url)
    .then(res => res.json())
    .then(cats =>this.setState({
      cats: cats
    }))
  }


      render(){
        return (
            <div className="ui three column grid container">
              {this.state.cats.map( cat => <div className="five wide column"><CatCard cat={cat}/> </div>)}
            </div>
        )
      }

    }



export default CatContainer;
