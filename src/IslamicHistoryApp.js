import React, {Component} from 'react';

import {Redirect, Route, Switch} from 'react-router-dom';
import FlexView from './components/views/FlexView';
import SingleHistoricEventViewContainer
  from './containers/SingleHistoricEventViewContainer';

export default class IslamicHistoryApp extends Component {

  componentDidMount() {
  }

  render() {
    return (
        <FlexView flexDirection={'column'} height={'100%'} justifyContent={'flex-end'}>
          <Switch>
            <Route path={'/'} component={() => <SingleHistoricEventViewContainer/>}/>
            <Redirect exact from="/" to={'/'}/>
          </Switch>
        </FlexView>
    );
  }
}