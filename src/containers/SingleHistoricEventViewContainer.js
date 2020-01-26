import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import FlexView from '../components/views/FlexView';
import historicEventsService from '../services/HistoricEventsService';
import lovesService from '../services/LovesService';
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
  const [isLiked, setIsLiked] = useState('');

  useEffect(() => {
    fetchEvent();
  }, []);

  function fetchEvent() {
    console.log("fetch event");
    historicEventsService.getOne(Math.round(Math.random() * 10))
        .then(data => {
          lovesService.getLovesByUserIdAndEventId(user.id, data.id)
              .then(loveData => {
                console.log("loves service", loveData);
                setIsLiked(loveData.length > 0);
                data["loves"] = loveData.length;
                setEvent(data);
              });
        });
  }

  function goToDetails() {
    navigateToSingleHistoricEventDetail();
  }

  function onLikeClick() {
    console.log("like clicked");
    lovesService.postLove(event.id, user.id).then(r => console.log(r));
    // updateUserLoves(user, event_id);
  }

  console.log("Single Event", event);
  return (
      <FlexView flexDirection={'column'} height={'100%'}>
        <SingleHistoricEventQuoteView
            event={event}
            isLiked={isLiked}
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