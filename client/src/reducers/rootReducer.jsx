import userReducer from './userReducer';
import showReducer from './showReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
  shows: showReducer
})

export default rootReducer;
