import React from "react";
import DogCard from './DogCard'

class DogContainer extends React.Component{

    // componentDidUpdate(){
    //     console.log("Healer Container component did update ran!")
   
    //   }
    //   componentDidMount(){
    //     console.log("Healer Container component did mount ran!")

      render(){
        // console.log(this);
        
    return (
         <div className="ui three column grid container">{this.props.dogs.map
        (dog => <div className="five wide column"><DogCard Dog={dog}/> </div>)}
        </div>
        )
      }

}

export default DogContainer;