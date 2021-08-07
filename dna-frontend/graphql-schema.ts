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
  delete_cat_items?: Maybe<Delete_Many>;
  delete_cat_item?: Maybe<Delete_One>;
};


export type MutationCreate_Cat_ItemsArgs = {
  filter?: Maybe<Cat_Filter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  data?: Maybe<Array<Create_Cat_Input>>;
};


export type MutationCreate_Cat_ItemArgs = {
  data: Create_Cat_Input;
};


export type MutationUpdate_Cat_ItemsArgs = {
  filter?: Maybe<Cat_Filter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  ids: Array<Maybe<Scalars['ID']>>;
  data: Update_Cat_Input;
};


export type MutationUpdate_Cat_ItemArgs = {
  id: Scalars['ID'];
  data: Update_Cat_Input;
};


export type MutationDelete_Cat_ItemsArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationDelete_Cat_ItemArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  cat?: Maybe<Array<Maybe<Cat>>>;
  cat_by_id?: Maybe<Cat>;
};


export type QueryCatArgs = {
  filter?: Maybe<Cat_Filter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};


export type QueryCat_By_IdArgs = {
  id: Scalars['ID'];
};

export type Boolean_Filter_Operators = {
  _eq?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
};

export type Cat = {
  __typename?: 'cat';
  id?: Maybe<Scalars['ID']>;
  user_created?: Maybe<Directus_Users>;
  date_created?: Maybe<Scalars['Date']>;
  user_updated?: Maybe<Directus_Users>;
  date_updated?: Maybe<Scalars['Date']>;
  name: Scalars['String'];
};


export type CatUser_CreatedArgs = {
  filter?: Maybe<Directus_Users_Filter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};


export type CatUser_UpdatedArgs = {
  filter?: Maybe<Directus_Users_Filter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type Cat_Filter = {
  id?: Maybe<Number_Filter_Operators>;
  user_created?: Maybe<Directus_Users_Filter>;
  date_created?: Maybe<Date_Filter_Operators>;
  user_updated?: Maybe<Directus_Users_Filter>;
  date_updated?: Maybe<Date_Filter_Operators>;
  name?: Maybe<String_Filter_Operators>;
  _and?: Maybe<Array<Maybe<Cat_Filter>>>;
  _or?: Maybe<Array<Maybe<Cat_Filter>>>;
};

export type Create_Cat_Input = {
  id?: Maybe<Scalars['ID']>;
  user_created?: Maybe<Create_Directus_Users_Input>;
  date_created?: Maybe<Scalars['Date']>;
  user_updated?: Maybe<Create_Directus_Users_Input>;
  date_updated?: Maybe<Scalars['Date']>;
  name: Scalars['String'];
};

export type Create_Directus_Files_Input = {
  id?: Maybe<Scalars['ID']>;
  storage: Scalars['String'];
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  folder?: Maybe<Create_Directus_Folders_Input>;
  uploaded_by?: Maybe<Create_Directus_Users_Input>;
  uploaded_on: Scalars['Date'];
  modified_by?: Maybe<Create_Directus_Users_Input>;
  modified_on: Scalars['Date'];
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

export type Create_Directus_Folders_Input = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: Maybe<Create_Directus_Folders_Input>;
};

export type Create_Directus_Roles_Input = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  icon: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  ip_access?: Maybe<Scalars['JSON']>;
  enforce_tfa: Scalars['Boolean'];
  module_list?: Maybe<Scalars['JSON']>;
  collection_list?: Maybe<Scalars['JSON']>;
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  users?: Maybe<Array<Maybe<Create_Directus_Users_Input>>>;
};

export type Create_Directus_Users_Input = {
  id?: Maybe<Scalars['ID']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  avatar?: Maybe<Create_Directus_Files_Input>;
  language?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  tfa_secret?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  role?: Maybe<Create_Directus_Roles_Input>;
  token?: Maybe<Scalars['String']>;
  last_access?: Maybe<Scalars['Date']>;
  last_page?: Maybe<Scalars['String']>;
};

