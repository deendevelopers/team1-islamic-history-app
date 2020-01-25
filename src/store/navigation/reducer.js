import * as types from './actionTypes';
import {SINGLE_HISTORIC_EVENT_MAIN_VIEW} from '../../constants/navigation';

const INITIAL_STATE = {
  page: SINGLE_HISTORIC_EVENT_MAIN_VIEW,
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.NAVIGATE_TO_SINGLE_HISTORIC_EVENT_MAIN:
    case types.NAVIGATE_TO_SINGLE_HISTORIC_EVENT_DETAIL:
      return {page: action.page};
    default:
      return state;
  }
};

export default navigationReducer;