import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import NavbarContainer from './navbar/NavbarContainer';
import FlexView from '../components/views/FlexView';
import historicEventsService from '../services/HistoricEventsService';
import SingleHistoricEventText
  from '../components/singlehistoricevent/SingleHistoricEventText';
import SingleHistoricEventHeader
  from '../components/singlehistoricevent/SingleHistoricEventHeader';
import RcQueueAnim from 'rc-queue-anim';

const FactViewWrapper = styled.div`
display: flex;
flex-direction: row;
flex: auto;
align-items: center;
`;

const FactViewInnerWrapper = styled.div`
display: flex;
flex-direction: row;
flex: auto;
justify-content: center;
height: 50%;
align-items: stretch;
`;

function SingleHistoricEventViewContainer() {
  const [event, setEvent] = useState('');

  useEffect(() => {
    historicEventsService.getOne(1)
        .then(data => setEvent(data));
  }, []);

  console.log(event);

  return (
      <FlexView flexDirection={'column'} height={'100%'}>
        {/*<NavbarContainer/>*/}
        <FactViewWrapper>
          <FactViewInnerWrapper>
            <RcQueueAnim delay={700}>
              <SingleHistoricEventHeader text={event.date} key={1}/>
              <SingleHistoricEventText text={event.description} key={1}/>
              <SingleHistoricEventHeader text={'-- ' + event.subject + ' --'}
                                         key={2}/>
            </RcQueueAnim>
          </FactViewInnerWrapper>
        </FactViewWrapper>
      </FlexView>
  );
}

export default SingleHistoricEventViewContainer;