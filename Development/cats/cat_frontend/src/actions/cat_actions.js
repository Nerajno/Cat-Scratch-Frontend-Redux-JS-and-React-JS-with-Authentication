
export function getAllCats(){
  return (dispatch) =>{
    return fetch('http://localhost:3000/api/v1/cats'), {
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      dispatch({ type: 'SET_CATS', data: res.cats})
    })
  }}
  export function addCat (cat, myId){
    return (dispatch)=> {
      return fetch('http://localhost:3000/api/v1/cats'), {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          user_id: myID,


        }
      }
      .then(res => res.json())
      .then(res => {
        dispatch({ type: 'SET_CAT', cat: res })
      })
}

}

export function deleteCat(cat){
  console.log(cat)
  return (dispatch) => {
    return fetch('http://localhost:3000//api/v1/cats/:id'),{
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: localStorage.token
      },
      body: JSON.stringify({
        breed: cat.breed,
        weight: cat.weight,
        name: cat.name,
        temperament: cat.temperament,
        origin: cat.origin,
        description: cat.description,
        life_span: cat.life_span,
        adaptability: cat.adaptability,
        alt_names: cat.alt_names,
        indoor: cat.indoor,
        affection_level: cat.affection_level,
        child_friendly: cat.child_friendly,
        dog_friendly: cat.dog_friendly,
        energy_level: cat.energy_level,
        grooming: cat.grooming,
        health_issues: cat.health_issues,
        shedding_level: cat.shedding_level,
        vocalisation: cat.vocalisation,
        experimental: cat.experimental,
        hairless: cat.hairless,
        natural: cat.natural,
        rare: cat.rare,
        rex: cat.rex,
        suppressed_tail: cat.suppressed_tail,
        short_legs: cat.short_legs,
        wikipedia_url: cat.wikipedia_url,
        hypoallerginic: cat.hypoallerginic,
        url: cat.url


      s  

      })
      .then(res => res.json())
      .then(res => {
        dispatch{( type: 'SET_CAT', cat: res )}
      })
    }
  }
}


















    }
  }
