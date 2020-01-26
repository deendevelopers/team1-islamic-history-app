import React, {Component, useEffect} from 'react';

import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
import FlexView from './components/views/FlexView';
import SingleHistoricEventViewContainer
  from './containers/SingleHistoricEventViewContainer';
import {connect} from 'react-redux';
import {
  SINGLE_HISTORIC_EVENT_DETAIL_VIEW,
  SINGLE_HISTORIC_EVENT_MAIN_VIEW, TIMELINE_HISTORIC_EVENTS_VIEW,
} from './constants/navigation';
import SingleHistoricEventDetailViewContainer
  from './containers/SingleHistoricEventDetailViewContainer';
import NavbarContainer from './containers/navbar/NavbarContainer';
import HistoricEventTimelineViewContainer
  from './containers/HistoricEventTimelineViewContainer';

const ENV = process.env.API_URL;
function IslamicHistoryApp(props) {
  const {page} = {...props};

  const history = useHistory();

  console.log(ENV);

  useEffect(() => {
    history.push(page)
  }, [history, page]);

    return (
        <FlexView flexDirection={'column'} height={'100%'} justifyContent={'flex-end'}>
          <Switch>
            <Route exact path={SINGLE_HISTORIC_EVENT_MAIN_VIEW} component={() => <SingleHistoricEventViewContainer/>}/>
            <Route exact path={SINGLE_HISTORIC_EVENT_DETAIL_VIEW} component={() => <SingleHistoricEventDetailViewContainer/>}/>
            <Route exact path={TIMELINE_HISTORIC_EVENTS_VIEW} component={() => <HistoricEventTimelineViewContainer/>}/>
            {/*<Redirect exact from="/" to={SINGLE_HISTORIC_EVENT_DETAIL_VIEW}/>*/}
          </Switch>
          <NavbarContainer/>
        </FlexView>
    );
}

const mapStateToProps = (state) => ({
  page: state.navigation.page
});

export default connect(mapStateToProps)(IslamicHistoryApp)