import * as type from "./actionTypes";
import * as view from '../../constants/navigation';

export const navigateToSingleHistoricEventMain = () => ({
  type: type.NAVIGATE_TO_SINGLE_HISTORIC_EVENT_MAIN,
  page: view.SINGLE_HISTORIC_EVENT_MAIN_VIEW,
});

export const navigateToSingleHistoricEventDetail = () => ({
  type: type.NAVIGATE_TO_SINGLE_HISTORIC_EVENT_DETAIL,
  page: view.SINGLE_HISTORIC_EVENT_DETAIL_VIEW,
});


export const navigateToTimelineEvents = () => ({
  type: type.NAVIGATE_TO_SINGLE_HISTORIC_EVENT_DETAIL,
  page: view.TIMELINE_HISTORIC_EVENTS_VIEW,
});
