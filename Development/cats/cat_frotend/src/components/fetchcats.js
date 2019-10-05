// need to add in all imports
import React from 'react';

function fetchCats(){
  return dispatch => {
  dispatch(fetchCats());
  fetch('https://api.thecatapi.com/v1/images/search?breed_id=java')
  .then(res => res.json())
  .then(res =>{
    if(res.error) {
      throw(res.error);
    }
  dispatch(res.cats);
  return res.cats;
  })
  .catch(error =>{
    dispatch(fetchCatsError(error));
  })
  }
}
export default fetchCats;
