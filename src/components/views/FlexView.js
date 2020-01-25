import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

const FlexView = styled.div`
display: flex;
flex-direction: ${props => props.flexDirection || "row"};
justify-content: ${props => props.justifyContent || "flex-start"};
align-items: ${props => props.alignItems || "center"};
height: ${props => props.height || "auto"};
width: ${props => props.width || "auto"};
position: ${props => props.position || "relative"};
`;

FlexView.propTypes = {
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  position: PropTypes.string
};

FlexView.defaulProps = {
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "auto",
  width: "auto",
  position: "relative"
};

export default FlexView;