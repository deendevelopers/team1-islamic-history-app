import {
  ACCOUNTS_VIEW,
  FACT_VIEW,
  LIKES_VIEW, VIRO_VIEW,
} from './constants/navigation';
import {createSwitchNavigator} from "react-navigation";
import React, {Fragment} from 'react';
import FactViewContainer from './containers/fact/FactViewContainer';

const configMap = {};
configMap[FACT_VIEW] = FactViewContainer;
// configMap[LIKES_VIEW] = LikesViewContainer;
// configMap[ACCOUNTS_VIEW] = AccountViewContainer;
// configMap[VIRO_VIEW] = ViroViewContainer;

const AppStack = createSwitchNavigator(configMap);

export default AppStack;