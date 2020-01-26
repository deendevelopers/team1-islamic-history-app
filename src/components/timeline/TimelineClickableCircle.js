import React from 'react';
import styled from 'styled-components';
import {COLOR_TIMELINE_CIRCLE} from '../../constants/styles';


const View = styled.div`
display: flex;
flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Circle = styled.div`
height: 30px;
width: 30px;
border-style: solid;
border-color: ${COLOR_TIMELINE_CIRCLE};
border-width: 2px;
border-radius: 50%;
align-self: center;
`;

const EventText = styled.div`
position: absolute;
left: 20%;
`;

function TimelineClickableCircle(props) {
  const {event} = {...props};
  return (
      <View>
        <Circle {...props}/>
        {/*<EventText>{event && event.date}</EventText>*/}
      </View>
  )
}

export default TimelineClickableCircle;