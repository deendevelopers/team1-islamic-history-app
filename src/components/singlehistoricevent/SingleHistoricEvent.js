import React from 'react';
import styled from 'styled-components';
import SingleHistoricEventHeader from './SingleHistoricEventHeader';
import SingleHistoricEventText from './SingleHistoricEventText';
import SingleHistoricEventFooter from './SingleHistoricEventFooter';
import SingleHistoricEventLikeButton from './SingleHistoricEventLikeButton';
import PropTypes from 'prop-types';

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

function SingleHistoricEvent(props) {
  const {event, onLikeClick} = {...props};

  return (
          <React.Fragment>
              <SingleHistoricEventHeader text={event.date} key={1}/>
              <SingleHistoricEventText text={event.description} key={2}/>
              <SingleHistoricEventFooter text={'-- ' + event.subject + ' --'} key={3}/>
              <SingleHistoricEventLikeButton onClick={onLikeClick}/>
          </React.Fragment>
);
}

SingleHistoricEvent.propTypes = {
  event: PropTypes.object,
  onLikeClick: PropTypes.func,
};

export default SingleHistoricEvent;