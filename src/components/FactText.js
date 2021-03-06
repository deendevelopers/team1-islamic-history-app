import React from 'react';
import styled from 'styled-components';
import AppText from './common/AppText';
import { FACT_COLOR } from '../constants/styles';

const Text = styled(AppText)`
  font-size: 20px;
  color: ${FACT_COLOR};
  font-family: 'Merriweather', serif;
  font-style: italic;
  font-weight: 300;
  text-align: center;
  //font-family: 'Sacramento', cursive;
`;

const QuoteText = styled(Text)``;

const LargerText = styled(Text)`
  font-size: 40px;
  //position: absolute;
`;

export default function FactText(props) {
  const { text } = { ...props };
  return (
    <React.Fragment>
      <Text>
        <LargerText style={{ paddingRight: '10px' }}>❝</LargerText>
        <QuoteText>{text}</QuoteText>
        <LargerText style={{paddingLeft: "0px", fontSize: '25px'}}>❞</LargerText>
      </Text>
    </React.Fragment>
  );
}
