import styled from 'styled-components';
import {
  COLOR_BUTTON_BACKGROUND,
  COLOR_BUTTON_TEXT,
} from '../../constants/styles';


const ThemeButton = styled.button`
background-color: ${COLOR_BUTTON_BACKGROUND};
color: ${COLOR_BUTTON_TEXT};
border-radius: 10px;
padding: 10px 20px;
width: 100%;
min-height: 30px;
`;

export default ThemeButton;