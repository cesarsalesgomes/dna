import type DirectusErrorCodeType from '../types/error-codes.type';

interface GraphQLError {
  message: string;
  locations?: { line: number; column: number; }[];
  path?: string[];
  extensions?: { code: DirectusErrorCodeType };
}

export default GraphQLError;
