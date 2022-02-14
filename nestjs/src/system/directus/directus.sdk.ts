import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
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
  /** ISO8601 Date values */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};



export type Mutation = {
  __typename?: 'Mutation';
  create_cat_items?: Maybe<Array<Maybe<Cat>>>;
  create_cat_item?: Maybe<Cat>;
  update_cat_items?: Maybe<Array<Maybe<Cat>>>;
  update_cat_item?: Maybe<Cat>;
  delete_cat_items?: Maybe<DeleteMany>;
  delete_cat_item?: Maybe<DeleteOne>;
};


export type MutationCreateCatItemsArgs = {
  filter?: Maybe<CatFilter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  data?: Maybe<Array<CreateCatInput>>;
};


export type MutationCreateCatItemArgs = {
  data: CreateCatInput;
};


export type MutationUpdateCatItemsArgs = {
  filter?: Maybe<CatFilter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  ids: Array<Maybe<Scalars['ID']>>;
  data: UpdateCatInput;
};


export type MutationUpdateCatItemArgs = {
  id: Scalars['ID'];
  data: UpdateCatInput;
};


export type MutationDeleteCatItemsArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationDeleteCatItemArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  cat?: Maybe<Array<Maybe<Cat>>>;
  cat_by_id?: Maybe<Cat>;
  cat_aggregated?: Maybe<Array<Maybe<CatAggregated>>>;
};


export type QueryCatArgs = {
  filter?: Maybe<CatFilter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};


export type QueryCatByIdArgs = {
  id: Scalars['ID'];
};


export type QueryCatAggregatedArgs = {
  groupBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<CatFilter>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BooleanFilterOperators = {
  _eq?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
};

export type Cat = {
  __typename?: 'cat';
  id?: Maybe<Scalars['ID']>;
  user_created?: Maybe<DirectusUsers>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<DatetimeFunctions>;
  user_updated?: Maybe<DirectusUsers>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<DatetimeFunctions>;
  name?: Maybe<Scalars['String']>;
};


export type CatUserCreatedArgs = {
  filter?: Maybe<DirectusUsersFilter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};


export type CatUserUpdatedArgs = {
  filter?: Maybe<DirectusUsersFilter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type CatAggregated = {
  __typename?: 'cat_aggregated';
  group?: Maybe<Scalars['JSON']>;
  avg?: Maybe<CatAggregatedFields>;
  sum?: Maybe<CatAggregatedFields>;
  count?: Maybe<CatAggregatedFields>;
  countDistinct?: Maybe<CatAggregatedFields>;
  avgDistinct?: Maybe<CatAggregatedFields>;
  sumDistinct?: Maybe<CatAggregatedFields>;
  min?: Maybe<CatAggregatedFields>;
  max?: Maybe<CatAggregatedFields>;
};

export type CatAggregatedFields = {
  __typename?: 'cat_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type CatFilter = {
  id?: Maybe<NumberFilterOperators>;
  user_created?: Maybe<DirectusUsersFilter>;
  date_created?: Maybe<DateFilterOperators>;
  date_created_func?: Maybe<DatetimeFunctionFilterOperators>;
  user_updated?: Maybe<DirectusUsersFilter>;
  date_updated?: Maybe<DateFilterOperators>;
  date_updated_func?: Maybe<DatetimeFunctionFilterOperators>;
  name?: Maybe<StringFilterOperators>;
  _and?: Maybe<Array<Maybe<CatFilter>>>;
  _or?: Maybe<Array<Maybe<CatFilter>>>;
};

export type CreateCatInput = {
  id?: Maybe<Scalars['ID']>;
  user_created?: Maybe<CreateDirectusUsersInput>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<DatetimeFunctionsInput>;
  user_updated?: Maybe<CreateDirectusUsersInput>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<DatetimeFunctionsInput>;
  name?: Maybe<Scalars['String']>;
};

export type CreateDirectusFilesInput = {
  id?: Maybe<Scalars['ID']>;
  storage: Scalars['String'];
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  folder?: Maybe<CreateDirectusFoldersInput>;
  uploaded_by?: Maybe<CreateDirectusUsersInput>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func?: Maybe<DatetimeFunctionsInput>;
  modified_by?: Maybe<CreateDirectusUsersInput>;
  modified_on: Scalars['Date'];
  modified_on_func?: Maybe<DatetimeFunctionsInput>;
  charset?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  metadata?: Maybe<Scalars['JSON']>;
};

export type CreateDirectusFoldersInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: Maybe<CreateDirectusFoldersInput>;
};

export type CreateDirectusRolesInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  icon: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  ip_access?: Maybe<Array<Maybe<Scalars['String']>>>;
  enforce_tfa: Scalars['Boolean'];
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  users?: Maybe<Array<Maybe<CreateDirectusUsersInput>>>;
};

