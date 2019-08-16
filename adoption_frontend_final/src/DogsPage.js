import React from 'react';


class DogsPage extends React.Component{

  state={
    dogs : dogs

  }


  componentDidMount = () => {
    this.getDogs()
  }

  getDogs = () => {
  fetch('http://http://localhost:8000/api/v1/dogs')
    .then(resp => resp.json())
    .then(console.log)
}



}

export default DogsPage;
