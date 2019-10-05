import React, { Component } from 'react';
import { connect } from 'react-redux';
import CatCard from '../components/CatCard';

let catArray
class CatContainer extends Component {

  render(){
    catArray = this.props.allC.map((cat) => <div className="col s6"><CatCard key={cat.id} cat={cat} handleCancel= {this.props.handleCancel})/></div>

    return(
      <div className= "overview row">
      {this.renderCats()}
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
