import React from "react";
// import ReactDOM from "react-dom";
import searchBar from "./SearchBar"
import DogContainer from "./DogContainer"
import DogCard from "./DogCard"


class MainContainer extends React.Component{

    constructor() {
        super()
        this.state = {
            dogs: []
          }
      }
    
    componentDidMount(){
    fetch("http://localhost:3000/api/v1/dogs", {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
    .then(res => res.json())
    .then(data => this.setState({dogs:data}))
    }
     
      render(){
        return (
            <div className="ui three column grid container">  {this.state.dogs.map
            (dog => <div className="five wide column"><DogCard Dog={dog}/> </div>)}
            </div>
        )
      }

}

export default MainContainer;


