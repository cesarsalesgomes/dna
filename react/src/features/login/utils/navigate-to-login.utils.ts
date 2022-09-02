import { Location, NavigateFunction } from 'react-router-dom';

export function navigateToLoginSettingStateToRedirectToPreviousPageAfterAuthenticating(
  navigate: NavigateFunction, location: Location
) {
  // TODO: check how to navigate to root instead of parent
  navigate('../login', { state: { from: location }, replace: true });
}
