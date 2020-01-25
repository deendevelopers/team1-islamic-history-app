import styled from "styled-components";
import PropTypes from 'prop-types';

const ScrollableView = styled.div`
  overflow-y: ${props => props.horizontal ? "hidden" : "scroll"};
  overflow-x: ${props => props.horizontal ? "scroll" : "hidden"};
  display: flex;
  flex-direction: ${props => props.horizontal ? "row" : "column"};
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
  overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;
`;

ScrollableView.propTypes = {
  horizontal: PropTypes.bool,
};

ScrollableView.defaulProps = {
  horizontal: false,
};

ScrollableView.displayName = "ScrollableView";

export default ScrollableView;