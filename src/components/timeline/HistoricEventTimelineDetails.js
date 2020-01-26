import React from 'react';
import {FlexRowFullScreenView} from '../views/FlexView';
import * as PropTypes from 'prop-types'

function HistoricEventTimelineDetails(props) {
  const {events} = {...props};

  // console.log(events[0].subject)
  return (
      <FlexRowFullScreenView>
        {events && events.length > 0 && events[0].subject}
      </FlexRowFullScreenView>
  )
}

export default HistoricEventTimelineDetails;