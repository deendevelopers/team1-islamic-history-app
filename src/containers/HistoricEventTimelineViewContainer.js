import React, {useEffect, useState} from 'react';
import FactText from '../components/FactText';
import styled from 'styled-components';
import NavbarContainer from './navbar/NavbarContainer';
import FlexView, {FlexColumnFullScreenView} from '../components/views/FlexView';
import historicEventsService from '../services/HistoricEventsService';
import HistoricEventTimelineView
  from '../components/timeline/HistoricEventTimelineView';

const FactViewWrapper = styled(FlexView)
    .attrs(
        {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'})`
flex: 1;
`;

function HistoricEventTimelineViewContainer(props) {
  const {timelineId} = {...props};
  const [events, setEvents] = useState([]);

  useEffect(() => {
    historicEventsService.getAllForTimelineId(3)
        .then(data => {
          const randomisedEvents = data.map(e => {
            e.timelineLineHeight = Math.round(Math.random()*100);
            return e;
          });
          setEvents(randomisedEvents);
        });
  }, [timelineId]);

  return (
      <FlexColumnFullScreenView>
        <HistoricEventTimelineView events={events}/>
      </FlexColumnFullScreenView>
  );
}

export default HistoricEventTimelineViewContainer;