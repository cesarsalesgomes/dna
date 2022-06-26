import { DirectusForbiddenErrorCode } from '@enums/directus-error-code.enum';
import GraphQLError from '@interfaces/graphql-error.interface';
import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import DirectusErrorCodeType from '../types/directus-error-code.type';

import NavigateToLogin from './navigate-to-login.component';

// TODO: treat FORBIDDEN error extension
function checkIfItsAForbiddenError(code: DirectusErrorCodeType) {
  // Directus Errors: https://docs.directus.io/reference/introduction/#error-codes
  if (
    code === DirectusForbiddenErrorCode.INVALID_CREDENTIALS ||
    code === DirectusForbiddenErrorCode.TOKEN_EXPIRED ||
    code === DirectusForbiddenErrorCode.INVALID_TOKEN
  ) {
    return true;
  }

  return false;
}

function ErrorFallback({ error }: { error: GraphQLError }) {
  const { code } = error.extensions!;

  if (checkIfItsAForbiddenError(code)) return <NavigateToLogin />;

  return (
    <div>{error?.message}</div>
  );
}

export default function DirectusErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}