export type Date_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
};

export type Delete_Many = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']>>;
};

export type Delete_One = {
  __typename?: 'delete_one';
  id: Scalars['ID'];
};

export type Directus_Files = {
  __typename?: 'directus_files';
  id?: Maybe<Scalars['ID']>;
  storage: Scalars['String'];
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  folder?: Maybe<Directus_Folders>;
  uploaded_by?: Maybe<Directus_Users>;
  uploaded_on: Scalars['Date'];
  modified_by?: Maybe<Directus_Users>;
  modified_on: Scalars['Date'];
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


export type Directus_FilesFolderArgs = {
  filter?: Maybe<Directus_Folders_Filter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter?: Maybe<Directus_Users_Filter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};


export type Directus_FilesModified_ByArgs = {
  filter?: Maybe<Directus_Users_Filter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type Directus_Files_Filter = {
  id?: Maybe<String_Filter_Operators>;
  storage?: Maybe<String_Filter_Operators>;
  filename_disk?: Maybe<String_Filter_Operators>;
  filename_download?: Maybe<String_Filter_Operators>;
  title?: Maybe<String_Filter_Operators>;
  type?: Maybe<String_Filter_Operators>;
  folder?: Maybe<Directus_Folders_Filter>;
  uploaded_by?: Maybe<Directus_Users_Filter>;
  uploaded_on?: Maybe<Date_Filter_Operators>;
  modified_by?: Maybe<Directus_Users_Filter>;
  modified_on?: Maybe<Date_Filter_Operators>;
  charset?: Maybe<String_Filter_Operators>;
  filesize?: Maybe<Number_Filter_Operators>;
  width?: Maybe<Number_Filter_Operators>;
  height?: Maybe<Number_Filter_Operators>;
  duration?: Maybe<Number_Filter_Operators>;
  embed?: Maybe<String_Filter_Operators>;
  description?: Maybe<String_Filter_Operators>;
  location?: Maybe<String_Filter_Operators>;
  tags?: Maybe<String_Filter_Operators>;
  metadata?: Maybe<String_Filter_Operators>;
  _and?: Maybe<Array<Maybe<Directus_Files_Filter>>>;
  _or?: Maybe<Array<Maybe<Directus_Files_Filter>>>;
};

export type Directus_Folders = {
  __typename?: 'directus_folders';
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: Maybe<Directus_Folders>;
};


export type Directus_FoldersParentArgs = {
  filter?: Maybe<Directus_Folders_Filter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type Directus_Folders_Filter = {
  id?: Maybe<String_Filter_Operators>;
  name?: Maybe<String_Filter_Operators>;
  parent?: Maybe<Directus_Folders_Filter>;
  _and?: Maybe<Array<Maybe<Directus_Folders_Filter>>>;
  _or?: Maybe<Array<Maybe<Directus_Folders_Filter>>>;
};

export type Directus_Roles = {
  __typename?: 'directus_roles';
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  icon: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  ip_access?: Maybe<Scalars['JSON']>;
  enforce_tfa: Scalars['Boolean'];
  module_list?: Maybe<Scalars['JSON']>;
  collection_list?: Maybe<Scalars['JSON']>;
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  users?: Maybe<Array<Maybe<Directus_Users>>>;
};


export type Directus_RolesUsersArgs = {
  filter?: Maybe<Directus_Users_Filter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type Directus_Roles_Filter = {
  id?: Maybe<String_Filter_Operators>;
  name?: Maybe<String_Filter_Operators>;
  icon?: Maybe<String_Filter_Operators>;
  description?: Maybe<String_Filter_Operators>;
  ip_access?: Maybe<String_Filter_Operators>;
  enforce_tfa?: Maybe<Boolean_Filter_Operators>;
  module_list?: Maybe<String_Filter_Operators>;
  collection_list?: Maybe<String_Filter_Operators>;
  admin_access?: Maybe<Boolean_Filter_Operators>;
  app_access?: Maybe<Boolean_Filter_Operators>;
  users?: Maybe<Directus_Users_Filter>;
  _and?: Maybe<Array<Maybe<Directus_Roles_Filter>>>;
  _or?: Maybe<Array<Maybe<Directus_Roles_Filter>>>;
};

export type Directus_Users = {
  __typename?: 'directus_users';
  id?: Maybe<Scalars['ID']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  avatar?: Maybe<Directus_Files>;
  language?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  tfa_secret?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  role?: Maybe<Directus_Roles>;
  token?: Maybe<Scalars['String']>;
  last_access?: Maybe<Scalars['Date']>;
  last_page?: Maybe<Scalars['String']>;
};


export type Directus_UsersAvatarArgs = {
  filter?: Maybe<Directus_Files_Filter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};


export type Directus_UsersRoleArgs = {
  filter?: Maybe<Directus_Roles_Filter>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type Directus_Users_Filter = {
  id?: Maybe<String_Filter_Operators>;
  first_name?: Maybe<String_Filter_Operators>;
  last_name?: Maybe<String_Filter_Operators>;
  email?: Maybe<String_Filter_Operators>;
  password?: Maybe<String_Filter_Operators>;
  location?: Maybe<String_Filter_Operators>;
  title?: Maybe<String_Filter_Operators>;
  description?: Maybe<String_Filter_Operators>;
  tags?: Maybe<String_Filter_Operators>;
  avatar?: Maybe<Directus_Files_Filter>;
  language?: Maybe<String_Filter_Operators>;
  theme?: Maybe<String_Filter_Operators>;
  tfa_secret?: Maybe<String_Filter_Operators>;
  status?: Maybe<String_Filter_Operators>;
  role?: Maybe<Directus_Roles_Filter>;
  token?: Maybe<String_Filter_Operators>;
  last_access?: Maybe<Date_Filter_Operators>;
  last_page?: Maybe<String_Filter_Operators>;
  _and?: Maybe<Array<Maybe<Directus_Users_Filter>>>;
  _or?: Maybe<Array<Maybe<Directus_Users_Filter>>>;
};

export type Number_Filter_Operators = {
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

export type String_Filter_Operators = {
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

export type Update_Cat_Input = {
  id?: Maybe<Scalars['ID']>;
  user_created?: Maybe<Update_Directus_Users_Input>;
  date_created?: Maybe<Scalars['Date']>;
  user_updated?: Maybe<Update_Directus_Users_Input>;
  date_updated?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
};

export type Update_Directus_Files_Input = {
  id?: Maybe<Scalars['ID']>;
  storage?: Maybe<Scalars['String']>;
  filename_disk?: Maybe<Scalars['String']>;
  filename_download?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  folder?: Maybe<Update_Directus_Folders_Input>;
  uploaded_by?: Maybe<Update_Directus_Users_Input>;
  uploaded_on?: Maybe<Scalars['Date']>;
  modified_by?: Maybe<Update_Directus_Users_Input>;
  modified_on?: Maybe<Scalars['Date']>;
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

export type Update_Directus_Folders_Input = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Update_Directus_Folders_Input>;
};

export type Update_Directus_Roles_Input = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ip_access?: Maybe<Scalars['JSON']>;
  enforce_tfa?: Maybe<Scalars['Boolean']>;
  module_list?: Maybe<Scalars['JSON']>;
  collection_list?: Maybe<Scalars['JSON']>;
  admin_access?: Maybe<Scalars['Boolean']>;
  app_access?: Maybe<Scalars['Boolean']>;
  users?: Maybe<Array<Maybe<Update_Directus_Users_Input>>>;
};

export type Update_Directus_Users_Input = {
  id?: Maybe<Scalars['ID']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  avatar?: Maybe<Update_Directus_Files_Input>;
  language?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  tfa_secret?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  role?: Maybe<Update_Directus_Roles_Input>;
  token?: Maybe<Scalars['String']>;
  last_access?: Maybe<Scalars['Date']>;
  last_page?: Maybe<Scalars['String']>;
};
