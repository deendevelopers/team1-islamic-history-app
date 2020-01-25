import React from 'react';
import {
  FlexColumnFullScreenView,
  FlexRowFullScreenView,
} from '../views/FlexView';
import HistoricEventTimelinePoints from './HistoricEventTimelinePoints';
import HistoricEventTimelineDetails from './HistoricEventTimelineDetails';
import ScrollableView from '../views/ScrollableView';

function HistoricEventTimelineView(props) {
  const {events} = {...props};

  return (
      <FlexRowFullScreenView>
        <ScrollableView y={true} flexDirection={"row"}>
          <HistoricEventTimelinePoints events={events}/>
          <HistoricEventTimelineDetails events={events}/>
        </ScrollableView>
      </FlexRowFullScreenView>
  );
}

export default HistoricEventTimelineView;