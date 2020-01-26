import React from "react";
import styled from "styled-components";
import SingleHistoricEventHeader from "./SingleHistoricEventHeader";
import SingleHistoricEventText from "./SingleHistoricEventText";
import SingleHistoricEventFooter from "./SingleHistoricEventFooter";
import SingleHistoricEventLikeButton from "./SingleHistoricEventLikeButton";
import ShareButton from "../common/ShareButton";
import PropTypes from "prop-types";

const FactViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;
FactViewWrapper.displayName = "FactViewWrapper";

const FactViewInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 50%;
  align-items: center;
`;
FactViewInnerWrapper.displayName = "FactViewInnerWrapper";

const Buttons = styled.div`
  padding-top: 5px;
  display: row;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

function SingleHistoricEvent(props) {
  const { event, isLiked, onLikeClick } = { ...props };

  console.log("SingleHistoricEvent", event);
  return (
    <React.Fragment>
      <SingleHistoricEventHeader text={event.date} key={1} />
      <SingleHistoricEventText text={event.description} key={2} />
      <SingleHistoricEventFooter text={"– " + event.subject} key={3} />
      <Buttons>
        <SingleHistoricEventLikeButton
          isLiked={isLiked}
          onClick={onLikeClick}
          event={event}
        />
      </Buttons>

    </React.Fragment>
  );
}

SingleHistoricEvent.propTypes = {
  event: PropTypes.object,
  isLiked: PropTypes.bool,
  onLikeClick: PropTypes.func
};

export default SingleHistoricEvent;
