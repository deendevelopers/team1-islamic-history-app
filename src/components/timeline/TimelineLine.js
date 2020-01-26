import React from 'react';
import styled from 'styled-components';
import {COLOR_TIMELINE_LINE} from '../../constants/styles';
import PropTypes from 'prop-types';

const MINIMUM_HEIGHT = 10;

const Line = styled.div`
//min-height: 10px;
border-color: ${COLOR_TIMELINE_LINE};
border-width:1px;
border-style: solid;
align-self: center;
width: 0;
//flex: 1;
`;


function TimelineLine(props) {
  const {fill, height} = {...props};
  let style = {};
  console.log("height:", height);
  if(height) {
    style = {...style, height: `${MINIMUM_HEIGHT + height}px`}
  }
  if(fill) {
    style = {...style, flex: 1}
  }
  return (
      <Line {...props} style={style}/>
  )
}

TimelineLine.propTypes = {
  height: PropTypes.number,
  fill: PropTypes.bool,
};

export default TimelineLine;