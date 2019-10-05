const intitialState ={
  loogedIn: !!localStorage.token,
  errors: {},
  allUsers: []
}
export default(state = intitialState, action) => {
  switch(action.type){
    case 'ERRORS':
      return{...state, errors: {[action.errType]: action.errors} }
    case 'LOG_IN':{
      localStorage.setItem('token', action.token)
      return {...state, loggedIn: true} }
    case 'SET_USER': {
      return{...action.user}
    }
    case 'LOG_OUT':{
      localStorage.removeItem('token')
      return{...state,allUsersL: action.users}
    }
    default:
      return state
    }
}
