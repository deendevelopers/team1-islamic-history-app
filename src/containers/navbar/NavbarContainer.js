import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCog, faHeart,
  faHome,
  faStream,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import FlexView from '../../components/views/FlexView';
import {connect} from 'react-redux';
import {
  navigateToLikedEvents, navigateToSettings,
  navigateToSingleHistoricEventDetail, navigateToSingleHistoricEventMain,
  navigateToTimelineEvents,
} from '../../store/navigation/actions';
import * as pages from '../../constants/navigation';
import {COLOR_THEME_PRIMARY, FACT_COLOR} from '../../constants/styles';

const Navbar = styled.nav`
height: 50px;
//min-height: 50px;
background-color: #FFFFFF;
position: relative;
width: 100%;
padding-top: 10px;
padding-bottom: 10px;
font-size: 20px;
`;

const AppIconWrapper = styled(FlexView)
    .attrs({
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    })`
color: #c2c2c2;
width: 100%;
padding-left: 5px;
padding-right: 5px;
`;

function NavbarContainer(props) {
  const {page, navigateToTimeline, navigateToHome, navigateToLikedEvents, navigateToSettings} = {...props};

  return (
      <Navbar>
        <FlexView flexDirection={'row'} alignItems={'stretch'}
                  justifyContent={'space-between'}>
          {/*<AppText>Settings</AppText>*/}
          {/*<AppText>Account</AppText>*/}
          <AppIconWrapper>
            <FontAwesomeIcon icon={faHome} size={'lg'} onClick={navigateToHome} color={page === pages.SINGLE_HISTORIC_EVENT_MAIN_VIEW ? COLOR_THEME_PRIMARY : FACT_COLOR}/>
            <FontAwesomeIcon icon={faStream} size={'lg'} onClick={navigateToTimeline} color={page === pages.TIMELINE_HISTORIC_EVENTS_VIEW ? COLOR_THEME_PRIMARY : FACT_COLOR}/>
            <FontAwesomeIcon icon={faHeart} size={'lg'} onClick={navigateToLikedEvents} color={page === pages.LOVED_HISTORIC_EVENTS_VIEW ? COLOR_THEME_PRIMARY : FACT_COLOR}/>
            <FontAwesomeIcon icon={faCog} size={'lg'} onClick={navigateToSettings} color={page === pages.SETTINGS_VIEW ? COLOR_THEME_PRIMARY : FACT_COLOR}/>
          </AppIconWrapper>
        </FlexView>
      </Navbar>
  );
}

const mapStateToProps = (state) => ({
  page: state.navigation.page
});

const mapDispatchToProps = (dispatch) => ({
  navigateToHome: () => dispatch(navigateToSingleHistoricEventMain()),
  navigateToTimeline: () => dispatch(navigateToTimelineEvents()),
  navigateToLikedEvents: () => dispatch(navigateToLikedEvents()),
  navigateToSettings: () => dispatch(navigateToSettings()),
});


export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);