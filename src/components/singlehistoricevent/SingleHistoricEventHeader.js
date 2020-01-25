import React from 'react';
import styled from 'styled-components';
import {FlexColumnFullWidthView} from '../views/FlexView';
import {FACT_COLOR} from '../../constants/styles';

const Header = styled.div`
  font-size: medium;
  font-weight: bold;
  text-align: center;
  color: ${FACT_COLOR};
  font-style: italic;
`;

function SingleHistoricEventText(props) {
  const {text} = {...props};

  return (
      <FlexColumnFullWidthView>
        <Header>
          {text}
        </Header>
      </FlexColumnFullWidthView>
  );
}

export default SingleHistoricEventText;