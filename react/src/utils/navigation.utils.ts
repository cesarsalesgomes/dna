import { NavigateFunction } from 'react-router-dom';

export function navigateToPreviousPage(navigate: NavigateFunction) {
  navigate(-1);
}