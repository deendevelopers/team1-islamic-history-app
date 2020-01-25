import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faUser} from '@fortawesome/free-solid-svg-icons';
import FlexView from '../../components/views/FlexView';


const Navbar = styled(FlexView).attrs()`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-left: 30px;
padding-right: 30px;
align-items: center;
height: 50px;
`;

function NavbarContainer() {

  return (
      <Navbar>
        {/*<AppText>Settings</AppText>*/}
        {/*<AppText>Account</AppText>*/}
        <FontAwesomeIcon icon={faCog} size={25} />
        <FontAwesomeIcon icon={faUser} size={25} />
      </Navbar>
  );
}

export default NavbarContainer;