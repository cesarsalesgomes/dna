import { Location, NavigateFunction } from 'react-router-dom';

export function navigateToLoginSettingStateToRedirectToPreviousPageAfterAuthenticating(
  navigate: NavigateFunction, location: Location
) {
  navigate('/login', { state: { from: location }, replace: true });
}
