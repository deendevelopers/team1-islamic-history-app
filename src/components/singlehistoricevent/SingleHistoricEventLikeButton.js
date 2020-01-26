import React from 'react';
import styled from 'styled-components';
import {FlexColumnFullWidthView} from '../views/FlexView';
import {EVENT_QUOTE_USER_COLOR, FACT_COLOR} from '../../constants/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faSortDown} from '@fortawesome/free-solid-svg-icons';
import TweenOne from 'rc-tween-one';

const Header = styled.div`
  font-size: medium;
  font-weight: bold;
  text-align: center;
  color: ${EVENT_QUOTE_USER_COLOR};
  font-style: italic;
`;

function SingleHistoricEventLikeButton(props) {

  function onLikeClick() {
    props.onClick();
  }

  return (
      <FlexColumnFullWidthView>
        <FontAwesomeIcon icon={faHeart} size={'lg'} onClick={onLikeClick}/>
      </FlexColumnFullWidthView>
  );
}

export default SingleHistoricEventLikeButton;