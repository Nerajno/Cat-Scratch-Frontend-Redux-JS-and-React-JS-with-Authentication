import { combineReducers } from 'redux';
import userReducer from './user';
// import profileReducer from './profile';
import catReducer from './cat';

export default combineReducers({
    user: userReducer,
    // profile: profileReducer,
    cat: catReducer
})
