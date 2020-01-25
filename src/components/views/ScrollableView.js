import styled from "styled-components";
import PropTypes from 'prop-types';

const ScrollableView = styled.div`
  overflow-y: ${props => props.x ? "scroll" : "hidden"};
  overflow-x: ${props => props.y ? "scroll" : "hidden"};
  display: flex;
  flex-direction: ${props => props.flexDirection};
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
  overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;
`;

ScrollableView.propTypes = {
  flexDirection: PropTypes.string,
  x: PropTypes.boolean,
  y: PropTypes.boolean,
};

ScrollableView.displayName = "ScrollableView";

export default ScrollableView;