import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import NavbarContainer from './navbar/NavbarContainer';
import FlexView from '../components/views/FlexView';
import historicEventsService from '../services/HistoricEventsService';
import SingleHistoricEventText
  from '../components/singlehistoricevent/SingleHistoricEventText';
import SingleHistoricEventHeader
  from '../components/singlehistoricevent/SingleHistoricEventHeader';
import RcQueueAnim from 'rc-queue-anim';
import SingleHistoricEventScrollIndicator
  from '../components/singlehistoricevent/SingleHistoricEventScrollIndicator';
import SingleHistoricEventQuoteView
  from '../components/singlehistoricevent/SingleHistoricEventQuoteView';
import ScrollableView from '../components/views/ScrollableView';
import {connect} from 'react-redux';
import {navigateToSingleHistoricEventDetail} from '../store/navigation/actions';

const FactViewWrapper = styled.div`
display: flex;
flex-direction: column;
flex: auto;
align-items: center;
`;

function SingleHistoricEventViewContainer(props) {
  const {navigateToSingleHistoricEventDetail} = {...props};
  const [event, setEvent] = useState('');

  useEffect(() => {
    historicEventsService.getOne(Math.round(Math.random() * 10))
        .then(data => setEvent(data));
  }, []);

  function goToDetails() {
    navigateToSingleHistoricEventDetail();
  }

  return (
      <FlexView flexDirection={'column'} height={'100%'}>
        <SingleHistoricEventQuoteView event={event} onNextClick={goToDetails}/>
      </FlexView>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  navigateToSingleHistoricEventDetail: () => dispatch(navigateToSingleHistoricEventDetail())
});


export default connect(mapStateToProps, mapDispatchToProps)(SingleHistoricEventViewContainer);