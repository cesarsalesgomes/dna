/**
 * Directus Errors: https://docs.directus.io/reference/introduction/#error-codes
 */

// 4xx: Client errors codes

export enum ForbiddenErrorCodes {
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  INVALID_TOKEN = 'INVALID_TOKEN'
}

// 5xx: Server errors codes

export enum ServerErrorCodes {
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR'
}