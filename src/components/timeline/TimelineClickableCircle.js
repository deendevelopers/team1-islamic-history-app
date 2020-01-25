import React from 'react';
import styled from 'styled-components';
import {COLOR_TIMELINE_CIRCLE} from '../../constants/styles';

const Circle = styled.div`
height: 30px;
width: 30px;
border-style: solid;
border-color: ${COLOR_TIMELINE_CIRCLE};
border-width: 2px;
border-radius: 50%;
`;


function TimelineClickableCircle(props) {
  return (
      <Circle {...props}/>
  )
}

export default TimelineClickableCircle;