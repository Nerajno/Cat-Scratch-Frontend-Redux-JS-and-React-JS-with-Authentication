import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfieCard from '../components/ProfileCard';

let profileArray
class ProfileContainer extends Component {

  render(){
    profileArray = this.props.allP.map((profile) => <div className="col s6"><ProfileCard key={profile.id} profile={profile} handleComplete={this.props.handleComplete}/></div>)

    return className="overview row">
    {
      this.props.allP.length <1 ?
      <div> Click 'CREATE PROFILE' to get started.</div>
      :
      <div> {profileArray} </div>
    }
      </div>
    );
  }
};
const mapStateToProps = state => {
  return {
    profiles: state.profiles
  }
}
export default connect(mapStateToProps) (ProfileContainer);
