import TimelineLine from './TimelineLine';
import React from 'react';
import PropTypes from 'prop-types'
import TimelineClickableCircle from './TimelineClickableCircle';
import {FlexColumnFullScreenView, FlexColumnView} from '../views/FlexView';
import styled from 'styled-components';

const View = styled.div`
display: flex;
flex-direction: column;

`;

function TimelineEvent(props) {
  const{event, onEventClick} = {...props};

  return (
      <View>
        <TimelineLine height={event.timelineLineHeight}/>
        <TimelineClickableCircle onClick={() => onEventClick(event)}/>
        <TimelineLine height={event.timelineLineHeight}/>
      </View>
  )
}

TimelineEvent.propTypes = {
  event: PropTypes.object,
  onEventClick: PropTypes.func
};


export default TimelineEvent;