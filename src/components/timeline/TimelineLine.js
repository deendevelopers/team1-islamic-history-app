import React from 'react';
import styled from 'styled-components';
import {COLOR_TIMELINE_LINE} from '../../constants/styles';

const Line = styled.div`
height: ${Math.round(Math.random()*20) + "px"};
//min-height: 10px;
border-color: ${COLOR_TIMELINE_LINE};
border-width:1px;
border-style: solid;
flex: 1;
`;


function TimelineLine(props) {
  return (
      <Line {...props}/>
  )
}

export default TimelineLine;