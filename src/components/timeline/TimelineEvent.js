import TimelineLine from './TimelineLine';
import React from 'react';
import TimelineClickableCircle from './TimelineClickableCircle';
import {FlexColumnFullScreenView, FlexColumnView} from '../views/FlexView';

function TimelineEvent(props) {
  const{event} = {...props}

  return (
      <FlexColumnFullScreenView>
        <TimelineLine/>
        <TimelineClickableCircle/>
        <TimelineLine/>
      </FlexColumnFullScreenView>
  )
}

export default TimelineEvent;