import React from "react";
// import ReactDOM from "react-dom";
import Header from "./Header"
import DogContainer from "./DogContainer"
import UserContainer from "./UserContainer"
import AdoptionContainer from "./AdoptionContainer"


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

    // componentDidMount(){
    //   fetch("http://localhost:3000/api/v1/users", {
    //       headers : { 
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //        }
    //     })
    //   .then(res => res.json())
    //   .then(data => this.setState({users:data}))
    //   }
     

      render(){
        //console.log(this.state);
        return (
            // <SearchBar />
            // <PersonalInfo />,
            <Header  />,
            <DogContainer dogs={this.state.dogs} />,
            < UserContainer />
            // < AdoptionContainer />
            // <div className="ui three column grid container">  {this.state.dogs.map
            // (dog => <div className="five wide column"><DogCard Dog={dog}/> </div>)}
            // </div>
        )
      }

}

export default MainContainer;


