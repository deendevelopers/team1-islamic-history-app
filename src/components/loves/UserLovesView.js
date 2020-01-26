import SingleHistoricEvent from '../singlehistoricevent/SingleHistoricEvent';
import React from 'react';
import styled from 'styled-components';
import {FACT_COLOR} from '../../constants/styles';
import PropTypes from 'prop-types';

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


function UserLovesView(props) {
  const {events} = {...props};

  const eventComponents = events.map(e => {
    return (
        <EventWrapper>
          <SingleHistoricEvent event={e}/>
        </EventWrapper>
    );
  });

  return (
      <React.Fragment>
        {eventComponents}
      </React.Fragment>
  )

}
UserLovesView.propTypes =  {
  events: PropTypes.array
};

export default UserLovesView;