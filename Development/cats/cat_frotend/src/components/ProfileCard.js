import React from 'react';

function ProfileCard(props){
  return(
    <div>
    
      <div className="card red lighten-4">
        <div className= "card-content">
          <span className="card-title"{props.profile.name}</span>
          <span className="card-title-content">Spirit Animal:</span>
          <p>{props.profile.spirit_animal}</p>
          <span className="card-title-content"> Location: </span>
          <p>{props.profile.location}</p>
          <span className="card-title-content"></span>
          <p>{props.profile.img_url}<p>
        <div>
      <div>
    </div>
  )
}
export default ProfileCard
