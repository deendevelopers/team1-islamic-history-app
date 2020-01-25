import React from 'react';
import styled from "styled-components";
import {BORDER_DEFAULT_COLOR} from "../../constants/styles";

const Container = styled.div`
  border-top: 1px solid ${BORDER_DEFAULT_COLOR};
  border-radius: ${props => props.fullscreen ? "0" : "10px 10px 0 0"};
  background-color: #FFFFFF;
  box-shadow: 0 -10px 10px -9px ${BORDER_DEFAULT_COLOR};
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  z-index: 3;
  box-sizing: border-box;
`;

const ContainerDrawer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const ContainerDrawerIcon = styled.div`
  display: block;
  width: 50px;
  border: 3px solid rgba(0,0,0,0.1);
  border-radius: 10px;
`;

class SwipeUpDrawer extends React.Component {

  render() {
    return (
        <Container>
          <ContainerDrawer>
            <ContainerDrawerIcon/>
          </ContainerDrawer>
          {this.props.children}
        </Container>
    );
  }
}

export default SwipeUpDrawer;