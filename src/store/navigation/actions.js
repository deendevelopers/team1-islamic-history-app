import * as type from "./actionTypes";
import * as view from '../../constants/navigation';

export const navigateToLoginScreen = () => ({
  type: type.NAVIGATE_T0_LOGIN_SCREEN,
  page: view.LOGIN_VIEW,
});

export const navigateToAppScreen = () => ({
  type: type.NAVIGATE_T0_APP_SCREEN,
  page: view.APP_STACK,
});

export const navigateToViroView = () => ({
  type: type.NAVIGATE_T0_VIRO_VIEW,
  page: view.VIRO_VIEW,
});

export const navigateToLikesView = () => ({
  type: type.NAVIGATE_T0_LIKES_VIEW,
  page: view.LIKES_VIEW,
});

export const navigateToAccountView = () => ({
  type: type.NAVIGATE_T0_ACCOUNT_VIEW,
  page: view.ACCOUNTS_VIEW,
});

export const navigateToCardView = () => ({
  type: type.NAVIGATE_T0_CARD_VIEW,
  page: view.FACT_VIEW,
});

export const navigateToCardSelectedView = () => ({
  type: type.NAVIGATE_T0_CARD_SELECTED_VIEW,
  page: view.CARDS_SELECTED_VIEW,
});

export const navigateToCardPreviewView = () => ({
  type: type.NAVIGATE_T0_CARD_PREVIEW_VIEW,
  page: view.CARDS_PREVIEW_VIEW,
});