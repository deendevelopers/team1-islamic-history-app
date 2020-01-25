import React from 'react';
import styled from 'styled-components';
import {FlexColumnFullWidthView} from '../views/FlexView';
import {EVENT_QUOTE_USER_COLOR, FACT_COLOR} from '../../constants/styles';

const Header = styled.div`
  font-size: medium;
  font-weight: bold;
  text-align: center;
  color: ${EVENT_QUOTE_USER_COLOR};
  font-style: italic;
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