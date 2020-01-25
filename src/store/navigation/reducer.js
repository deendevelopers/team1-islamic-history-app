import * as types from './actionTypes';
import {
  SINGLE_HISTORIC_EVENT_MAIN_VIEW,
  TIMELINE_HISTORIC_EVENTS_VIEW,
} from '../../constants/navigation';

const INITIAL_STATE = {
  page: SINGLE_HISTORIC_EVENT_MAIN_VIEW,
  // page: TIMELINE_HISTORIC_EVENTS_VIEW,
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.NAVIGATE_TO_SINGLE_HISTORIC_EVENT_MAIN:
    case types.NAVIGATE_TO_SINGLE_HISTORIC_EVENT_DETAIL:
    case types.NAVIGATE_TO_TIMELINE_HISTORIC_EVENTS:
      return {page: action.page};
    default:
      return state;
  }
};

export default navigationReducer;