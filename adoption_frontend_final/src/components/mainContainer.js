import React from "react";
import ReactDOM from "react-dom";
import searchBar from "./searchBar"
import dogContainer from "./dogContainer"

class mainContainer extends React.Component{

    componentDidUpdate(){
        console.log("Healer Container component did update ran!")
    
      }

      componentDidMount(){
        console.log("Healer Container component did mount ran!")

      }

      render(){
        return (
            <div className="ui three column grid container">  {this.props.dogs.map(dog=> <div className="five wide column"><DogCard Dog={dog}/> </div>)}
            </div>
        )
      }

    }



export default mainContainer;


