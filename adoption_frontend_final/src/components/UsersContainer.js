import React from "react";
import UserCard from './UserCard'

class UserContainer extends React.Component{

    // componentDidUpdate(){
    //     console.log("Healer Container component did update ran!")
   
    //   }
    //   componentDidMount(){
    //     console.log("Healer Container component did mount ran!")

      render(){
        // console.log(this);
        
    return (
         <div className="ui three column grid container">{this.props.users.map
        (user => <div className="five wide column"><UserCard User={user}/> </div>)}
        </div>
        )
      }

}

export default UserContainer;