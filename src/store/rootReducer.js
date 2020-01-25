import { combineReducers } from 'redux'
import factReducer from './fact/reducer';
import navigationReducer from './navigation/reducer';

const rootReducer = combineReducers({
  fact: factReducer,
  navigation: navigationReducer,
});

export default rootReducer;