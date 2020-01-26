import React from 'react';
import styled from 'styled-components';
import RcQueueAnim from 'rc-queue-anim';
import SingleHistoricEventHeader from './SingleHistoricEventHeader';
import SingleHistoricEventText from './SingleHistoricEventText';
import SingleHistoricEventScrollIndicator
  from './SingleHistoricEventScrollIndicator';
import SingleHistoricEventFooter from './SingleHistoricEventFooter';
import SingleHistoricEventLikeButton from './SingleHistoricEventLikeButton';
import PropTypes from 'prop-types';
import SingleHistoricEvent from './SingleHistoricEvent';

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
  const {event, isLiked, onNextClick, onLikeClick} = {...props};

  return (
      <FactViewWrapper>
        <FactViewInnerWrapper>
          <RcQueueAnim delay={700}>
            <SingleHistoricEvent event={event} isLiked={isLiked} onLikeClick={onLikeClick}/>
          </RcQueueAnim>
        </FactViewInnerWrapper>
        <SingleHistoricEventScrollIndicator onClick={onNextClick}/>
      </FactViewWrapper>
);
}

SingleHistoricEventQuoteView.propTypes = {
  event: PropTypes.object,
  isLiked: PropTypes.bool,
  onNextClick: PropTypes.func,
  onLikeClick: PropTypes.func,
};

export default SingleHistoricEventQuoteView;