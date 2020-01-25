import React from 'react';
import TimelineEvent from './TimelineEvent';
import {FlexColumnFullScreenView, FlexColumnView} from '../views/FlexView';

function HistoricEventTimelinePoints(props) {
  const {events} = {...props};

  const timeline = events.map(e => <TimelineEvent event={e}/>);
  return (
      <FlexColumnFullScreenView>
        { timeline }
      </FlexColumnFullScreenView>
  )
}

export default HistoricEventTimelinePoints;