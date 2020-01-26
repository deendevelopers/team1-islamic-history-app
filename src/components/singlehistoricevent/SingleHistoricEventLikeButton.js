import React, {useState} from 'react';
import styled from 'styled-components';
import {FlexColumnFullWidthView} from '../views/FlexView';
import {
  COLOR_LOVE_HEART,
  EVENT_QUOTE_USER_COLOR,
  FACT_COLOR,
} from '../../constants/styles';
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
  let {isLiked} = {...props};
  const [updatedLike, setUpdateLke] = useState(null);

  console.log("button like", updatedLike, isLiked);

  function onLikeClick() {
    setUpdateLke(!updatedLike);
    props.onClick();
  }

  function getLike() {
    if (updatedLike) {
      return updatedLike;
    } else {
      return isLiked;
    }
  }

  return (
      <FlexColumnFullWidthView>
        <FontAwesomeIcon icon={faHeart} size={'lg'} onClick={onLikeClick} color={getLike() ? COLOR_LOVE_HEART : FACT_COLOR }/>
      </FlexColumnFullWidthView>
  );
}

export default SingleHistoricEventLikeButton;