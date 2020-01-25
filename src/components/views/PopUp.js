import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components'
import {BORDER_DEFAULT_COLOR, VIEW_BACKGROUND_COLOR} from "../../constants/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SwipeUpEntryKeyFrame, SwipeUpExitKeyFrame} from "../keyframes/SwipeUpKeyFrame";
import {POPUP_ANIMATION_TIME_MILLIS} from "../../constants/animation";

const PopUpPanel = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  z-index: 10;
  overflow: hidden;
  animation-name: ${props => props.hide ? SwipeUpExitKeyFrame : SwipeUpEntryKeyFrame};
  animation-duration: ${POPUP_ANIMATION_TIME_MILLIS}ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  animation-direction: normal;
  //animation-iteration-count: infinite;
`;
PopUpPanel.displayName = "PopUpPanel";

const PopUpDiv = styled.div`
  background-color: #FFFFFF;
  min-height: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 100;
  ${props => props.fullscreen && css`
    height: 100%;
    width: 100%;
    justify-content: start !important;
    padding-bottom: 0 !important;
  `}
`;
PopUpDiv.displayName = "PopUpDiv";

const TitleDiv = styled.div`
  position: relative;
  border-bottom: 1px solid ${BORDER_DEFAULT_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 6vh;
`;

const Heading = styled.h2`
  font-weight: bold;
  margin: 0;
  line-height: inherit;
  text-transform: uppercase;
  //font-size: 1.25rem;
  font-family: inherit;
`;
Heading.displayName = "Heading";

const CloseButton = styled.div`
  position: absolute;
  right: 0;
  background: none;
  height: 100%;
  width: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
`;
CloseButton.displayName = "CloseButton";


export default class PopUp extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    hidePopUpPanel: PropTypes.func.isRequired,
    fullscreen: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      hidden: false
    };

    this.hide = this.hide.bind(this);
  }

  hide() {
    this.setState({hidden: true}, () => {
      setTimeout(() => {
        this.props.hidePopUpPanel();
      }, POPUP_ANIMATION_TIME_MILLIS)
    });
  }

  render() {
    return (
        <PopUpPanel hide={this.state.hidden} onClick={this.hide}>
          <PopUpDiv fullscreen={this.props.fullscreen} onClick={(event) => event.stopPropagation()}>
            <TitleDiv>
              <CloseButton onClick={this.hide}>
                <FontAwesomeIcon icon={"times"}/>
              </CloseButton>
              <Heading>{this.props.title}</Heading>
            </TitleDiv>
            {this.props.children}
          </PopUpDiv>
        </PopUpPanel>
    )
  }
}