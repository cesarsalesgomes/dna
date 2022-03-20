interface GraphQLError {
  message: string;
  locations?: { line: number; column: number; }[];
  path?: string[];
  extensions?: any;
}

export default GraphQLError;