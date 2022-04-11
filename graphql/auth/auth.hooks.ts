import { useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost/graphql/system", {
    method: "POST",
    ...({"headers":{"Content-Type":"application/json","Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI5ZGY0ZTdhLTdlYjItNGZmMS04ZWJmLWZkYjFhNTI3ODc2YiIsInJvbGUiOiJkMjYxOTJiMC0xMzk4LTRhNTQtOTAxYi1jZGRiNTYzOGZlYTciLCJhcHBfYWNjZXNzIjp0cnVlLCJhZG1pbl9hY2Nlc3MiOnRydWUsImlhdCI6MTY0OTY3NjExNiwiZXhwIjoxNjQ5NzYyNTE2LCJpc3MiOiJkaXJlY3R1cyJ9.p0yGSfw7ViZZf358zEBzRzN7LlRh2G-ElvL3tNYtQ4U"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
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
  auth_login?: Maybe<Auth_Tokens>;
  auth_logout?: Maybe<Scalars['Boolean']>;
  auth_password_request?: Maybe<Scalars['Boolean']>;
  auth_password_reset?: Maybe<Scalars['Boolean']>;
  auth_refresh?: Maybe<Auth_Tokens>;
  users_invite_accept?: Maybe<Scalars['Boolean']>;
  users_me_tfa_disable?: Maybe<Scalars['Boolean']>;
  users_me_tfa_enable?: Maybe<Scalars['Boolean']>;
  users_me_tfa_generate?: Maybe<Users_Me_Tfa_Generate_Data>;
  utils_cache_clear?: Maybe<Scalars['Void']>;
  utils_hash_generate?: Maybe<Scalars['String']>;
  utils_hash_verify?: Maybe<Scalars['Boolean']>;
  utils_revert?: Maybe<Scalars['Boolean']>;
  utils_sort?: Maybe<Scalars['Boolean']>;
};


export type MutationAuth_LoginArgs = {
  email: Scalars['String'];
  mode?: InputMaybe<Auth_Mode>;
  otp?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationAuth_LogoutArgs = {
  refresh_token?: InputMaybe<Scalars['String']>;
};


export type MutationAuth_Password_RequestArgs = {
  email: Scalars['String'];
  reset_url?: InputMaybe<Scalars['String']>;
};


export type MutationAuth_Password_ResetArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationAuth_RefreshArgs = {
  mode?: InputMaybe<Auth_Mode>;
  refresh_token?: InputMaybe<Scalars['String']>;
};


export type MutationUsers_Invite_AcceptArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationUsers_Me_Tfa_DisableArgs = {
  otp: Scalars['String'];
};


export type MutationUsers_Me_Tfa_EnableArgs = {
  otp: Scalars['String'];
  secret: Scalars['String'];
};


export type MutationUsers_Me_Tfa_GenerateArgs = {
  password: Scalars['String'];
};


export type MutationUtils_Hash_GenerateArgs = {
  string: Scalars['String'];
};


export type MutationUtils_Hash_VerifyArgs = {
  hash: Scalars['String'];
  string: Scalars['String'];
};


export type MutationUtils_RevertArgs = {
  revision: Scalars['ID'];
};


export type MutationUtils_SortArgs = {
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
  server_info?: Maybe<Server_Info>;
  server_ping?: Maybe<Scalars['String']>;
  server_specs_graphql?: Maybe<Scalars['String']>;
  server_specs_oas?: Maybe<Scalars['JSON']>;
};


export type QueryServer_Specs_GraphqlArgs = {
  scope?: InputMaybe<Graphql_Sdl_Scope>;
};

export enum Auth_Mode {
  Cookie = 'cookie',
  Json = 'json'
}

export type Auth_Tokens = {
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

export enum Graphql_Sdl_Scope {
  Items = 'items',
  System = 'system'
}

export type Server_Info = {
  __typename?: 'server_info';
  custom_css?: Maybe<Scalars['String']>;
  project_background?: Maybe<Scalars['String']>;
  project_color?: Maybe<Scalars['String']>;
  project_foreground?: Maybe<Scalars['String']>;
  project_logo?: Maybe<Scalars['String']>;
  project_name?: Maybe<Scalars['String']>;
  project_note?: Maybe<Scalars['String']>;
};

export type Users_Me_Tfa_Generate_Data = {
  __typename?: 'users_me_tfa_generate_data';
  otpauth_url?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
};

export type AuthLoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthLoginMutation = { __typename?: 'Mutation', auth_login?: { __typename?: 'auth_tokens', access_token?: string | null, refresh_token?: string | null } | null };


export const AuthLoginDocument = `
    mutation authLogin($email: String!, $password: String!) {
  auth_login(email: $email, password: $password) {
    access_token
    refresh_token
  }
}
    `;
export const useAuthLoginMutation = <
      TError = {message:string;locations?:{line:number;column:number;}[];path?:string[];extensions?:any;},
      TContext = unknown
    >(options?: UseMutationOptions<AuthLoginMutation, TError, AuthLoginMutationVariables, TContext>) =>
    useMutation<AuthLoginMutation, TError, AuthLoginMutationVariables, TContext>(
      ['authLogin'],
      (variables?: AuthLoginMutationVariables) => fetcher<AuthLoginMutation, AuthLoginMutationVariables>(AuthLoginDocument, variables)(),
      options
    );