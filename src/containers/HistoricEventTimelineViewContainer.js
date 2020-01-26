import React, { useEffect, useState } from 'react';
import FactText from '../components/FactText';
import styled from 'styled-components';
import NavbarContainer from './navbar/NavbarContainer';
import FlexView, {
  FlexColumnFullScreenView
} from '../components/views/FlexView';
import historicEventsService from '../services/HistoricEventsService';
import HistoricEventTimelineView from '../components/timeline/HistoricEventTimelineView';

const FactViewWrapper = styled(FlexView).attrs({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
})`
  flex: 1;
`;

function HistoricEventTimelineViewContainer(props) {
  const { timelineId } = { ...props };
  const [events, setEvents] = useState([]);

  useEffect(() => {
    historicEventsService.getAllForTimelineId(3).then(data => {
      const firstSpacing = 50;
      const randomisedEvents = data.map((item, index) => {
        var position;
        item.isFirst = index === 0;
        item.isLast = index === data.lenght - 1;

        if (index === 0) {
          position = firstSpacing;
        } else {
          const prevYear = data[index - 1].dateObj.getFullYear();
          const curYear = item.dateObj.getFullYear();
          position = (curYear - prevYear) * 5;
        }
        item.eventPosition = position;
        return item;
      });
      setEvents(randomisedEvents);
    });
  }, [timelineId]);

  return (
    <FlexColumnFullScreenView>
      <HistoricEventTimelineView events={events} />
    </FlexColumnFullScreenView>
  );
}

export default HistoricEventTimelineViewContainer;
