const intitialState ={
    data: []
}

export default(state =intitialState, action) => {
  switch(action.type){

    case 'SET_CAT':
      return {...state,data:action.data}
    default:
      return state
  }
}
