import React from 'react';
import TimelineEvent from './TimelineEvent';
import * as PropTypes from 'prop-types'
import styled from 'styled-components';

const View = styled.div`
display: flex;
flex-direction: column;
width: 30%;
`;

function HistoricEventTimelinePoints(props) {
  const { events, onEventClick } = { ...props };
  const timeline = events.map(e => <TimelineEvent event={e} onEventClick={onEventClick} />);
  return (
    <View>
      {timeline}
    </View>
  )
}

HistoricEventTimelinePoints.propTypes = {
  events: PropTypes.array,
  onEventClick: PropTypes.func
};

export default HistoricEventTimelinePoints;
