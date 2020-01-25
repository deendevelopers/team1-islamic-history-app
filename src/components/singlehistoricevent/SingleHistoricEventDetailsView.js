import React from 'react';
import styled from 'styled-components';
import RcQueueAnim from 'rc-queue-anim';
import SingleHistoricEventHeader from './SingleHistoricEventHeader';
import SingleHistoricEventText from './SingleHistoricEventText';
import SingleHistoricEventScrollIndicator
  from './SingleHistoricEventScrollIndicator';
import SingleHistoricEventFooter from './SingleHistoricEventFooter';

const FactViewWrapper = styled.div`
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
`;
FactViewWrapper.displayName = 'FactViewWrapper';

const FactViewInnerWrapper = styled.div`
display: flex;
flex-direction: column;
flex: auto;
justify-content: center;
height: 50%;
align-items: stretch;
`;
FactViewInnerWrapper.displayName = 'FactViewInnerWrapper';

function SingleHistoricEventDetailsView(props) {
  const {event} = {...props};

  return (
        <FactViewWrapper key={1}>
          <FactViewInnerWrapper>
          </FactViewInnerWrapper>
        </FactViewWrapper>
  );
}

export default SingleHistoricEventDetailsView;