export function markDone(profile) {
  let id = profile.id
  return (dispatch) => {
      return fetch(' http://localhost:3000/api/v1/users/:id'), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          task: task
        })
      })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: 'SET_USER',
        user: res
      })
    })
}
}


export function createNewProfile(profile) {
  return (dispatch) => {
      return fetch('http:localhost:3000/api/v1/profile'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          profile: profile
        })
      })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: 'SET_USER',
        user: res
      })
    })
}
}
