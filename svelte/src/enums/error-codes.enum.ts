/* eslint-disable no-shadow */

/**
 * Directus Errors: https://docs.directus.io/reference/introduction/#error-codes
 */

// 4xx: Client errors codes

export enum ClientErrorCodes {
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  INVALID_TOKEN = 'INVALID_TOKEN',
  FORBIDDEN = 'FORBIDDEN',
  GRAPHQL_VALIDATION_EXCEPTION = 'GRAPHQL_VALIDATION_EXCEPTION'
}

// 5xx: Server errors codes

export enum ServerErrorCodes {
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR'
}
