import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
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
  /** ISO8601 Date values */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  create_cat_item?: Maybe<Cat>;
  create_cat_items?: Maybe<Array<Maybe<Cat>>>;
  create_restaurant_item?: Maybe<Restaurant>;
  create_restaurant_items?: Maybe<Array<Maybe<Restaurant>>>;
  delete_cat_item?: Maybe<DeleteOne>;
  delete_cat_items?: Maybe<DeleteMany>;
  delete_restaurant_item?: Maybe<DeleteOne>;
  delete_restaurant_items?: Maybe<DeleteMany>;
  update_cat_item?: Maybe<Cat>;
  update_cat_items?: Maybe<Array<Maybe<Cat>>>;
  update_restaurant_item?: Maybe<Restaurant>;
  update_restaurant_items?: Maybe<Array<Maybe<Restaurant>>>;
};


export type MutationCreateCatItemArgs = {
  data: CreateCatInput;
};


export type MutationCreateCatItemsArgs = {
  data?: InputMaybe<Array<CreateCatInput>>;
  filter?: InputMaybe<CatFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreateRestaurantItemArgs = {
  data: CreateRestaurantInput;
};


export type MutationCreateRestaurantItemsArgs = {
  data?: InputMaybe<Array<CreateRestaurantInput>>;
  filter?: InputMaybe<RestaurantFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationDeleteCatItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCatItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDeleteRestaurantItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRestaurantItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationUpdateCatItemArgs = {
  data: UpdateCatInput;
  id: Scalars['ID'];
};


export type MutationUpdateCatItemsArgs = {
  data: UpdateCatInput;
  filter?: InputMaybe<CatFilter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdateRestaurantItemArgs = {
  data: UpdateRestaurantInput;
  id: Scalars['ID'];
};


export type MutationUpdateRestaurantItemsArgs = {
  data: UpdateRestaurantInput;
  filter?: InputMaybe<RestaurantFilter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  cat?: Maybe<Array<Maybe<Cat>>>;
  cat_aggregated?: Maybe<Array<Maybe<CatAggregated>>>;
  cat_by_id?: Maybe<Cat>;
  restaurant?: Maybe<Array<Maybe<Restaurant>>>;
  restaurant_aggregated?: Maybe<Array<Maybe<RestaurantAggregated>>>;
  restaurant_by_id?: Maybe<Restaurant>;
};


export type QueryCatArgs = {
  filter?: InputMaybe<CatFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCatAggregatedArgs = {
  filter?: InputMaybe<CatFilter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCatByIdArgs = {
  id: Scalars['ID'];
};


export type QueryRestaurantArgs = {
  filter?: InputMaybe<RestaurantFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRestaurantAggregatedArgs = {
  filter?: InputMaybe<RestaurantFilter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRestaurantByIdArgs = {
  id: Scalars['ID'];
};

export type BooleanFilterOperators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Cat = {
  __typename?: 'cat';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<DatetimeFunctions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<DatetimeFunctions>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  user_created?: Maybe<DirectusUsers>;
  user_updated?: Maybe<DirectusUsers>;
};


export type CatUserCreatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CatUserUpdatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CatAggregated = {
  __typename?: 'cat_aggregated';
  avg?: Maybe<CatAggregatedFields>;
  avgDistinct?: Maybe<CatAggregatedFields>;
  count?: Maybe<CatAggregatedFields>;
  countDistinct?: Maybe<CatAggregatedFields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<CatAggregatedFields>;
  min?: Maybe<CatAggregatedFields>;
  sum?: Maybe<CatAggregatedFields>;
  sumDistinct?: Maybe<CatAggregatedFields>;
};

export type CatAggregatedFields = {
  __typename?: 'cat_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type CatFilter = {
  _and?: InputMaybe<Array<InputMaybe<CatFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<CatFilter>>>;
  date_created?: InputMaybe<DateFilterOperators>;
  date_created_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  date_updated?: InputMaybe<DateFilterOperators>;
  date_updated_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  id?: InputMaybe<NumberFilterOperators>;
  name?: InputMaybe<StringFilterOperators>;
  user_created?: InputMaybe<DirectusUsersFilter>;
  user_updated?: InputMaybe<DirectusUsersFilter>;
};

export type CreateCatInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<DatetimeFunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<DatetimeFunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<CreateDirectusUsersInput>;
  user_updated?: InputMaybe<CreateDirectusUsersInput>;
};

export type CreateDirectusFilesInput = {
  charset?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: InputMaybe<Scalars['Int']>;
  folder?: InputMaybe<CreateDirectusFoldersInput>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  modified_by?: InputMaybe<CreateDirectusUsersInput>;
  modified_on: Scalars['Date'];
  modified_on_func?: InputMaybe<DatetimeFunctionsInput>;
  storage: Scalars['String'];
  tags?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<CreateDirectusUsersInput>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func?: InputMaybe<DatetimeFunctionsInput>;
  width?: InputMaybe<Scalars['Int']>;
};

export type CreateDirectusFoldersInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: InputMaybe<CreateDirectusFoldersInput>;
};

export type CreateDirectusRolesInput = {
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<CreateDirectusUsersInput>>>;
};

export type CreateDirectusUsersInput = {
  auth_data?: InputMaybe<Scalars['JSON']>;
  avatar?: InputMaybe<CreateDirectusFilesInput>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  last_access?: InputMaybe<Scalars['Date']>;
  last_access_func?: InputMaybe<DatetimeFunctionsInput>;
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  role?: InputMaybe<CreateDirectusRolesInput>;
  status: Scalars['String'];
  tags?: InputMaybe<Scalars['JSON']>;
  tfa_secret?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type CreateRestaurantInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<DatetimeFunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<DatetimeFunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<CreateDirectusUsersInput>;
  user_updated?: InputMaybe<CreateDirectusUsersInput>;
};

export type DateFilterOperators = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type DatetimeFunctionFilterOperators = {
  day?: InputMaybe<NumberFilterOperators>;
  hour?: InputMaybe<NumberFilterOperators>;
  minute?: InputMaybe<NumberFilterOperators>;
  month?: InputMaybe<NumberFilterOperators>;
  second?: InputMaybe<NumberFilterOperators>;
  week?: InputMaybe<NumberFilterOperators>;
  weekday?: InputMaybe<NumberFilterOperators>;
  year?: InputMaybe<NumberFilterOperators>;
};

export type DatetimeFunctions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type DatetimeFunctionsInput = {
  day?: InputMaybe<Scalars['Int']>;
  hour?: InputMaybe<Scalars['Int']>;
  minute?: InputMaybe<Scalars['Int']>;
  month?: InputMaybe<Scalars['Int']>;
  second?: InputMaybe<Scalars['Int']>;
  week?: InputMaybe<Scalars['Int']>;
  weekday?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
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
  charset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: Maybe<Scalars['Int']>;
  folder?: Maybe<DirectusFolders>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  modified_by?: Maybe<DirectusUsers>;
  modified_on: Scalars['Date'];
  modified_on_func?: Maybe<DatetimeFunctions>;
  storage: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uploaded_by?: Maybe<DirectusUsers>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func?: Maybe<DatetimeFunctions>;
  width?: Maybe<Scalars['Int']>;
};


export type DirectusFilesFolderArgs = {
  filter?: InputMaybe<DirectusFoldersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type DirectusFilesModifiedByArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type DirectusFilesUploadedByArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DirectusFilesFilter = {
  _and?: InputMaybe<Array<InputMaybe<DirectusFilesFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusFilesFilter>>>;
  charset?: InputMaybe<StringFilterOperators>;
  description?: InputMaybe<StringFilterOperators>;
  duration?: InputMaybe<NumberFilterOperators>;
  embed?: InputMaybe<StringFilterOperators>;
  filename_disk?: InputMaybe<StringFilterOperators>;
  filename_download?: InputMaybe<StringFilterOperators>;
  filesize?: InputMaybe<NumberFilterOperators>;
  folder?: InputMaybe<DirectusFoldersFilter>;
  height?: InputMaybe<NumberFilterOperators>;
  id?: InputMaybe<StringFilterOperators>;
  location?: InputMaybe<StringFilterOperators>;
  metadata?: InputMaybe<StringFilterOperators>;
  modified_by?: InputMaybe<DirectusUsersFilter>;
  modified_on?: InputMaybe<DateFilterOperators>;
  modified_on_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  storage?: InputMaybe<StringFilterOperators>;
  tags?: InputMaybe<StringFilterOperators>;
  title?: InputMaybe<StringFilterOperators>;
  type?: InputMaybe<StringFilterOperators>;
  uploaded_by?: InputMaybe<DirectusUsersFilter>;
  uploaded_on?: InputMaybe<DateFilterOperators>;
  uploaded_on_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  width?: InputMaybe<NumberFilterOperators>;
};

export type DirectusFolders = {
  __typename?: 'directus_folders';
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: Maybe<DirectusFolders>;
};


export type DirectusFoldersParentArgs = {
  filter?: InputMaybe<DirectusFoldersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DirectusFoldersFilter = {
  _and?: InputMaybe<Array<InputMaybe<DirectusFoldersFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusFoldersFilter>>>;
  id?: InputMaybe<StringFilterOperators>;
  name?: InputMaybe<StringFilterOperators>;
  parent?: InputMaybe<DirectusFoldersFilter>;
};

export type DirectusRoles = {
  __typename?: 'directus_roles';
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  ip_access?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: Maybe<Array<Maybe<DirectusUsers>>>;
};


export type DirectusRolesUsersArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DirectusRolesFilter = {
  _and?: InputMaybe<Array<InputMaybe<DirectusRolesFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusRolesFilter>>>;
  admin_access?: InputMaybe<BooleanFilterOperators>;
  app_access?: InputMaybe<BooleanFilterOperators>;
  description?: InputMaybe<StringFilterOperators>;
  enforce_tfa?: InputMaybe<BooleanFilterOperators>;
  icon?: InputMaybe<StringFilterOperators>;
  id?: InputMaybe<StringFilterOperators>;
  ip_access?: InputMaybe<StringFilterOperators>;
  name?: InputMaybe<StringFilterOperators>;
  users?: InputMaybe<DirectusUsersFilter>;
};

export type DirectusUsers = {
  __typename?: 'directus_users';
  auth_data?: Maybe<Scalars['JSON']>;
  avatar?: Maybe<DirectusFiles>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_notifications?: Maybe<Scalars['Boolean']>;
  external_identifier?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  last_access?: Maybe<Scalars['Date']>;
  last_access_func?: Maybe<DatetimeFunctions>;
  last_name?: Maybe<Scalars['String']>;
  last_page?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  role?: Maybe<DirectusRoles>;
  status: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tfa_secret?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type DirectusUsersAvatarArgs = {
  filter?: InputMaybe<DirectusFilesFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type DirectusUsersRoleArgs = {
  filter?: InputMaybe<DirectusRolesFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DirectusUsersFilter = {
  _and?: InputMaybe<Array<InputMaybe<DirectusUsersFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusUsersFilter>>>;
  auth_data?: InputMaybe<StringFilterOperators>;
  avatar?: InputMaybe<DirectusFilesFilter>;
  description?: InputMaybe<StringFilterOperators>;
  email?: InputMaybe<StringFilterOperators>;
  email_notifications?: InputMaybe<BooleanFilterOperators>;
  external_identifier?: InputMaybe<StringFilterOperators>;
  first_name?: InputMaybe<StringFilterOperators>;
  id?: InputMaybe<StringFilterOperators>;
  language?: InputMaybe<StringFilterOperators>;
  last_access?: InputMaybe<DateFilterOperators>;
  last_access_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  last_name?: InputMaybe<StringFilterOperators>;
  last_page?: InputMaybe<StringFilterOperators>;
  location?: InputMaybe<StringFilterOperators>;
  password?: InputMaybe<StringFilterOperators>;
  provider?: InputMaybe<StringFilterOperators>;
  role?: InputMaybe<DirectusRolesFilter>;
  status?: InputMaybe<StringFilterOperators>;
  tags?: InputMaybe<StringFilterOperators>;
  tfa_secret?: InputMaybe<StringFilterOperators>;
  theme?: InputMaybe<StringFilterOperators>;
  title?: InputMaybe<StringFilterOperators>;
  token?: InputMaybe<StringFilterOperators>;
};

export type NumberFilterOperators = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Restaurant = {
  __typename?: 'restaurant';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<DatetimeFunctions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<DatetimeFunctions>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  user_created?: Maybe<DirectusUsers>;
  user_updated?: Maybe<DirectusUsers>;
};


export type RestaurantUserCreatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RestaurantUserUpdatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RestaurantAggregated = {
  __typename?: 'restaurant_aggregated';
  avg?: Maybe<RestaurantAggregatedFields>;
  avgDistinct?: Maybe<RestaurantAggregatedFields>;
  count?: Maybe<RestaurantAggregatedFields>;
  countDistinct?: Maybe<RestaurantAggregatedFields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<RestaurantAggregatedFields>;
  min?: Maybe<RestaurantAggregatedFields>;
  sum?: Maybe<RestaurantAggregatedFields>;
  sumDistinct?: Maybe<RestaurantAggregatedFields>;
};

export type RestaurantAggregatedFields = {
  __typename?: 'restaurant_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type RestaurantFilter = {
  _and?: InputMaybe<Array<InputMaybe<RestaurantFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<RestaurantFilter>>>;
  date_created?: InputMaybe<DateFilterOperators>;
  date_created_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  date_updated?: InputMaybe<DateFilterOperators>;
  date_updated_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  id?: InputMaybe<NumberFilterOperators>;
  name?: InputMaybe<StringFilterOperators>;
  status?: InputMaybe<StringFilterOperators>;
  user_created?: InputMaybe<DirectusUsersFilter>;
  user_updated?: InputMaybe<DirectusUsersFilter>;
};

export type StringFilterOperators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type UpdateCatInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<DatetimeFunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<DatetimeFunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<UpdateDirectusUsersInput>;
  user_updated?: InputMaybe<UpdateDirectusUsersInput>;
};

export type UpdateDirectusFilesInput = {
  charset?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Int']>;
  folder?: InputMaybe<UpdateDirectusFoldersInput>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  modified_by?: InputMaybe<UpdateDirectusUsersInput>;
  modified_on?: InputMaybe<Scalars['Date']>;
  modified_on_func?: InputMaybe<DatetimeFunctionsInput>;
  storage?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<UpdateDirectusUsersInput>;
  uploaded_on?: InputMaybe<Scalars['Date']>;
  uploaded_on_func?: InputMaybe<DatetimeFunctionsInput>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UpdateDirectusFoldersInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<UpdateDirectusFoldersInput>;
};

export type UpdateDirectusRolesInput = {
  admin_access?: InputMaybe<Scalars['Boolean']>;
  app_access?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa?: InputMaybe<Scalars['Boolean']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<UpdateDirectusUsersInput>>>;
};

export type UpdateDirectusUsersInput = {
  auth_data?: InputMaybe<Scalars['JSON']>;
  avatar?: InputMaybe<UpdateDirectusFilesInput>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  last_access?: InputMaybe<Scalars['Date']>;
  last_access_func?: InputMaybe<DatetimeFunctionsInput>;
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UpdateDirectusRolesInput>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tfa_secret?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type UpdateRestaurantInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<DatetimeFunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<DatetimeFunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<UpdateDirectusUsersInput>;
  user_updated?: InputMaybe<UpdateDirectusUsersInput>;
};

export type UpdateRestaurantMutationVariables = Exact<{
  id: Scalars['ID'];
  data: UpdateRestaurantInput;
}>;


export type UpdateRestaurantMutation = { __typename?: 'Mutation', update_restaurant_item?: { __typename?: 'restaurant', id?: string | null, name?: string | null, status?: string | null } | null };

export type FindRestaurantQueryVariables = Exact<{
  data: RestaurantFilter;
}>;


export type FindRestaurantQuery = { __typename?: 'Query', restaurant?: Array<{ __typename?: 'restaurant', id?: string | null, name?: string | null, status?: string | null } | null> | null };


export const UpdateRestaurantDocument = gql`
    mutation updateRestaurant($id: ID!, $data: update_restaurant_input!) {
  update_restaurant_item(id: $id, data: $data) {
    id
    name
    status
  }
}
    `;
export const FindRestaurantDocument = gql`
    query findRestaurant($data: restaurant_filter!) {
  restaurant(filter: $data) {
    id
    name
    status
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();
const UpdateRestaurantDocumentString = print(UpdateRestaurantDocument);
const FindRestaurantDocumentString = print(FindRestaurantDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    updateRestaurant(variables: UpdateRestaurantMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: UpdateRestaurantMutation | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateRestaurantMutation>(UpdateRestaurantDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateRestaurant');
    },
    findRestaurant(variables: FindRestaurantQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data?: FindRestaurantQuery | undefined; extensions?: any; headers: Dom.Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<FindRestaurantQuery>(FindRestaurantDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findRestaurant');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;