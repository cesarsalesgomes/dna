import DirectusErrorCodeType from '../directus-error-code.type';

interface GraphQLError {
  message: string;
  locations?: { line: number; column: number; }[];
  path?: string[];
  extensions?: { code: DirectusErrorCodeType };
}

export default GraphQLError;