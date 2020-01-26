import React from 'react';
import Modal from './Modal';
import SingleHistoricEventHeader
  from './singlehistoricevent/SingleHistoricEventHeader';
import SingleHistoricEventText
  from './singlehistoricevent/SingleHistoricEventText';
import SingleHistoricEventFooter
  from './singlehistoricevent/SingleHistoricEventFooter';
import * as PropTypes from 'prop-types'

function EventModal(props) {
  const {event} = {...props};

  return (
      <Modal {...props}>
        <SingleHistoricEventHeader text={event.date} key={1}/>
        <SingleHistoricEventText text={event.description} key={2}/>
        <SingleHistoricEventFooter text={'– ' + event.subject}
                                   key={3}/>
      </Modal>
  )
}

EventModal.propTypes = {
  event: PropTypes.object,
  onExit: PropTypes.func,
};

export default EventModal;