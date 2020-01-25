import React, {useState} from 'react';
import styled from 'styled-components';
import {FlexRowFullScreenView} from './views/FlexView';
import RcQueueAnim from 'rc-queue-anim';
import * as PropTypes from 'prop-types'
import {FACT_COLOR} from '../constants/styles';
import {func} from 'prop-types';

const ModalView = styled(FlexRowFullScreenView)`
width: 100%;
height: 100%;
position: absolute;
//opacity: 0.5;
//background-color: gray;
z-index: 100;
`;

const ModalWrapper = styled.div`
background-color: white;
border-radius: 10px;
border-color: ${FACT_COLOR};
border-width: 2px;
border-style: solid;
opacity: 1;
`;

function Modal(props) {
  const {onExit} = {...props};

  const [show, setShow] = useState(true);

  function onAnimationEnd({key, type}) {
    if(type === "leave") {
      onExit()
    }
  }

  function doCloseModal() {
    setShow(false);
  }

  return (
      <ModalView onClick={doCloseModal}>
        <RcQueueAnim delay={0} type={"scale"} leaveReverse={true} onClick={event => event.stopPropagation()} onEnd={onAnimationEnd}>
          {show &&
          <ModalWrapper key={1} onClick={event => event.preventDefault()}>
            {props.children}
          </ModalWrapper>
          }
        </RcQueueAnim>
      </ModalView>
  );
}

Modal.propTypes = {
  onExit: PropTypes.func
};

export default Modal;