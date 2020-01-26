import React, {Component, useEffect} from 'react';

import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
import FlexView from './components/views/FlexView';
import SingleHistoricEventViewContainer
  from './containers/SingleHistoricEventViewContainer';
import {connect} from 'react-redux';
import * as pages from './constants/navigation';
import SingleHistoricEventDetailViewContainer
  from './containers/SingleHistoricEventDetailViewContainer';
import NavbarContainer from './containers/navbar/NavbarContainer';
import HistoricEventTimelineViewContainer
  from './containers/HistoricEventTimelineViewContainer';
import {fetchUser} from './store/user/actions';
import SettingsViewContainer from './containers/SettingsViewContainer';
import UserLovesViewContainer from './containers/UserLovesViewContainer';

function IslamicHistoryApp(props) {
  const {page, currentUsername, fetchUser} = {...props};

  const history = useHistory();

  useEffect(() => {
    console.log("Page changed", page);
    history.push(page);
  }, [history, page]);

  useEffect(() => {
    fetchUser(currentUsername);
  }, [currentUsername, fetchUser]);

    return (
        <FlexView flexDirection={'column'} height={'100%'} justifyContent={'flex-end'}>
          <Switch>
            <Route exact path={pages.SINGLE_HISTORIC_EVENT_MAIN_VIEW} component={() => <SingleHistoricEventViewContainer/>}/>
            <Route exact path={pages.SINGLE_HISTORIC_EVENT_DETAIL_VIEW} component={() => <SingleHistoricEventDetailViewContainer/>}/>
            <Route exact path={pages.TIMELINE_HISTORIC_EVENTS_VIEW} component={() => <HistoricEventTimelineViewContainer/>}/>
            <Route exact path={pages.LOVED_HISTORIC_EVENTS_VIEW} component={() => <UserLovesViewContainer/>}/>
            <Route exact path={pages.SETTINGS_VIEW} component={() => <SettingsViewContainer/>}/>
            {/*<Redirect exact from="/" to={SINGLE_HISTORIC_EVENT_DETAIL_VIEW}/>*/}
          </Switch>
          <NavbarContainer/>
        </FlexView>
    );
}

const mapStateToProps = (state) => ({
  page: state.navigation.page,
  currentUsername: state.user.currentUsername
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (username) => dispatch(fetchUser(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(IslamicHistoryApp)