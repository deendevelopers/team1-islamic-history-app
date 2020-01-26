import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import FlexView from '../components/views/FlexView';
import historicEventsService from '../services/HistoricEventsService';
import SingleHistoricEventQuoteView
  from '../components/singlehistoricevent/SingleHistoricEventQuoteView';
import {connect} from 'react-redux';
import {navigateToSingleHistoricEventDetail} from '../store/navigation/actions';

const FactViewWrapper = styled.div`
display: flex;
flex-direction: column;
flex: auto;
align-items: center;
`;

function SingleHistoricEventViewContainer(props) {
  const {user, navigateToSingleHistoricEventDetail} = {...props};
  const [event, setEvent] = useState('');

  useEffect(() => {
    historicEventsService.getOne(Math.round(Math.random() * 10))
        .then(data => setEvent(data));
  }, []);

  function goToDetails() {
    navigateToSingleHistoricEventDetail();
  }

  function onLikeClick(event_id) {
    console.log("like clicked")
    // updateUserLoves(user, event_id);
  }

  return (
      <FlexView flexDirection={'column'} height={'100%'}>
        <SingleHistoricEventQuoteView
            event={event}
            onNextClick={goToDetails}
            onLikeClick={onLikeClick}
        />
      </FlexView>
  );
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  navigateToSingleHistoricEventDetail: () => dispatch(navigateToSingleHistoricEventDetail()),
});


export default connect(mapStateToProps, mapDispatchToProps)(SingleHistoricEventViewContainer);