export type CreateDirectusUsersInput = {
  id?: Maybe<Scalars['ID']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  avatar?: Maybe<CreateDirectusFilesInput>;
  language?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  tfa_secret?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  role?: Maybe<CreateDirectusRolesInput>;
  token?: Maybe<Scalars['String']>;
  last_access?: Maybe<Scalars['Date']>;
  last_access_func?: Maybe<DatetimeFunctionsInput>;
  last_page?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  external_identifier?: Maybe<Scalars['String']>;
  auth_data?: Maybe<Scalars['JSON']>;
  email_notifications?: Maybe<Scalars['Boolean']>;
};

export type DateFilterOperators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
};

export type DatetimeFunctionFilterOperators = {
  year?: Maybe<NumberFilterOperators>;
  month?: Maybe<NumberFilterOperators>;
  week?: Maybe<NumberFilterOperators>;
  day?: Maybe<NumberFilterOperators>;
  weekday?: Maybe<NumberFilterOperators>;
  hour?: Maybe<NumberFilterOperators>;
  minute?: Maybe<NumberFilterOperators>;
  second?: Maybe<NumberFilterOperators>;
};

export type DatetimeFunctions = {
  __typename?: 'datetime_functions';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
};

export type DatetimeFunctionsInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
};

export type DeleteMany = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']>>;
};

export type DeleteOne = {
  __typename?: 'delete_one';
  id: Scalars['ID'];
};

export type DirectusFiles = {
  __typename?: 'directus_files';
  id?: Maybe<Scalars['ID']>;
  storage: Scalars['String'];
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  folder?: Maybe<DirectusFolders>;
  uploaded_by?: Maybe<DirectusUsers>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func?: Maybe<DatetimeFunctions>;
  modified_by?: Maybe<DirectusUsers>;
  modified_on: Scalars['Date'];
  modified_on_func?: Maybe<DatetimeFunctions>;
  charset?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  metadata?: Maybe<Scalars['JSON']>;
};


export type DirectusFilesFolderArgs = {
  filter?: Maybe<DirectusFoldersFilter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};


export type DirectusFilesUploadedByArgs = {
  filter?: Maybe<DirectusUsersFilter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};


