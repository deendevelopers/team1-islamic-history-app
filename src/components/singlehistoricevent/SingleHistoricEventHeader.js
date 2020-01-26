import React from 'react';
import styled from 'styled-components';
import { FlexColumnFullWidthView } from '../views/FlexView';
import { FACT_COLOR } from '../../constants/styles';

const Header = styled.div`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 300;
  text-align: left;
  width: 95%;
  color: ${FACT_COLOR};
`;

function SingleHistoricEventText(props) {
  const { text } = { ...props };

  return (
    <FlexColumnFullWidthView>
      <Header>{text}</Header>
    </FlexColumnFullWidthView>
  );
}

export default SingleHistoricEventText;
