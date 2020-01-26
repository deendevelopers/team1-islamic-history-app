import React, {useState} from 'react';
import {
  FlexRowFullScreenView,
} from '../views/FlexView';
import HistoricEventTimelinePoints from './HistoricEventTimelinePoints';
import HistoricEventTimelineDetails from './HistoricEventTimelineDetails';
import ScrollableView from '../views/ScrollableView';
import EventModal from '../EventModal';

function HistoricEventTimelineView(props) {
  const {events} = {...props};

  const [selectedEvent, setSelectedEvent] = useState(null)   ;

  function onEventPointClicked(event) {
    setSelectedEvent(event);
  }

  function onModalExit() {
    setSelectedEvent(null);
  }

  return (
      <FlexRowFullScreenView>
        {selectedEvent && <EventModal event={selectedEvent} onExit={onModalExit}/>}
        <ScrollableView y={true} flexDirection={"row"}>
          <HistoricEventTimelinePoints events={events} onEventClick={onEventPointClicked}/>
          {/* <HistoricEventTimelineDetails events={events}/> */}
        </ScrollableView>
      </FlexRowFullScreenView>
  );
}

export default HistoricEventTimelineView;