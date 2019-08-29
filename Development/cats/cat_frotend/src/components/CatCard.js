import React from 'react'

function CatCard(props){
  return(

    <div>
    <h1> Fur-midable Feline</h1>
    <br>
    <h2> Cat In-fur-mation By Your Given Search</h2>
      <div className="card purple-grey lighten-4">
        <div className="card-content-center-align">
        <span className="card-title">{props.cat.url}</span>
        <span className="card-title-content"> Name:</span>
        <p>{props.cat.name}</p>
        <span className ="card-title-content"> Origin:</span>
        <p>{props.cat.origin}</p>
        <br></br>
        <span className="add-to-cart"><button className="waves-effect waves light blue lighten-2 btn" onClick={(e,cat) => props.handleAdd(e, props.cat)}>Add Cat</button></span>
      <div>
    </div>
  </div>
  )
}
export default CatCard
