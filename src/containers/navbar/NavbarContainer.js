import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faStream, faUser} from '@fortawesome/free-solid-svg-icons';
import FlexView from '../../components/views/FlexView';
import {connect} from 'react-redux';
import {
  navigateToSingleHistoricEventDetail,
  navigateToTimelineEvents,
} from '../../store/navigation/actions';

const Navbar = styled.nav`
height: 50px;
//min-height: 50px;
background-color: #FFFFFF;
position: relative;
width: 100%;
padding-top: 15px;
padding-bottom: 10px;
font-size: 20px;
`;

const AppIconWrapper = styled(FlexView)
    .attrs({
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    })`
color: #c2c2c2;
width: 100%;
padding-left: 10px;
padding-right: 10px;
`;

function NavbarContainer(props) {
  const {navigateToTimelineEvents} = {...props};

  return (
      <Navbar>
        <FlexView flexDirection={'row'} alignItems={'stretch'}
                  justifyContent={'space-between'}>
          {/*<AppText>Settings</AppText>*/}
          {/*<AppText>Account</AppText>*/}
          <AppIconWrapper>
            <FontAwesomeIcon icon={faCog} size={'lg'}/>
            <FontAwesomeIcon icon={faStream} size={'lg'} onClick={navigateToTimelineEvents}/>
          </AppIconWrapper>
        </FlexView>
      </Navbar>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  navigateToTimelineEvents: () => dispatch(navigateToTimelineEvents())
});


export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);