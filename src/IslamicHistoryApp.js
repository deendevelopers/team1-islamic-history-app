import React, {Component} from 'react';

import {Redirect, Route, Switch} from "react-router-dom";
import FactViewContainer from './containers/fact/FactViewContainer';
import FlexView from './components/views/FlexView';
import AppView from './components/views/AppView';

export default class IslamicHistoryApp extends Component {

  componentDidMount() {
  }

  render() {
    return (
        <AppView>
          <FlexView flexDirection={"column"} height={"100%"} justifyContent={"flex-end"}>
              <Switch>
                <Route path={"/"} component={() => <FactViewContainer/>}/>
                <Redirect exact from="/" to={"/"}/>
              </Switch>
          </FlexView>
        </AppView>
    );
  }
}