import React from "react";
import AgencyCard from './AgencyCard'

class AdoptionContainer extends React.Component{

  state ={
    adoptions: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/adoptions", {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
    .then(res => res.json())
    .then(data => this.setState({adoptions:data}))
    }

  
      render(){
        //console.log(this.state.users);
        
    return (
       <div className="ui three column grid container">{this.state.adoptions.map
      (adoption => <div className="five wide column"><AgencyCard adoption={adoption} key={adoption.Id} /> </div>)}
       </div>
        )
      }

}
export default AdoptionContainer;