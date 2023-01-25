/**
 * Graphql Codegen does not provide an alternative yet to pass options to custom fetch requests (Confirmed
 * in the open issue repo link: https://github.com/dotansimha/graphql-code-generator/issues/7035).
 *
 * Until then, the workaround found was the creation of a global object which should be defined before sending a request when new options are needed,
 * where it will be reset at the end of it.
 */

export const DirectusRequestOptions: { options: RequestInit['headers'] } = { options: {} };

export const resetDirectusRequestOptions = () => { DirectusRequestOptions.options = {}; };
