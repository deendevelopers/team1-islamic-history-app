import TimelineLine from './TimelineLine';
import React from 'react';
import PropTypes from 'prop-types'
import TimelineClickableCircle from './TimelineClickableCircle';
import {FlexColumnFullScreenView, FlexColumnView} from '../views/FlexView';

function TimelineEvent(props) {
  const{event, onEventClick} = {...props}

  return (
      <FlexColumnFullScreenView>
        <TimelineLine/>
        <TimelineClickableCircle onClick={() => onEventClick(event)}/>
        <TimelineLine/>
      </FlexColumnFullScreenView>
  )
}

TimelineEvent.propTypes = {
  event: PropTypes.object,
  onEventClick: PropTypes.func
};


export default TimelineEvent;