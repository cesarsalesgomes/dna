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
  Date: any;
  GraphQLStringOrFloat: any;
  Hash: any;
  JSON: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  create_bird_item?: Maybe<Bird>;
  create_bird_items: Array<Bird>;
  create_cat_item?: Maybe<Cat>;
  create_cat_items: Array<Cat>;
  delete_bird_item?: Maybe<DeleteOne>;
  delete_bird_items?: Maybe<DeleteMany>;
  delete_cat_item?: Maybe<DeleteOne>;
  delete_cat_items?: Maybe<DeleteMany>;
  update_bird_batch: Array<Bird>;
  update_bird_item?: Maybe<Bird>;
  update_bird_items: Array<Bird>;
  update_cat_batch: Array<Cat>;
  update_cat_item?: Maybe<Cat>;
  update_cat_items: Array<Cat>;
};


export type MutationCreateBirdItemArgs = {
  data: CreateBirdInput;
};


export type MutationCreateBirdItemsArgs = {
  data?: InputMaybe<Array<CreateBirdInput>>;
  filter?: InputMaybe<BirdFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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


export type MutationDeleteBirdItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBirdItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDeleteCatItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCatItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationUpdateBirdBatchArgs = {
  data?: InputMaybe<Array<UpdateBirdInput>>;
  filter?: InputMaybe<BirdFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdateBirdItemArgs = {
  data: UpdateBirdInput;
  id: Scalars['ID'];
};


export type MutationUpdateBirdItemsArgs = {
  data: UpdateBirdInput;
  filter?: InputMaybe<BirdFilter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdateCatBatchArgs = {
  data?: InputMaybe<Array<UpdateCatInput>>;
  filter?: InputMaybe<CatFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type Query = {
  __typename?: 'Query';
  bird: Array<Bird>;
  bird_aggregated: Array<BirdAggregated>;
  bird_by_id?: Maybe<Bird>;
  cat: Array<Cat>;
  cat_aggregated: Array<CatAggregated>;
  cat_by_id?: Maybe<Cat>;
};


export type QueryBirdArgs = {
  filter?: InputMaybe<BirdFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBirdAggregatedArgs = {
  filter?: InputMaybe<BirdFilter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBirdByIdArgs = {
  id: Scalars['ID'];
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

export type Bird = {
  __typename?: 'bird';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<DatetimeFunctions>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type BirdAggregated = {
  __typename?: 'bird_aggregated';
  avg?: Maybe<BirdAggregatedFields>;
  avgDistinct?: Maybe<BirdAggregatedFields>;
  count?: Maybe<BirdAggregatedCount>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<BirdAggregatedCount>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<BirdAggregatedFields>;
  min?: Maybe<BirdAggregatedFields>;
  sum?: Maybe<BirdAggregatedFields>;
  sumDistinct?: Maybe<BirdAggregatedFields>;
};

export type BirdAggregatedCount = {
  __typename?: 'bird_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type BirdAggregatedFields = {
  __typename?: 'bird_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type BirdFilter = {
  _and?: InputMaybe<Array<InputMaybe<BirdFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<BirdFilter>>>;
  date_created?: InputMaybe<DateFilterOperators>;
  date_created_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  id?: InputMaybe<NumberFilterOperators>;
  name?: InputMaybe<StringFilterOperators>;
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
  id: Scalars['ID'];
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
  count?: Maybe<CatAggregatedCount>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<CatAggregatedCount>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<CatAggregatedFields>;
  min?: Maybe<CatAggregatedFields>;
  sum?: Maybe<CatAggregatedFields>;
  sumDistinct?: Maybe<CatAggregatedFields>;
};

export type CatAggregatedCount = {
  __typename?: 'cat_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
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

export type CountFunctionFilterOperators = {
  count?: InputMaybe<NumberFilterOperators>;
};

export type CountFunctions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type CreateBirdInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateCatInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
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
  filesize?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<CreateDirectusFoldersInput>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  modified_by?: InputMaybe<CreateDirectusUsersInput>;
  modified_on?: InputMaybe<Scalars['Date']>;
  storage: Scalars['String'];
  tags?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<CreateDirectusUsersInput>;
  uploaded_on?: InputMaybe<Scalars['Date']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type CreateDirectusFoldersInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: InputMaybe<CreateDirectusFoldersInput>;
};

export type CreateDirectusRolesInput = {
  admin_access: Scalars['Boolean'];
  app_access?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon?: InputMaybe<Scalars['String']>;
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
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['Hash']>;
  provider?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<CreateDirectusRolesInput>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tfa_secret?: InputMaybe<Scalars['Hash']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['Hash']>;
};

export type DateFilterOperators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  filesize?: Maybe<Scalars['String']>;
  folder?: Maybe<DirectusFolders>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  metadata_func?: Maybe<CountFunctions>;
  modified_by?: Maybe<DirectusUsers>;
  modified_on?: Maybe<Scalars['Date']>;
  modified_on_func?: Maybe<DatetimeFunctions>;
  storage: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<CountFunctions>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uploaded_by?: Maybe<DirectusUsers>;
  uploaded_on?: Maybe<Scalars['Date']>;
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
  filesize?: InputMaybe<StringFilterOperators>;
  folder?: InputMaybe<DirectusFoldersFilter>;
  height?: InputMaybe<NumberFilterOperators>;
  id?: InputMaybe<StringFilterOperators>;
  location?: InputMaybe<StringFilterOperators>;
  metadata?: InputMaybe<StringFilterOperators>;
  metadata_func?: InputMaybe<CountFunctionFilterOperators>;
  modified_by?: InputMaybe<DirectusUsersFilter>;
  modified_on?: InputMaybe<DateFilterOperators>;
  modified_on_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  storage?: InputMaybe<StringFilterOperators>;
  tags?: InputMaybe<StringFilterOperators>;
  tags_func?: InputMaybe<CountFunctionFilterOperators>;
  title?: InputMaybe<StringFilterOperators>;
  type?: InputMaybe<StringFilterOperators>;
  uploaded_by?: InputMaybe<DirectusUsersFilter>;
  uploaded_on?: InputMaybe<DateFilterOperators>;
  uploaded_on_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  width?: InputMaybe<NumberFilterOperators>;
};

export type DirectusFolders = {
  __typename?: 'directus_folders';
  id: Scalars['ID'];
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
  app_access?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ip_access?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: Maybe<Array<Maybe<DirectusUsers>>>;
  users_func?: Maybe<CountFunctions>;
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
  users_func?: InputMaybe<CountFunctionFilterOperators>;
};

export type DirectusUsers = {
  __typename?: 'directus_users';
  auth_data?: Maybe<Scalars['JSON']>;
  auth_data_func?: Maybe<CountFunctions>;
  avatar?: Maybe<DirectusFiles>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_notifications?: Maybe<Scalars['Boolean']>;
  external_identifier?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  last_access?: Maybe<Scalars['Date']>;
  last_access_func?: Maybe<DatetimeFunctions>;
  last_name?: Maybe<Scalars['String']>;
  last_page?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['Hash']>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<DirectusRoles>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<CountFunctions>;
  tfa_secret?: Maybe<Scalars['Hash']>;
  theme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['Hash']>;
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
  auth_data_func?: InputMaybe<CountFunctionFilterOperators>;
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
  password?: InputMaybe<HashFilterOperators>;
  provider?: InputMaybe<StringFilterOperators>;
  role?: InputMaybe<DirectusRolesFilter>;
  status?: InputMaybe<StringFilterOperators>;
  tags?: InputMaybe<StringFilterOperators>;
  tags_func?: InputMaybe<CountFunctionFilterOperators>;
  tfa_secret?: InputMaybe<HashFilterOperators>;
  theme?: InputMaybe<StringFilterOperators>;
  title?: InputMaybe<StringFilterOperators>;
  token?: InputMaybe<HashFilterOperators>;
};

export type HashFilterOperators = {
  _empty?: InputMaybe<Scalars['Boolean']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type NumberFilterOperators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type StringFilterOperators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _icontains?: InputMaybe<Scalars['String']>;
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

export type UpdateBirdInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateCatInput = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_updated?: InputMaybe<Scalars['Date']>;
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
  filesize?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<UpdateDirectusFoldersInput>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  modified_by?: InputMaybe<UpdateDirectusUsersInput>;
  modified_on?: InputMaybe<Scalars['Date']>;
  storage?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<UpdateDirectusUsersInput>;
  uploaded_on?: InputMaybe<Scalars['Date']>;
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
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['Hash']>;
  provider?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UpdateDirectusRolesInput>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tfa_secret?: InputMaybe<Scalars['Hash']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['Hash']>;
};

export type CatByIdQueryVariables = Exact<{
  data: Scalars['ID'];
}>;


export type CatByIdQuery = { __typename?: 'Query', cat_by_id?: { __typename?: 'cat', id: string, name?: string | null } | null };

export type FindAllCatsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllCatsQuery = { __typename?: 'Query', cat: Array<{ __typename?: 'cat', id: string, name?: string | null }> };


export const CatByIdDocument = gql`
    query catById($data: ID!) {
  cat_by_id(id: $data) {
    id
    name
  }
}
    `;
export const FindAllCatsDocument = gql`
    query findAllCats {
  cat {
    id
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const CatByIdDocumentString = print(CatByIdDocument);
const FindAllCatsDocumentString = print(FindAllCatsDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    catById(variables: CatByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: CatByIdQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CatByIdQuery>(CatByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'catById', 'query');
    },
    findAllCats(variables?: FindAllCatsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: FindAllCatsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<FindAllCatsQuery>(FindAllCatsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findAllCats', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;