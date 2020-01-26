import React, { useState } from "react";
import styled from "styled-components";
import { FlexColumnFullWidthView } from "../views/FlexView";
import {
  COLOR_LOVE_HEART,
  EVENT_QUOTE_USER_COLOR,
  FACT_COLOR
} from "../../constants/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSortDown } from "@fortawesome/free-solid-svg-icons";
import TweenOne from "rc-tween-one";
import ShareButton from "../common/ShareButton";

const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

function SingleHistoricEventLikeButton(props) {
  const { event, isLiked } = { ...props };
  const [updatedLike, setUpdateLke] = useState(null);

  console.log("button like", updatedLike, isLiked);
  console.log("event", event);

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
    <View>
      <FontAwesomeIcon
        icon={faHeart}
        size={"lg"}
        onClick={onLikeClick}
        color={getLike() ? COLOR_LOVE_HEART : FACT_COLOR}
      />
      <div>{event.loves}</div>
      <ShareButton event={(event.description, event.subject)} />
    </View>
  );
}

export default SingleHistoricEventLikeButton;
