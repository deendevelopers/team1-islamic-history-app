import React, {useState} from 'react';
import styled from 'styled-components';
import {FlexRowFullScreenView} from './views/FlexView';
import RcQueueAnim from 'rc-queue-anim';
import * as PropTypes from 'prop-types'
import {func} from 'prop-types';
import { FACT_COLOR, FACT_BACKGROUND_COLOR, FACT_BORDER_COLOR } from '../constants/styles';

const ModalView = styled(FlexRowFullScreenView)`
width: 100%;
height: 100%;
position: absolute;
max-width: 80vw;
//opacity: 0.5;
//background-color: gray;
z-index: 100;
`;

const ModalWrapper = styled.div`
background-color: ${FACT_BACKGROUND_COLOR};
border-radius: 10px;
border-color: ${FACT_BORDER_COLOR};
border-width: 2px;
border-style: solid;
opacity: 1;
padding: 10px;
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