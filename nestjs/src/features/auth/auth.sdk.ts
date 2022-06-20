import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** Represents NULL values */
  Void: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  auth_login?: Maybe<AuthTokens>;
  auth_logout?: Maybe<Scalars['Boolean']>;
  auth_password_request?: Maybe<Scalars['Boolean']>;
  auth_password_reset?: Maybe<Scalars['Boolean']>;
  auth_refresh?: Maybe<AuthTokens>;
  users_invite_accept?: Maybe<Scalars['Boolean']>;
  users_me_tfa_disable?: Maybe<Scalars['Boolean']>;
  users_me_tfa_enable?: Maybe<Scalars['Boolean']>;
  users_me_tfa_generate?: Maybe<UsersMeTfaGenerateData>;
  utils_cache_clear?: Maybe<Scalars['Void']>;
  utils_hash_generate?: Maybe<Scalars['String']>;
  utils_hash_verify?: Maybe<Scalars['Boolean']>;
  utils_revert?: Maybe<Scalars['Boolean']>;
  utils_sort?: Maybe<Scalars['Boolean']>;
};


export type MutationAuthLoginArgs = {
  email: Scalars['String'];
  mode?: InputMaybe<AuthMode>;
  otp?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationAuthLogoutArgs = {
  refresh_token?: InputMaybe<Scalars['String']>;
};


export type MutationAuthPasswordRequestArgs = {
  email: Scalars['String'];
  reset_url?: InputMaybe<Scalars['String']>;
};


export type MutationAuthPasswordResetArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationAuthRefreshArgs = {
  mode?: InputMaybe<AuthMode>;
  refresh_token?: InputMaybe<Scalars['String']>;
};


export type MutationUsersInviteAcceptArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationUsersMeTfaDisableArgs = {
  otp: Scalars['String'];
};


export type MutationUsersMeTfaEnableArgs = {
  otp: Scalars['String'];
  secret: Scalars['String'];
};


export type MutationUsersMeTfaGenerateArgs = {
  password: Scalars['String'];
};


export type MutationUtilsHashGenerateArgs = {
  string: Scalars['String'];
};


export type MutationUtilsHashVerifyArgs = {
  hash: Scalars['String'];
  string: Scalars['String'];
};


export type MutationUtilsRevertArgs = {
  revision: Scalars['ID'];
};


export type MutationUtilsSortArgs = {
  collection: Scalars['String'];
  item: Scalars['ID'];
  to: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  /** There's no data to query. */
  _empty?: Maybe<Scalars['Void']>;
  extensions?: Maybe<Extensions>;
  server_health?: Maybe<Scalars['JSON']>;
  server_info?: Maybe<ServerInfo>;
  server_ping?: Maybe<Scalars['String']>;
  server_specs_graphql?: Maybe<Scalars['String']>;
  server_specs_oas?: Maybe<Scalars['JSON']>;
};


export type QueryServerSpecsGraphqlArgs = {
  scope?: InputMaybe<GraphqlSdlScope>;
};

export enum AuthMode {
  Cookie = 'cookie',
  Json = 'json'
}

export type AuthTokens = {
  __typename?: 'auth_tokens';
  access_token?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['Int']>;
  refresh_token?: Maybe<Scalars['String']>;
};

export type Extensions = {
  __typename?: 'extensions';
  displays?: Maybe<Array<Maybe<Scalars['String']>>>;
  interfaces?: Maybe<Array<Maybe<Scalars['String']>>>;
  layouts?: Maybe<Array<Maybe<Scalars['String']>>>;
  modules?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum GraphqlSdlScope {
  Items = 'items',
  System = 'system'
}

export type ServerInfo = {
  __typename?: 'server_info';
  custom_css?: Maybe<Scalars['String']>;
  project_background?: Maybe<Scalars['String']>;
  project_color?: Maybe<Scalars['String']>;
  project_foreground?: Maybe<Scalars['String']>;
  project_logo?: Maybe<Scalars['String']>;
  project_name?: Maybe<Scalars['String']>;
  project_note?: Maybe<Scalars['String']>;
};

export type UsersMeTfaGenerateData = {
  __typename?: 'users_me_tfa_generate_data';
  otpauth_url?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
};

export type AuthLoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthLoginMutation = { __typename?: 'Mutation', auth_login?: { __typename?: 'auth_tokens', access_token?: string | null, refresh_token?: string | null } | null };


export const AuthLoginDocument = gql`
    mutation authLogin($email: String!, $password: String!) {
  auth_login(email: $email, password: $password) {
    access_token
    refresh_token
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const AuthLoginDocumentString = print(AuthLoginDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    authLogin(variables: AuthLoginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: AuthLoginMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AuthLoginMutation>(AuthLoginDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'authLogin', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;