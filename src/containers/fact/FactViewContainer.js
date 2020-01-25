import React from 'react';
import FactText from '../../components/FactText';
import styled from 'styled-components';
import FullScreenView from '../../components/FullScreenView';
import NavbarContainer from '../navbar/NavbarContainer';
import FlexView from '../../components/views/FlexView';

const FactView = styled.div`
display: flex;
background-color: red;
`;

const FactViewWrapper = styled.div`
display: flex;

`;

function FactViewContainer() {

  return (
      <FlexView flexDirection={"row"}>
        <NavbarContainer/>
        <FactViewWrapper>
          <FactText>
            SOME FACT HERE
          </FactText>
        </FactViewWrapper>
      </FlexView>
  );
}

export default FactViewContainer;