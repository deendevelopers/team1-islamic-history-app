import React, {useEffect, useState} from 'react';
import FactText from '../components/FactText';
import styled from 'styled-components';
import NavbarContainer from './navbar/NavbarContainer';
import FlexView from '../components/views/FlexView';
import historicEventsService from '../services/HistoricEventsService';

const FactViewWrapper = styled(FlexView)
    .attrs(
        {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'})`
flex: 1;
`;

function TimelineViewContainer(props) {
  const {timelineId} = {...props};
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    historicEventsService.getAllForTimelineId(timelineId)
        .then(data => {
          setTimeline(data);
        });
  }, [timelineId]);

  return (
      <FlexView flexDirection={'column'} height={'100%'}>
        <NavbarContainer/>
      </FlexView>
  );
}

export default TimelineViewContainer;