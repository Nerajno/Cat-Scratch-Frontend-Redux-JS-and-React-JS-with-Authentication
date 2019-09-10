import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NewUserForm extends React.Component{

    constructor(){
        super()
        this.state={
            name: "",
            spirit_animal: "",
            img_url: "",

        }
    }

    handleInput=(e)=>{
        this.setState({ [e.target.name]: e.target.value }, ()=> console.log("state", this.state))
    }

    render(){
        return(

            <div>

                <form className="ui two column grid form">
                <h1> Add a New User! </h1>
                <div className="field">
                    <label>Name</label>
                    <input onChange = {this.handleInput}  type="text" name="name" placeholder={this.state.name}/>
                </div>
                <div className="field">
                    <label>Spirit Animal</label>
                    <input onChange = {this.handleInput} type="text" name="spirit_animal" placeholder={this.state.spirit_animal}/>
                </div>
                <div className="field">
                    <div className="field">
                    <label> Add Image</label>

                    <input onChange = {this.handleInput} type="text" name="img_url" placeholder={this.state.img_url}/>
                    </div>
                </div>
                <button onClick={     (e)=> { this.props.addNewUser(this.state) }    }   className="ui small button" type="submit">Submit</button>
                </form>
                <ul>
                  <li><Link to="/">Home</Link></li>
                </ul>
            </div>



        )

    }


}

export default NewUserForm;
