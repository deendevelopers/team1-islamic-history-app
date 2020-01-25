import React from 'react';
import TimelineEvent from './TimelineEvent';
import {FlexColumnFullScreenView, FlexColumnView} from '../views/FlexView';
import * as PropTypes from 'prop-types'

function HistoricEventTimelinePoints(props) {
  const {events, onEventClick} = {...props};

  const timeline = events.map(e => <TimelineEvent event={e} onEventClick={onEventClick}/>);
  return (
      <FlexColumnFullScreenView>
        { timeline }
      </FlexColumnFullScreenView>
  )
}

HistoricEventTimelinePoints.propTypes = {
  events: PropTypes.array,
  onEventClick: PropTypes.func
};

export default HistoricEventTimelinePoints;