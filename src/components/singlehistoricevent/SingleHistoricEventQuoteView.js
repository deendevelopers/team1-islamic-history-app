import React from 'react';
import styled from 'styled-components';
import { FlexColumnFullWidthView } from '../views/FlexView';
import { FACT_COLOR } from '../../constants/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import TweenOne from 'rc-tween-one';
import RcQueueAnim from 'rc-queue-anim';
import SingleHistoricEventHeader from './SingleHistoricEventHeader';
import SingleHistoricEventText from './SingleHistoricEventText';
import SingleHistoricEventScrollIndicator from './SingleHistoricEventScrollIndicator';
import SingleHistoricEventFooter from './SingleHistoricEventFooter';

const FactViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;
FactViewWrapper.displayName = 'FactViewWrapper';

const FactViewInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 50%;
  align-items: center;
`;
FactViewInnerWrapper.displayName = 'FactViewInnerWrapper';

function SingleHistoricEventQuoteView(props) {
  const { event, onNextClick } = { ...props };

  return (
    <FactViewWrapper>
      <FactViewInnerWrapper>
        <RcQueueAnim delay={700}>
          <SingleHistoricEventHeader text={event.date} key={1} />
          <SingleHistoricEventText text={event.description} key={2} />
          <SingleHistoricEventFooter text={'– ' + event.subject} key={3} />
        </RcQueueAnim>
      </FactViewInnerWrapper>
      <SingleHistoricEventScrollIndicator onClick={onNextClick} />
    </FactViewWrapper>
  );
}

export default SingleHistoricEventQuoteView;
