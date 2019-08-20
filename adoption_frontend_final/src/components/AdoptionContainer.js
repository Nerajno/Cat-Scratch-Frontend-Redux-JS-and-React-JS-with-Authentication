import React from "react";
import AgencyCard from './AgencyCard'

class AdoptionContainer extends React.Component{

    // componentDidUpdate(){
    //     console.log("Healer Container component did update ran!")
   
    //   }
    //   componentDidMount(){
    //     console.log("Healer Container component did mount ran!")

      render(){
        // console.log(this);
        
    return (
         <div className="ui three column grid container">{this.props.agency.map
        (agency => <div className="five wide column"><AgencyCard Agency={agency}/> </div>)}
        </div>
        )
      }

}

export default AdoptionContainer;