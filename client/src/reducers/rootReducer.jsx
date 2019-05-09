import userReducer from './userReducer';
import showReducer from './showReducer';
import { combineReducers } from '../../../../../Library/Caches/typescript/3.4.3/node_modules/redux';

const rootReducer = combineReducers({
  user: userReducer,
  shows: showReducer
})

export default rootReducer;