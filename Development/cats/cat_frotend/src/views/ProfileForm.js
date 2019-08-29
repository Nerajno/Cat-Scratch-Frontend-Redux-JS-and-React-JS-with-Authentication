import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Calender from 'react-calendar';
import { createNewT } from ='../actions/task_actions';

class ProfileForm extends Component {
  state ={
    name : null,
    location : null
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let form = e.target
    let newProfile = {
      name: form.name.value,
      location: form.location.value,
      spirit_animal: this.state.spirit_animal,
      complete:false
      user_id: this.props.user.id
  }
    this.props.addProfile(newProfile)
    this.setState({ redirect: <Redirect to='/dashboard'/>})
}
  render(){
    if (this.state.redirect)
      return this.state.redirect
    return(
      <div>
        <form className="ui-form" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s5">
              <div className="field">
                <input required name= 'name' type= 'text' placeholder='Name'/>
              </div>

              <div className="materialize-textarea">
                <input required name='location' placeholder='Location'/>
              </div>
          <Calender minDate={new Date()} onChange={e => this.setState({date: e})}/>
          <button type='submit' className='waves-effect waves-light red lighten-1 btn'>Submit</button>
        </div>
        </div>
      </form>

    </div>
    )
  }
}

const mapStateToProps = state => ({if user: state.user})

const mapDispatchToProps = dispatch => {
  return{
    addProfile:(profile) => dispatch(createNewT(profile))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProfileForm)