export type DirectusFilesModifiedByArgs = {
  filter?: Maybe<DirectusUsersFilter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type DirectusFilesFilter = {
  id?: Maybe<StringFilterOperators>;
  storage?: Maybe<StringFilterOperators>;
  filename_disk?: Maybe<StringFilterOperators>;
  filename_download?: Maybe<StringFilterOperators>;
  title?: Maybe<StringFilterOperators>;
  type?: Maybe<StringFilterOperators>;
  folder?: Maybe<DirectusFoldersFilter>;
  uploaded_by?: Maybe<DirectusUsersFilter>;
  uploaded_on?: Maybe<DateFilterOperators>;
  uploaded_on_func?: Maybe<DatetimeFunctionFilterOperators>;
  modified_by?: Maybe<DirectusUsersFilter>;
  modified_on?: Maybe<DateFilterOperators>;
  modified_on_func?: Maybe<DatetimeFunctionFilterOperators>;
  charset?: Maybe<StringFilterOperators>;
  filesize?: Maybe<NumberFilterOperators>;
  width?: Maybe<NumberFilterOperators>;
  height?: Maybe<NumberFilterOperators>;
  duration?: Maybe<NumberFilterOperators>;
  embed?: Maybe<StringFilterOperators>;
  description?: Maybe<StringFilterOperators>;
  location?: Maybe<StringFilterOperators>;
  tags?: Maybe<StringFilterOperators>;
  metadata?: Maybe<StringFilterOperators>;
  _and?: Maybe<Array<Maybe<DirectusFilesFilter>>>;
  _or?: Maybe<Array<Maybe<DirectusFilesFilter>>>;
};

export type DirectusFolders = {
  __typename?: 'directus_folders';
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: Maybe<DirectusFolders>;
};


export type DirectusFoldersParentArgs = {
  filter?: Maybe<DirectusFoldersFilter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type DirectusFoldersFilter = {
  id?: Maybe<StringFilterOperators>;
  name?: Maybe<StringFilterOperators>;
  parent?: Maybe<DirectusFoldersFilter>;
  _and?: Maybe<Array<Maybe<DirectusFoldersFilter>>>;
  _or?: Maybe<Array<Maybe<DirectusFoldersFilter>>>;
};

export type DirectusRoles = {
  __typename?: 'directus_roles';
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  icon: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  ip_access?: Maybe<Array<Maybe<Scalars['String']>>>;
  enforce_tfa: Scalars['Boolean'];
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  users?: Maybe<Array<Maybe<DirectusUsers>>>;
};


export type DirectusRolesUsersArgs = {
  filter?: Maybe<DirectusUsersFilter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type DirectusRolesFilter = {
  id?: Maybe<StringFilterOperators>;
  name?: Maybe<StringFilterOperators>;
  icon?: Maybe<StringFilterOperators>;
  description?: Maybe<StringFilterOperators>;
  ip_access?: Maybe<StringFilterOperators>;
  enforce_tfa?: Maybe<BooleanFilterOperators>;
  admin_access?: Maybe<BooleanFilterOperators>;
  app_access?: Maybe<BooleanFilterOperators>;
  users?: Maybe<DirectusUsersFilter>;
  _and?: Maybe<Array<Maybe<DirectusRolesFilter>>>;
  _or?: Maybe<Array<Maybe<DirectusRolesFilter>>>;
};

export type DirectusUsers = {
  __typename?: 'directus_users';
  id?: Maybe<Scalars['ID']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  avatar?: Maybe<DirectusFiles>;
  language?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  tfa_secret?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  role?: Maybe<DirectusRoles>;
  token?: Maybe<Scalars['String']>;
  last_access?: Maybe<Scalars['Date']>;
  last_access_func?: Maybe<DatetimeFunctions>;
  last_page?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  external_identifier?: Maybe<Scalars['String']>;
  auth_data?: Maybe<Scalars['JSON']>;
  email_notifications?: Maybe<Scalars['Boolean']>;
};


export type DirectusUsersAvatarArgs = {
  filter?: Maybe<DirectusFilesFilter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};


export type DirectusUsersRoleArgs = {
  filter?: Maybe<DirectusRolesFilter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type DirectusUsersFilter = {
  id?: Maybe<StringFilterOperators>;
  first_name?: Maybe<StringFilterOperators>;
  last_name?: Maybe<StringFilterOperators>;
  email?: Maybe<StringFilterOperators>;
  password?: Maybe<StringFilterOperators>;
  location?: Maybe<StringFilterOperators>;
  title?: Maybe<StringFilterOperators>;
  description?: Maybe<StringFilterOperators>;
  tags?: Maybe<StringFilterOperators>;
  avatar?: Maybe<DirectusFilesFilter>;
  language?: Maybe<StringFilterOperators>;
  theme?: Maybe<StringFilterOperators>;
  tfa_secret?: Maybe<StringFilterOperators>;
  status?: Maybe<StringFilterOperators>;
  role?: Maybe<DirectusRolesFilter>;
  token?: Maybe<StringFilterOperators>;
  last_access?: Maybe<DateFilterOperators>;
  last_access_func?: Maybe<DatetimeFunctionFilterOperators>;
  last_page?: Maybe<StringFilterOperators>;
  provider?: Maybe<StringFilterOperators>;
  external_identifier?: Maybe<StringFilterOperators>;
  auth_data?: Maybe<StringFilterOperators>;
  email_notifications?: Maybe<BooleanFilterOperators>;
  _and?: Maybe<Array<Maybe<DirectusUsersFilter>>>;
  _or?: Maybe<Array<Maybe<DirectusUsersFilter>>>;
};

export type NumberFilterOperators = {
  _eq?: Maybe<Scalars['Float']>;
  _neq?: Maybe<Scalars['Float']>;
  _in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _gt?: Maybe<Scalars['Float']>;
  _gte?: Maybe<Scalars['Float']>;
  _lt?: Maybe<Scalars['Float']>;
  _lte?: Maybe<Scalars['Float']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
};

export type StringFilterOperators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _starts_with?: Maybe<Scalars['String']>;
  _nstarts_with?: Maybe<Scalars['String']>;
  _ends_with?: Maybe<Scalars['String']>;
  _nends_with?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type UpdateCatInput = {
  id?: Maybe<Scalars['ID']>;
  user_created?: Maybe<UpdateDirectusUsersInput>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<DatetimeFunctionsInput>;
  user_updated?: Maybe<UpdateDirectusUsersInput>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<DatetimeFunctionsInput>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateDirectusFilesInput = {
  id?: Maybe<Scalars['ID']>;
  storage?: Maybe<Scalars['String']>;
  filename_disk?: Maybe<Scalars['String']>;
  filename_download?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  folder?: Maybe<UpdateDirectusFoldersInput>;
  uploaded_by?: Maybe<UpdateDirectusUsersInput>;
  uploaded_on?: Maybe<Scalars['Date']>;
  uploaded_on_func?: Maybe<DatetimeFunctionsInput>;
  modified_by?: Maybe<UpdateDirectusUsersInput>;
  modified_on?: Maybe<Scalars['Date']>;
  modified_on_func?: Maybe<DatetimeFunctionsInput>;
  charset?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  metadata?: Maybe<Scalars['JSON']>;
};

export type UpdateDirectusFoldersInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<UpdateDirectusFoldersInput>;
};

export type UpdateDirectusRolesInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ip_access?: Maybe<Array<Maybe<Scalars['String']>>>;
  enforce_tfa?: Maybe<Scalars['Boolean']>;
  admin_access?: Maybe<Scalars['Boolean']>;
  app_access?: Maybe<Scalars['Boolean']>;
  users?: Maybe<Array<Maybe<UpdateDirectusUsersInput>>>;
};

export type UpdateDirectusUsersInput = {
  id?: Maybe<Scalars['ID']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  avatar?: Maybe<UpdateDirectusFilesInput>;
  language?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  tfa_secret?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  role?: Maybe<UpdateDirectusRolesInput>;
  token?: Maybe<Scalars['String']>;
  last_access?: Maybe<Scalars['Date']>;
  last_access_func?: Maybe<DatetimeFunctionsInput>;
  last_page?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  external_identifier?: Maybe<Scalars['String']>;
  auth_data?: Maybe<Scalars['JSON']>;
  email_notifications?: Maybe<Scalars['Boolean']>;
};

export type FindAllCatsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllCatsQuery = (
  { __typename?: 'Query' }
  & { cat?: Maybe<Array<Maybe<(
    { __typename?: 'cat' }
    & Pick<Cat, 'id' | 'name'>
  )>>> }
);


export const FindAllCatsDocument = gql`
    query findAllCats {
  cat {
    id
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();
const FindAllCatsDocumentString = print(FindAllCatsDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    findAllCats(variables?: FindAllCatsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: FindAllCatsQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<FindAllCatsQuery>(FindAllCatsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findAllCats');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;