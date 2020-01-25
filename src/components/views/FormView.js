import styled from "styled-components";
import {BORDER_DEFAULT_COLOR, VIEW_BACKGROUND_COLOR} from "../../constants/styles";
import FlexView from "./FlexView";

export const FormView = styled(FlexView)`
  width: 100%;
  background-color: ${VIEW_BACKGROUND_COLOR};
`;

export const FormViewHeading = styled.span`
  border-bottom: 1px solid ${BORDER_DEFAULT_COLOR};
  width: 100%;
  padding: 15px 10px;
  text-decoration: none;
  background-color: #FFFFFF;
  text-align: center;
  box-shadow: 0 10px 5px -9px ${BORDER_DEFAULT_COLOR};
`;