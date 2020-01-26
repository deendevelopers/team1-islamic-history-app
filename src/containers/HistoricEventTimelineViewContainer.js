import React, { useEffect, useState } from 'react';
import { FlexColumnFullScreenView } from '../components/views/FlexView';
import historicEventsService from '../services/HistoricEventsService';
import HistoricEventTimelineView from '../components/timeline/HistoricEventTimelineView';
import { groupBy } from 'lodash'

function HistoricEventTimelineViewContainer(props) {
  const { timelineId } = { ...props };
  const [timelines, setTimelines] = useState([]);

  useEffect(() => {
    historicEventsService.getAll()
      .then(historicEvents => {
        const filteredEvents = historicEvents.filter(event => [1, 2, 3].find((id) => id === event.timeline_id));
        const groupedEvents = groupBy(filteredEvents, "timeline_id")
        setTimelines(groupedEvents);
      })

  }, [timelineId]);

  return (
    <FlexColumnFullScreenView>
      <HistoricEventTimelineView timelines={timelines} />
    </FlexColumnFullScreenView>
  );
}

export default HistoricEventTimelineViewContainer;
