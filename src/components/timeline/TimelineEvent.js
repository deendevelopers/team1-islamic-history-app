import TimelineLine from './TimelineLine';
import React from 'react';
import PropTypes from 'prop-types';
import TimelineClickableCircle from './TimelineClickableCircle';
import { FlexColumnFullScreenView, FlexColumnView } from '../views/FlexView';
import styled from 'styled-components';
import RcQueueAnim from 'rc-queue-anim';

const View = styled.div`
  display: flex;
  flex-direction: column;
`;

function TimelineEvent(props) {
  const { event, onEventClick } = { ...props };

  var above;
  if (!event.isFirst) {
    above = <TimelineLine height={event.eventPosition} key={1} />
  }

  return (
    <View key={1}>
      {above}
      <RcQueueAnim delay={700} type={'scale'} component={'div'} {...props}>
        <TimelineClickableCircle
          event={event}
          onClick={() => onEventClick(event)}
          key={2}
        />
      </RcQueueAnim>
    </View>
  );
}

TimelineEvent.propTypes = {
  event: PropTypes.object,
  onEventClick: PropTypes.func
};

export default TimelineEvent;
