import React, { useState } from 'react';
import {
  FlexRowFullScreenView,
} from '../views/FlexView';
import HistoricEventTimelinePoints from './HistoricEventTimelinePoints';
import ScrollableView from '../views/ScrollableView';
import EventModal from '../EventModal';
import { map } from 'lodash';

function HistoricEventTimelineView(props) {
  const { timelines } = { ...props };

  const [selectedEvent, setSelectedEvent] = useState(null);

  function onEventPointClicked(event) {
    setSelectedEvent(event);
  }

  function onModalExit() {
    setSelectedEvent(null);
  }

  const computeSpacing = (data) => {
    const firstSpacing = 50;
    const randomisedEvents = data.map((item, index) => {
      var position;
      item.isFirst = index === 0;
      item.isLast = index === data.lenght - 1;

      if (index === 0) {
        position = firstSpacing;
      } else {
        const prevYear = new Date(data[index - 1].date).getFullYear();
        const curYear = new Date(item.date).getFullYear();
        position = (curYear - prevYear) * 5;
      }
      item.eventPosition = position;
      return item;
    });
    return randomisedEvents;
  }

  const timelinePointComponents = map(timelines, timeline => <HistoricEventTimelinePoints events={computeSpacing(timeline)} onEventClick={onEventPointClicked} />);

  return (
    <FlexRowFullScreenView>
      {selectedEvent && <EventModal event={selectedEvent} onExit={onModalExit} />}
      <ScrollableView y={true} flexDirection={"row"}>
        {timelinePointComponents}
      </ScrollableView>
    </FlexRowFullScreenView>
  );
}

export default HistoricEventTimelineView;
