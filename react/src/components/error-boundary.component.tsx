/* eslint-disable react/state-in-constructor */
import { DirectusForbiddenErrorCode } from '@enums/directus-error-code.enum';
import ErrorState from '@interfaces/error-state.interface';
import GraphQLError from '@interfaces/graphql-error.interface';
import { Component } from 'react';

import DirectusErrorCodeType from '../types/directus-error-code.type';

import NavigateToLogin from './navigate-to-login.component';

function checkIfItsAForbiddenError(code: DirectusErrorCodeType) {
  if (
    code === DirectusForbiddenErrorCode.INVALID_CREDENTIALS ||
    code === DirectusForbiddenErrorCode.TOKEN_EXPIRED
  ) {
    return true;
  }

  return false;
}

export default class ErrorBoundary extends Component {
  state: ErrorState = { hasError: false, error: null };

  static getDerivedStateFromError(error: GraphQLError | null) {
    return { hasError: true, error };
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError && error && error.extensions) {
      const { code } = error.extensions;

      if (checkIfItsAForbiddenError(code)) return <NavigateToLogin />;

      return (<div>{error.message}</div>);
    }

    return children;
  }
}