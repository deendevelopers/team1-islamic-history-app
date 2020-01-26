import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import FlexView from '../components/views/FlexView';
import historicEventsService from '../services/HistoricEventsService';
import lovesService from '../services/LovesService';
import {connect} from 'react-redux';
import SingleHistoricEventQuoteView
  from '../components/singlehistoricevent/SingleHistoricEventQuoteView';
import SingleHistoricEvent
  from '../components/singlehistoricevent/SingleHistoricEvent';
import ScrollableView from '../components/views/ScrollableView';
import {
  COLOR_THEME_PRIMARY,
  EVENT_QUOTE_USER_COLOR,
  FACT_COLOR,
} from '../constants/styles';

const EventWrapper = styled.div`
padding-top: 10px;
padding-bottom: 30px;
border-bottom-width: 2px;
// eslint-disable-next-line no-undef
border-bottom-color: ${FACT_COLOR};
border-bottom-style: dotted;
margin-left: 10px;
margin-right: 10px;
`;

function UserLovesViewContainer(props) {
  const {user} = {...props};
  const [events, setEvents] = useState([]);

  useEffect(() => {
    lovesService.getLovesByUserId(user.user.id)
        .then(userIdToEventId => {
          const eventIds = userIdToEventId.map(
              userIdToEventId => userIdToEventId.event_id);
          console.log('event ids', eventIds);
          historicEventsService.getAll()
              .then(eventData => {
                const filteredEvents = eventData.filter(
                    eventData => eventIds.some((id) => id === eventData.id));
                setEvents(filteredEvents);
              });
        });
  }, [user]);

  console.log(events);

  const eventComponents = events.map(e => {
    return (
        <EventWrapper>
          <SingleHistoricEvent event={e}/>
        </EventWrapper>
    );
  });
  return (
      <ScrollableView flexDirection={'column'} y={true}>
        {eventComponents}
      </ScrollableView>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
    UserLovesViewContainer);