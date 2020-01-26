import React from 'react';
import styled from 'styled-components';
import {FlexColumnFullWidthView} from '../views/FlexView';
import {EVENT_QUOTE_USER_COLOR, FACT_COLOR} from '../../constants/styles';

const Header = styled.div`
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 900;
  text-align: right;
  width: 80%;
  color: ${EVENT_QUOTE_USER_COLOR};
`;

function SingleHistoricEventFooter(props) {
  const {text} = {...props};

  return (
      <FlexColumnFullWidthView>
        <Header>
          {text}
        </Header>
      </FlexColumnFullWidthView>
  );
}

export default SingleHistoricEventFooter;