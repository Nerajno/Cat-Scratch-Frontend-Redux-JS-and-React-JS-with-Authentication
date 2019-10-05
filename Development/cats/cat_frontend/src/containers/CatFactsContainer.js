import React from 'react'
import CatFactsCard  from '../components/CatFactsCard';

class CatFactsContainer extends React.Component{
  state ={
    loading: true,
    catFacts : []
  };

   componentDidMount(){
    const url = "https://brianiswu-cat-facts-v1.p.rapidapi.com/facts";
    // const response = await fetch(url);
    // const data = await response.json();
    // this.setState({cat: data.results[0], loading: false });
    fetch(url)
    .then(res => res.json())
    .then(data =>this.setState({
      catFacts: data
    }))
  }


      render(){
        return (
            <div className="ui three column grid container">
              {this.state.catFacts.map( catFact => <div className="five wide column"><CatFactsCard catFact={catFact}/> </div>)}
            </div>
        )


    }
}


export default CatFactsContainer
