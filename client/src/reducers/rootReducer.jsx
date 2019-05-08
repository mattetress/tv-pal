import userReducer from './userReducer';
import { combineReducers } from '../../../../../Library/Caches/typescript/3.4.3/node_modules/redux';

const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer;