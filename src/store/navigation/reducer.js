import * as types from './actionTypes';
import {FACT_VIEW, SPLASH_SCREEN} from '../../constants/navigation';

const INITIAL_STATE = {
  page: FACT_VIEW,
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.NAVIGATE_T0_LOGIN_SCREEN:
    case types.NAVIGATE_T0_APP_SCREEN:
    case types.NAVIGATE_T0_ACCOUNT_VIEW:
    case types.NAVIGATE_T0_LIKES_VIEW:
    case types.NAVIGATE_T0_CARD_VIEW:
    case types.NAVIGATE_T0_VIRO_VIEW:
      return {page: action.page};
    default:
      return state;
  }
};

export default navigationReducer;