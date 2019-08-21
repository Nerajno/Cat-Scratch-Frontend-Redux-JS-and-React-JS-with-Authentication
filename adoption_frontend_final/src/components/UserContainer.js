import React from "react";
import UserCard from './UserCard'

class UserContainer extends React.Component{

  state ={
    users: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/users", {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
    .then(res => res.json())
    .then(data => this.setState({users:data}))
    }

  
      render(){
        //console.log(this.state.users);
        
    return (
       <div className="ui three column grid container">{this.state.users.map
      (user => <div className="five wide column"><UserCard user={user} key={user.Id} /> </div>)}
       </div>
        )
      }

}

export default UserContainer;