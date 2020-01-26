import React, {useEffect, useState} from 'react';
import historicEventsService from '../services/HistoricEventsService';
import SingleHistoricEventDetailsView
  from '../components/singlehistoricevent/SingleHistoricEventDetailsView';


function SingleHistoricEventViewContainer() {
  const [event, setEvent] = useState('');

  useEffect(() => {
    historicEventsService.getOne(Math.round(Math.random() * 10))
        .then(data => setEvent(data));
  }, []);

  console.log(event);

  return (
      <SingleHistoricEventDetailsView event={event}/>
  );
}

export default SingleHistoricEventViewContainer;