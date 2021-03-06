import * as types from './actionTypes';

const ANON = 'Anonymous';

const INITIAL_STATE = {
  id: 1,
  name: ANON,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_CURRENT_USERNAME:
      console.log('store', types.UPDATE_CURRENT_USERNAME);
      return {
        currentUsername: action.payload,
      };
    case types.FETCH_USER_SUCCESS:
      console.log('store', types.FETCH_USER_SUCCESS);
      return {
        ...action.payload,
      };
    case types.FETCH_USER_FAILURE:
    default:
      return state;
  }
};

export default userReducer;