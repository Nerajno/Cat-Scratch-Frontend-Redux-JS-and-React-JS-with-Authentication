import React from "react";
import {Button} from 'semantic-ui-react';

class Main extends React.Component {

handleClick = () => {
    console.log("button clicked"); 
}

   render() {
       return (
            
       <div className='ui container black background container-info' >
       <h1 style={{'textAlign': 'center'}}>
           Welcome to FurrEver Purfect
       </h1>
       <img className=" ui image fluid"
           src={'https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80(96 kB)'} alt='cute puppies' />
        <br/>
       <Button onClick={this.handleClick} >Click Here</Button>
   </div>
       );
   }
}

export default Main;