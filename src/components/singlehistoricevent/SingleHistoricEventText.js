import React from 'react';
import FactText from '../FactText';
import {FlexColumnView} from '../views/FlexView';

function SingleHistoricEventText(props) {
  const {text} = {...props};

  return (
      <FlexColumnView style={{padding: "5px 20px 20px 20px"}}>
          <FactText text={text}/>
      </FlexColumnView>
  );
}

export default SingleHistoricEventText;