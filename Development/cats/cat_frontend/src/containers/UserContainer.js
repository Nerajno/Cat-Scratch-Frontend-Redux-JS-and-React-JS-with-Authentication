import React from 'react'
import UserCard  from '../components/UserCard';

class UserContainer extends React.Component{
  state ={
    loading: true,
    users : []
  };

   componentDidMount(){
    const url = "http://localhost:3000/api/v1/users";
    // const response = await fetch(url);
    // const data = await response.json();
    // this.setState({cat: data.results[0], loading: false });
    fetch(url)
    .then(res => res.json())
    .then(users =>this.setState({
      users: users
    }))
  }


      render(){
        return (
            <div className="ui three column grid container">
              {this.state.users.map( user => <div className="five wide column"><UserCard user={user}/> </div>)}
            </div>
        )
      }

    }



export default UserContainer;
