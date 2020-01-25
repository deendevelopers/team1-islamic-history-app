import React from 'react';
import styled from 'styled-components';
import {FlexColumnFullWidthView} from '../views/FlexView';
import {FACT_COLOR} from '../../constants/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSortDown} from '@fortawesome/free-solid-svg-icons';
import TweenOne from 'rc-tween-one';
import RcQueueAnim from 'rc-queue-anim';
import SingleHistoricEventHeader from './SingleHistoricEventHeader';
import SingleHistoricEventText from './SingleHistoricEventText';
import SingleHistoricEventScrollIndicator
  from './SingleHistoricEventScrollIndicator';

const FactViewWrapper = styled.div`
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
`;
FactViewWrapper.displayName = "FactViewWrapper";

const FactViewInnerWrapper = styled.div`
display: flex;
flex-direction: column;
flex: auto;
justify-content: center;
height: 50%;
align-items: stretch;
`;
FactViewInnerWrapper.displayName = "FactViewInnerWrapper";

function SingleHistoricEventQuoteView(props) {
  const {event} = {...props};

  return (
      <FactViewWrapper>
        <FactViewInnerWrapper>
          <RcQueueAnim delay={700}>
            <SingleHistoricEventHeader text={event.date} key={1}/>
            <SingleHistoricEventText text={event.description} key={1}/>
            <SingleHistoricEventHeader text={'-- ' + event.subject + ' --'}
                                       key={2}/>
          </RcQueueAnim>
        </FactViewInnerWrapper>
        <SingleHistoricEventScrollIndicator/>
      </FactViewWrapper>
  );
}

export default SingleHistoricEventQuoteView;