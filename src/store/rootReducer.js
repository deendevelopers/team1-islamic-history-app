import { combineReducers } from 'redux'
import factReducer from './fact/reducer';
import navigationReducer from './navigation/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  fact: factReducer,
  navigation: navigationReducer,
  user: userReducer,
});

export default rootReducer;