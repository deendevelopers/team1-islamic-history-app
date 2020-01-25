import styled from "styled-components";
import {SlideRightToLeftEntryKeyFrame, SlideRightToLeftExitKeyFrame} from "../keyframes/SlideRightToLeftKeyFrame";
import {DRAWER_ANIMATION_TIME_MILLIS} from "../../constants/animation";

const Drawer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  animation-name: ${props => props.hide ? SlideRightToLeftExitKeyFrame : SlideRightToLeftEntryKeyFrame};
  animation-duration: ${DRAWER_ANIMATION_TIME_MILLIS}ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  animation-direction: normal;
`;

export default Drawer;