/* eslint-disable @typescript-eslint/no-use-before-define,@typescript-eslint/no-unused-vars,no-prototype-builtins */
import {
  Mutation,
  Query,
  BooleanFilterOperators,
  Cat,
  CatFilter,
  CreateCatInput,
  CreateDirectusFilesInput,
  CreateDirectusFoldersInput,
  CreateDirectusRolesInput,
  CreateDirectusUsersInput,
  DateFilterOperators,
  DeleteMany,
  DeleteOne,
  DirectusFiles,
  DirectusFilesFilter,
  DirectusFolders,
  DirectusFoldersFilter,
  DirectusRoles,
  DirectusRolesFilter,
  DirectusUsers,
  DirectusUsersFilter,
  NumberFilterOperators,
  StringFilterOperators,
  UpdateCatInput,
  UpdateDirectusFilesInput,
  UpdateDirectusFoldersInput,
  UpdateDirectusRolesInput,
  UpdateDirectusUsersInput,
} from './sdk';

export const aMutation = (overrides?: Partial<Mutation>): Mutation => {
  return {
    create_cat_items:
      overrides && overrides.hasOwnProperty('create_cat_items')
        ? overrides.create_cat_items!
        : [aCat()],
    create_cat_item:
      overrides && overrides.hasOwnProperty('create_cat_item')
        ? overrides.create_cat_item!
        : aCat(),
    update_cat_items:
      overrides && overrides.hasOwnProperty('update_cat_items')
        ? overrides.update_cat_items!
        : [aCat()],
    update_cat_item:
      overrides && overrides.hasOwnProperty('update_cat_item')
        ? overrides.update_cat_item!
        : aCat(),
    delete_cat_items:
      overrides && overrides.hasOwnProperty('delete_cat_items')
        ? overrides.delete_cat_items!
        : aDeleteMany(),
    delete_cat_item:
      overrides && overrides.hasOwnProperty('delete_cat_item')
        ? overrides.delete_cat_item!
        : aDeleteOne(),
  };
};

export const aQuery = (overrides?: Partial<Query>): Query => {
  return {
    cat:
      overrides && overrides.hasOwnProperty('cat') ? overrides.cat! : [aCat()],
    cat_by_id:
      overrides && overrides.hasOwnProperty('cat_by_id')
        ? overrides.cat_by_id!
        : aCat(),
  };
};

export const aBooleanFilterOperators = (
  overrides?: Partial<BooleanFilterOperators>,
): BooleanFilterOperators => {
  return {
    _eq: overrides && overrides.hasOwnProperty('_eq') ? overrides._eq! : false,
    _neq:
      overrides && overrides.hasOwnProperty('_neq') ? overrides._neq! : false,
    _null:
      overrides && overrides.hasOwnProperty('_null') ? overrides._null! : true,
    _nnull:
      overrides && overrides.hasOwnProperty('_nnull')
        ? overrides._nnull!
        : false,
  };
};

export const aCat = (overrides?: Partial<Cat>): Cat => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'f54c0ef5-82b1-4327-8142-8bf4cf1f3a2a',
    user_created:
      overrides && overrides.hasOwnProperty('user_created')
        ? overrides.user_created!
        : aDirectusUsers(),
    date_created:
      overrides && overrides.hasOwnProperty('date_created')
        ? overrides.date_created!
        : '1970-01-01T16:35:05.633Z',
    user_updated:
      overrides && overrides.hasOwnProperty('user_updated')
        ? overrides.user_updated!
        : aDirectusUsers(),
    date_updated:
      overrides && overrides.hasOwnProperty('date_updated')
        ? overrides.date_updated!
        : '1970-01-03T17:48:28.394Z',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'sequi',
  };
};

export const aCatFilter = (overrides?: Partial<CatFilter>): CatFilter => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : aNumberFilterOperators(),
    user_created:
      overrides && overrides.hasOwnProperty('user_created')
        ? overrides.user_created!
        : aDirectusUsersFilter(),
    date_created:
      overrides && overrides.hasOwnProperty('date_created')
        ? overrides.date_created!
        : aDateFilterOperators(),
    user_updated:
      overrides && overrides.hasOwnProperty('user_updated')
        ? overrides.user_updated!
        : aDirectusUsersFilter(),
    date_updated:
      overrides && overrides.hasOwnProperty('date_updated')
        ? overrides.date_updated!
        : aDateFilterOperators(),
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : aStringFilterOperators(),
    _and:
      overrides && overrides.hasOwnProperty('_and')
        ? overrides._and!
        : [aCatFilter()],
    _or:
      overrides && overrides.hasOwnProperty('_or')
        ? overrides._or!
        : [aCatFilter()],
  };
};

export const aCreateCatInput = (
  overrides?: Partial<CreateCatInput>,
): CreateCatInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '8cf94551-0430-4d7f-80fc-673ceab478a0',
    user_created:
      overrides && overrides.hasOwnProperty('user_created')
        ? overrides.user_created!
        : aCreateDirectusUsersInput(),
    date_created:
      overrides && overrides.hasOwnProperty('date_created')
        ? overrides.date_created!
        : '1970-01-07T10:31:13.015Z',
    user_updated:
      overrides && overrides.hasOwnProperty('user_updated')
        ? overrides.user_updated!
        : aCreateDirectusUsersInput(),
    date_updated:
      overrides && overrides.hasOwnProperty('date_updated')
        ? overrides.date_updated!
        : '1970-01-06T08:33:12.926Z',
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'debitis',
  };
};

export const aCreateDirectusFilesInput = (
  overrides?: Partial<CreateDirectusFilesInput>,
): CreateDirectusFilesInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '7a17b0b5-af6f-418a-83a3-827fa33cb163',
    storage:
      overrides && overrides.hasOwnProperty('storage')
        ? overrides.storage!
        : 'illo',
    filename_disk:
      overrides && overrides.hasOwnProperty('filename_disk')
        ? overrides.filename_disk!
        : 'et',
    filename_download:
      overrides && overrides.hasOwnProperty('filename_download')
        ? overrides.filename_download!
        : 'repudiandae',
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'consectetur',
    type:
      overrides && overrides.hasOwnProperty('type')
        ? overrides.type!
        : 'labore',
    folder:
      overrides && overrides.hasOwnProperty('folder')
        ? overrides.folder!
        : aCreateDirectusFoldersInput(),
    uploaded_by:
      overrides && overrides.hasOwnProperty('uploaded_by')
        ? overrides.uploaded_by!
        : aCreateDirectusUsersInput(),
    uploaded_on:
      overrides && overrides.hasOwnProperty('uploaded_on')
        ? overrides.uploaded_on!
        : '1970-01-02T12:53:45.995Z',
    modified_by:
      overrides && overrides.hasOwnProperty('modified_by')
        ? overrides.modified_by!
        : aCreateDirectusUsersInput(),
    modified_on:
      overrides && overrides.hasOwnProperty('modified_on')
        ? overrides.modified_on!
        : '1970-01-06T11:24:26.104Z',
    charset:
      overrides && overrides.hasOwnProperty('charset')
        ? overrides.charset!
        : 'voluptate',
    filesize:
      overrides && overrides.hasOwnProperty('filesize')
        ? overrides.filesize!
        : 4836,
    width:
      overrides && overrides.hasOwnProperty('width') ? overrides.width! : 8859,
    height:
      overrides && overrides.hasOwnProperty('height')
        ? overrides.height!
        : 9561,
    duration:
      overrides && overrides.hasOwnProperty('duration')
        ? overrides.duration!
        : 8640,
    embed:
      overrides && overrides.hasOwnProperty('embed')
        ? overrides.embed!
        : 'sequi',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'expedita',
    location:
      overrides && overrides.hasOwnProperty('location')
        ? overrides.location!
        : 'sunt',
    tags:
      overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : 'at',
    metadata:
      overrides && overrides.hasOwnProperty('metadata')
        ? overrides.metadata!
        : 'non',
  };
};

export const aCreateDirectusFoldersInput = (
  overrides?: Partial<CreateDirectusFoldersInput>,
): CreateDirectusFoldersInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '4e01c4fc-aa47-42ea-8540-c19242a73b61',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'illo',
    parent:
      overrides && overrides.hasOwnProperty('parent')
        ? overrides.parent!
        : aCreateDirectusFoldersInput(),
  };
};

export const aCreateDirectusRolesInput = (
  overrides?: Partial<CreateDirectusRolesInput>,
): CreateDirectusRolesInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '9f3c65b9-5f16-403b-b01e-ed55b04d84d6',
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'minima',
    icon:
      overrides && overrides.hasOwnProperty('icon') ? overrides.icon! : 'minus',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'corrupti',
    ip_access:
      overrides && overrides.hasOwnProperty('ip_access')
        ? overrides.ip_access!
        : 'ad',
    enforce_tfa:
      overrides && overrides.hasOwnProperty('enforce_tfa')
        ? overrides.enforce_tfa!
        : false,
    module_list:
      overrides && overrides.hasOwnProperty('module_list')
        ? overrides.module_list!
        : 'ipsam',
    collection_list:
      overrides && overrides.hasOwnProperty('collection_list')
        ? overrides.collection_list!
        : 'cupiditate',
    admin_access:
      overrides && overrides.hasOwnProperty('admin_access')
        ? overrides.admin_access!
        : false,
    app_access:
      overrides && overrides.hasOwnProperty('app_access')
        ? overrides.app_access!
        : true,
    users:
      overrides && overrides.hasOwnProperty('users')
        ? overrides.users!
        : [aCreateDirectusUsersInput()],
  };
};

export const aCreateDirectusUsersInput = (
  overrides?: Partial<CreateDirectusUsersInput>,
): CreateDirectusUsersInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '42cb4e19-4ab9-4f0a-bfdf-b7d2deb310c8',
    first_name:
      overrides && overrides.hasOwnProperty('first_name')
        ? overrides.first_name!
        : 'quos',
    last_name:
      overrides && overrides.hasOwnProperty('last_name')
        ? overrides.last_name!
        : 'et',
    email:
      overrides && overrides.hasOwnProperty('email')
        ? overrides.email!
        : 'error',
    password:
      overrides && overrides.hasOwnProperty('password')
        ? overrides.password!
        : 'omnis',
    location:
      overrides && overrides.hasOwnProperty('location')
        ? overrides.location!
        : 'dolores',
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'enim',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'eum',
    tags:
      overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : 'dolor',
    avatar:
      overrides && overrides.hasOwnProperty('avatar')
        ? overrides.avatar!
        : aCreateDirectusFilesInput(),
    language:
      overrides && overrides.hasOwnProperty('language')
        ? overrides.language!
        : 'blanditiis',
    theme:
      overrides && overrides.hasOwnProperty('theme')
        ? overrides.theme!
        : 'sint',
    tfa_secret:
      overrides && overrides.hasOwnProperty('tfa_secret')
        ? overrides.tfa_secret!
        : 'hic',
    status:
      overrides && overrides.hasOwnProperty('status')
        ? overrides.status!
        : 'qui',
    role:
      overrides && overrides.hasOwnProperty('role')
        ? overrides.role!
        : aCreateDirectusRolesInput(),
    token:
      overrides && overrides.hasOwnProperty('token')
        ? overrides.token!
        : 'autem',
    last_access:
      overrides && overrides.hasOwnProperty('last_access')
        ? overrides.last_access!
        : '1970-01-02T13:20:07.517Z',
    last_page:
      overrides && overrides.hasOwnProperty('last_page')
        ? overrides.last_page!
        : 'omnis',
  };
};

export const aDateFilterOperators = (
  overrides?: Partial<DateFilterOperators>,
): DateFilterOperators => {
  return {
    _eq:
      overrides && overrides.hasOwnProperty('_eq') ? overrides._eq! : 'quaerat',
    _neq:
      overrides && overrides.hasOwnProperty('_neq') ? overrides._neq! : 'omnis',
    _gt:
      overrides && overrides.hasOwnProperty('_gt') ? overrides._gt! : 'facere',
    _gte:
      overrides && overrides.hasOwnProperty('_gte') ? overrides._gte! : 'eos',
    _lt: overrides && overrides.hasOwnProperty('_lt') ? overrides._lt! : 'ad',
    _lte:
      overrides && overrides.hasOwnProperty('_lte') ? overrides._lte! : 'ut',
    _null:
      overrides && overrides.hasOwnProperty('_null') ? overrides._null! : true,
    _nnull:
      overrides && overrides.hasOwnProperty('_nnull')
        ? overrides._nnull!
        : true,
  };
};

export const aDeleteMany = (overrides?: Partial<DeleteMany>): DeleteMany => {
  return {
    ids:
      overrides && overrides.hasOwnProperty('ids')
        ? overrides.ids!
        : ['ce26b5a1-003a-4e0d-9e47-bc3ffd5ba6a3'],
  };
};

export const aDeleteOne = (overrides?: Partial<DeleteOne>): DeleteOne => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'd0b0a19a-a721-4a35-a3cb-7c99580eb8ce',
  };
};

export const aDirectusFiles = (
  overrides?: Partial<DirectusFiles>,
): DirectusFiles => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '4ff67016-13de-4f23-8780-72121f1d91ff',
    storage:
      overrides && overrides.hasOwnProperty('storage')
        ? overrides.storage!
        : 'quo',
    filename_disk:
      overrides && overrides.hasOwnProperty('filename_disk')
        ? overrides.filename_disk!
        : 'debitis',
    filename_download:
      overrides && overrides.hasOwnProperty('filename_download')
        ? overrides.filename_download!
        : 'laudantium',
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'error',
    type:
      overrides && overrides.hasOwnProperty('type')
        ? overrides.type!
        : 'molestiae',
    folder:
      overrides && overrides.hasOwnProperty('folder')
        ? overrides.folder!
        : aDirectusFolders(),
    uploaded_by:
      overrides && overrides.hasOwnProperty('uploaded_by')
        ? overrides.uploaded_by!
        : aDirectusUsers(),
    uploaded_on:
      overrides && overrides.hasOwnProperty('uploaded_on')
        ? overrides.uploaded_on!
        : '1970-01-06T01:35:56.476Z',
    modified_by:
      overrides && overrides.hasOwnProperty('modified_by')
        ? overrides.modified_by!
        : aDirectusUsers(),
    modified_on:
      overrides && overrides.hasOwnProperty('modified_on')
        ? overrides.modified_on!
        : '1970-01-01T05:17:08.518Z',
    charset:
      overrides && overrides.hasOwnProperty('charset')
        ? overrides.charset!
        : 'aspernatur',
    filesize:
      overrides && overrides.hasOwnProperty('filesize')
        ? overrides.filesize!
        : 7422,
    width:
      overrides && overrides.hasOwnProperty('width') ? overrides.width! : 7053,
    height:
      overrides && overrides.hasOwnProperty('height')
        ? overrides.height!
        : 5935,
    duration:
      overrides && overrides.hasOwnProperty('duration')
        ? overrides.duration!
        : 6666,
    embed:
      overrides && overrides.hasOwnProperty('embed')
        ? overrides.embed!
        : 'nihil',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'quia',
    location:
      overrides && overrides.hasOwnProperty('location')
        ? overrides.location!
        : 'eligendi',
    tags:
      overrides && overrides.hasOwnProperty('tags')
        ? overrides.tags!
        : 'libero',
    metadata:
      overrides && overrides.hasOwnProperty('metadata')
        ? overrides.metadata!
        : 'sit',
  };
};

export const aDirectusFilesFilter = (
  overrides?: Partial<DirectusFilesFilter>,
): DirectusFilesFilter => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : aStringFilterOperators(),
    storage:
      overrides && overrides.hasOwnProperty('storage')
        ? overrides.storage!
        : aStringFilterOperators(),
    filename_disk:
      overrides && overrides.hasOwnProperty('filename_disk')
        ? overrides.filename_disk!
        : aStringFilterOperators(),
    filename_download:
      overrides && overrides.hasOwnProperty('filename_download')
        ? overrides.filename_download!
        : aStringFilterOperators(),
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : aStringFilterOperators(),
    type:
      overrides && overrides.hasOwnProperty('type')
        ? overrides.type!
        : aStringFilterOperators(),
    folder:
      overrides && overrides.hasOwnProperty('folder')
        ? overrides.folder!
        : aDirectusFoldersFilter(),
    uploaded_by:
      overrides && overrides.hasOwnProperty('uploaded_by')
        ? overrides.uploaded_by!
        : aDirectusUsersFilter(),
    uploaded_on:
      overrides && overrides.hasOwnProperty('uploaded_on')
        ? overrides.uploaded_on!
        : aDateFilterOperators(),
    modified_by:
      overrides && overrides.hasOwnProperty('modified_by')
        ? overrides.modified_by!
        : aDirectusUsersFilter(),
    modified_on:
      overrides && overrides.hasOwnProperty('modified_on')
        ? overrides.modified_on!
        : aDateFilterOperators(),
    charset:
      overrides && overrides.hasOwnProperty('charset')
        ? overrides.charset!
        : aStringFilterOperators(),
    filesize:
      overrides && overrides.hasOwnProperty('filesize')
        ? overrides.filesize!
        : aNumberFilterOperators(),
    width:
      overrides && overrides.hasOwnProperty('width')
        ? overrides.width!
        : aNumberFilterOperators(),
    height:
      overrides && overrides.hasOwnProperty('height')
        ? overrides.height!
        : aNumberFilterOperators(),
    duration:
      overrides && overrides.hasOwnProperty('duration')
        ? overrides.duration!
        : aNumberFilterOperators(),
    embed:
      overrides && overrides.hasOwnProperty('embed')
        ? overrides.embed!
        : aStringFilterOperators(),
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : aStringFilterOperators(),
    location:
      overrides && overrides.hasOwnProperty('location')
        ? overrides.location!
        : aStringFilterOperators(),
    tags:
      overrides && overrides.hasOwnProperty('tags')
        ? overrides.tags!
        : aStringFilterOperators(),
    metadata:
      overrides && overrides.hasOwnProperty('metadata')
        ? overrides.metadata!
        : aStringFilterOperators(),
    _and:
      overrides && overrides.hasOwnProperty('_and')
        ? overrides._and!
        : [aDirectusFilesFilter()],
    _or:
      overrides && overrides.hasOwnProperty('_or')
        ? overrides._or!
        : [aDirectusFilesFilter()],
  };
};

export const aDirectusFolders = (
  overrides?: Partial<DirectusFolders>,
): DirectusFolders => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '6a9f1a3b-58fd-45e8-a8fe-1e16d2db52e3',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'enim',
    parent:
      overrides && overrides.hasOwnProperty('parent')
        ? overrides.parent!
        : aDirectusFolders(),
  };
};

export const aDirectusFoldersFilter = (
  overrides?: Partial<DirectusFoldersFilter>,
): DirectusFoldersFilter => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : aStringFilterOperators(),
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : aStringFilterOperators(),
    parent:
      overrides && overrides.hasOwnProperty('parent')
        ? overrides.parent!
        : aDirectusFoldersFilter(),
    _and:
      overrides && overrides.hasOwnProperty('_and')
        ? overrides._and!
        : [aDirectusFoldersFilter()],
    _or:
      overrides && overrides.hasOwnProperty('_or')
        ? overrides._or!
        : [aDirectusFoldersFilter()],
  };
};

export const aDirectusRoles = (
  overrides?: Partial<DirectusRoles>,
): DirectusRoles => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '7a3fdd79-234f-4a85-82dd-b8f757787f06',
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'cumque',
    icon:
      overrides && overrides.hasOwnProperty('icon') ? overrides.icon! : 'in',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'dolores',
    ip_access:
      overrides && overrides.hasOwnProperty('ip_access')
        ? overrides.ip_access!
        : 'reprehenderit',
    enforce_tfa:
      overrides && overrides.hasOwnProperty('enforce_tfa')
        ? overrides.enforce_tfa!
        : false,
    module_list:
      overrides && overrides.hasOwnProperty('module_list')
        ? overrides.module_list!
        : 'impedit',
    collection_list:
      overrides && overrides.hasOwnProperty('collection_list')
        ? overrides.collection_list!
        : 'omnis',
    admin_access:
      overrides && overrides.hasOwnProperty('admin_access')
        ? overrides.admin_access!
        : true,
    app_access:
      overrides && overrides.hasOwnProperty('app_access')
        ? overrides.app_access!
        : true,
    users:
      overrides && overrides.hasOwnProperty('users')
        ? overrides.users!
        : [aDirectusUsers()],
  };
};

export const aDirectusRolesFilter = (
  overrides?: Partial<DirectusRolesFilter>,
): DirectusRolesFilter => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : aStringFilterOperators(),
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : aStringFilterOperators(),
    icon:
      overrides && overrides.hasOwnProperty('icon')
        ? overrides.icon!
        : aStringFilterOperators(),
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : aStringFilterOperators(),
    ip_access:
      overrides && overrides.hasOwnProperty('ip_access')
        ? overrides.ip_access!
        : aStringFilterOperators(),
    enforce_tfa:
      overrides && overrides.hasOwnProperty('enforce_tfa')
        ? overrides.enforce_tfa!
        : aBooleanFilterOperators(),
    module_list:
      overrides && overrides.hasOwnProperty('module_list')
        ? overrides.module_list!
        : aStringFilterOperators(),
    collection_list:
      overrides && overrides.hasOwnProperty('collection_list')
        ? overrides.collection_list!
        : aStringFilterOperators(),
    admin_access:
      overrides && overrides.hasOwnProperty('admin_access')
        ? overrides.admin_access!
        : aBooleanFilterOperators(),
    app_access:
      overrides && overrides.hasOwnProperty('app_access')
        ? overrides.app_access!
        : aBooleanFilterOperators(),
    users:
      overrides && overrides.hasOwnProperty('users')
        ? overrides.users!
        : aDirectusUsersFilter(),
    _and:
      overrides && overrides.hasOwnProperty('_and')
        ? overrides._and!
        : [aDirectusRolesFilter()],
    _or:
      overrides && overrides.hasOwnProperty('_or')
        ? overrides._or!
        : [aDirectusRolesFilter()],
  };
};

export const aDirectusUsers = (
  overrides?: Partial<DirectusUsers>,
): DirectusUsers => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '6c9806ce-3499-4c8a-bf99-2fef6cb6a6c8',
    first_name:
      overrides && overrides.hasOwnProperty('first_name')
        ? overrides.first_name!
        : 'sed',
    last_name:
      overrides && overrides.hasOwnProperty('last_name')
        ? overrides.last_name!
        : 'expedita',
    email:
      overrides && overrides.hasOwnProperty('email')
        ? overrides.email!
        : 'dolor',
    password:
      overrides && overrides.hasOwnProperty('password')
        ? overrides.password!
        : 'velit',
    location:
      overrides && overrides.hasOwnProperty('location')
        ? overrides.location!
        : 'nihil',
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'porro',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'earum',
    tags:
      overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : 'modi',
    avatar:
      overrides && overrides.hasOwnProperty('avatar')
        ? overrides.avatar!
        : aDirectusFiles(),
    language:
      overrides && overrides.hasOwnProperty('language')
        ? overrides.language!
        : 'veritatis',
    theme:
      overrides && overrides.hasOwnProperty('theme')
        ? overrides.theme!
        : 'amet',
    tfa_secret:
      overrides && overrides.hasOwnProperty('tfa_secret')
        ? overrides.tfa_secret!
        : 'totam',
    status:
      overrides && overrides.hasOwnProperty('status')
        ? overrides.status!
        : 'atque',
    role:
      overrides && overrides.hasOwnProperty('role')
        ? overrides.role!
        : aDirectusRoles(),
    token:
      overrides && overrides.hasOwnProperty('token')
        ? overrides.token!
        : 'distinctio',
    last_access:
      overrides && overrides.hasOwnProperty('last_access')
        ? overrides.last_access!
        : '1970-01-12T22:08:08.316Z',
    last_page:
      overrides && overrides.hasOwnProperty('last_page')
        ? overrides.last_page!
        : 'consequatur',
  };
};

export const aDirectusUsersFilter = (
  overrides?: Partial<DirectusUsersFilter>,
): DirectusUsersFilter => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : aStringFilterOperators(),
    first_name:
      overrides && overrides.hasOwnProperty('first_name')
        ? overrides.first_name!
        : aStringFilterOperators(),
    last_name:
      overrides && overrides.hasOwnProperty('last_name')
        ? overrides.last_name!
        : aStringFilterOperators(),
    email:
      overrides && overrides.hasOwnProperty('email')
        ? overrides.email!
        : aStringFilterOperators(),
    password:
      overrides && overrides.hasOwnProperty('password')
        ? overrides.password!
        : aStringFilterOperators(),
    location:
      overrides && overrides.hasOwnProperty('location')
        ? overrides.location!
        : aStringFilterOperators(),
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : aStringFilterOperators(),
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : aStringFilterOperators(),
    tags:
      overrides && overrides.hasOwnProperty('tags')
        ? overrides.tags!
        : aStringFilterOperators(),
    avatar:
      overrides && overrides.hasOwnProperty('avatar')
        ? overrides.avatar!
        : aDirectusFilesFilter(),
    language:
      overrides && overrides.hasOwnProperty('language')
        ? overrides.language!
        : aStringFilterOperators(),
    theme:
      overrides && overrides.hasOwnProperty('theme')
        ? overrides.theme!
        : aStringFilterOperators(),
    tfa_secret:
      overrides && overrides.hasOwnProperty('tfa_secret')
        ? overrides.tfa_secret!
        : aStringFilterOperators(),
    status:
      overrides && overrides.hasOwnProperty('status')
        ? overrides.status!
        : aStringFilterOperators(),
    role:
      overrides && overrides.hasOwnProperty('role')
        ? overrides.role!
        : aDirectusRolesFilter(),
    token:
      overrides && overrides.hasOwnProperty('token')
        ? overrides.token!
        : aStringFilterOperators(),
    last_access:
      overrides && overrides.hasOwnProperty('last_access')
        ? overrides.last_access!
        : aDateFilterOperators(),
    last_page:
      overrides && overrides.hasOwnProperty('last_page')
        ? overrides.last_page!
        : aStringFilterOperators(),
    _and:
      overrides && overrides.hasOwnProperty('_and')
        ? overrides._and!
        : [aDirectusUsersFilter()],
    _or:
      overrides && overrides.hasOwnProperty('_or')
        ? overrides._or!
        : [aDirectusUsersFilter()],
  };
};

export const aNumberFilterOperators = (
  overrides?: Partial<NumberFilterOperators>,
): NumberFilterOperators => {
  return {
    _eq: overrides && overrides.hasOwnProperty('_eq') ? overrides._eq! : 7.92,
    _neq:
      overrides && overrides.hasOwnProperty('_neq') ? overrides._neq! : 7.92,
    _in: overrides && overrides.hasOwnProperty('_in') ? overrides._in! : [4.51],
    _nin:
      overrides && overrides.hasOwnProperty('_nin') ? overrides._nin! : [8.37],
    _gt: overrides && overrides.hasOwnProperty('_gt') ? overrides._gt! : 2.76,
    _gte:
      overrides && overrides.hasOwnProperty('_gte') ? overrides._gte! : 2.83,
    _lt: overrides && overrides.hasOwnProperty('_lt') ? overrides._lt! : 4.31,
    _lte:
      overrides && overrides.hasOwnProperty('_lte') ? overrides._lte! : 4.94,
    _null:
      overrides && overrides.hasOwnProperty('_null') ? overrides._null! : true,
    _nnull:
      overrides && overrides.hasOwnProperty('_nnull')
        ? overrides._nnull!
        : false,
  };
};

export const aStringFilterOperators = (
  overrides?: Partial<StringFilterOperators>,
): StringFilterOperators => {
  return {
    _eq:
      overrides && overrides.hasOwnProperty('_eq') ? overrides._eq! : 'animi',
    _neq:
      overrides && overrides.hasOwnProperty('_neq')
        ? overrides._neq!
        : 'dignissimos',
    _contains:
      overrides && overrides.hasOwnProperty('_contains')
        ? overrides._contains!
        : 'unde',
    _ncontains:
      overrides && overrides.hasOwnProperty('_ncontains')
        ? overrides._ncontains!
        : 'est',
    _starts_with:
      overrides && overrides.hasOwnProperty('_starts_with')
        ? overrides._starts_with!
        : 'at',
    _nstarts_with:
      overrides && overrides.hasOwnProperty('_nstarts_with')
        ? overrides._nstarts_with!
        : 'incidunt',
    _ends_with:
      overrides && overrides.hasOwnProperty('_ends_with')
        ? overrides._ends_with!
        : 'rem',
    _nends_with:
      overrides && overrides.hasOwnProperty('_nends_with')
        ? overrides._nends_with!
        : 'eligendi',
    _in:
      overrides && overrides.hasOwnProperty('_in') ? overrides._in! : ['quia'],
    _nin:
      overrides && overrides.hasOwnProperty('_nin')
        ? overrides._nin!
        : ['sint'],
    _null:
      overrides && overrides.hasOwnProperty('_null') ? overrides._null! : false,
    _nnull:
      overrides && overrides.hasOwnProperty('_nnull')
        ? overrides._nnull!
        : false,
    _empty:
      overrides && overrides.hasOwnProperty('_empty')
        ? overrides._empty!
        : true,
    _nempty:
      overrides && overrides.hasOwnProperty('_nempty')
        ? overrides._nempty!
        : false,
  };
};

export const anUpdateCatInput = (
  overrides?: Partial<UpdateCatInput>,
): UpdateCatInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '2ee2ffcc-0048-4d3e-9521-7d14c5f11cf1',
    user_created:
      overrides && overrides.hasOwnProperty('user_created')
        ? overrides.user_created!
        : anUpdateDirectusUsersInput(),
    date_created:
      overrides && overrides.hasOwnProperty('date_created')
        ? overrides.date_created!
        : '1970-01-13T01:13:38.411Z',
    user_updated:
      overrides && overrides.hasOwnProperty('user_updated')
        ? overrides.user_updated!
        : anUpdateDirectusUsersInput(),
    date_updated:
      overrides && overrides.hasOwnProperty('date_updated')
        ? overrides.date_updated!
        : '1970-01-15T13:25:41.643Z',
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'repellat',
  };
};

export const anUpdateDirectusFilesInput = (
  overrides?: Partial<UpdateDirectusFilesInput>,
): UpdateDirectusFilesInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '8105d55b-e81e-4eb9-aab6-195c53ac0da8',
    storage:
      overrides && overrides.hasOwnProperty('storage')
        ? overrides.storage!
        : 'rerum',
    filename_disk:
      overrides && overrides.hasOwnProperty('filename_disk')
        ? overrides.filename_disk!
        : 'fugiat',
    filename_download:
      overrides && overrides.hasOwnProperty('filename_download')
        ? overrides.filename_download!
        : 'eos',
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'animi',
    type:
      overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'aut',
    folder:
      overrides && overrides.hasOwnProperty('folder')
        ? overrides.folder!
        : anUpdateDirectusFoldersInput(),
    uploaded_by:
      overrides && overrides.hasOwnProperty('uploaded_by')
        ? overrides.uploaded_by!
        : anUpdateDirectusUsersInput(),
    uploaded_on:
      overrides && overrides.hasOwnProperty('uploaded_on')
        ? overrides.uploaded_on!
        : '1970-01-07T04:52:09.103Z',
    modified_by:
      overrides && overrides.hasOwnProperty('modified_by')
        ? overrides.modified_by!
        : anUpdateDirectusUsersInput(),
    modified_on:
      overrides && overrides.hasOwnProperty('modified_on')
        ? overrides.modified_on!
        : '1970-01-15T04:36:38.341Z',
    charset:
      overrides && overrides.hasOwnProperty('charset')
        ? overrides.charset!
        : 'praesentium',
    filesize:
      overrides && overrides.hasOwnProperty('filesize')
        ? overrides.filesize!
        : 8900,
    width:
      overrides && overrides.hasOwnProperty('width') ? overrides.width! : 1282,
    height:
      overrides && overrides.hasOwnProperty('height')
        ? overrides.height!
        : 5382,
    duration:
      overrides && overrides.hasOwnProperty('duration')
        ? overrides.duration!
        : 770,
    embed:
      overrides && overrides.hasOwnProperty('embed') ? overrides.embed! : 'est',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'sed',
    location:
      overrides && overrides.hasOwnProperty('location')
        ? overrides.location!
        : 'ab',
    tags:
      overrides && overrides.hasOwnProperty('tags')
        ? overrides.tags!
        : 'voluptatem',
    metadata:
      overrides && overrides.hasOwnProperty('metadata')
        ? overrides.metadata!
        : 'facere',
  };
};

export const anUpdateDirectusFoldersInput = (
  overrides?: Partial<UpdateDirectusFoldersInput>,
): UpdateDirectusFoldersInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'fe02e8a5-3b0c-434b-8526-dbb88b503719',
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'ratione',
    parent:
      overrides && overrides.hasOwnProperty('parent')
        ? overrides.parent!
        : anUpdateDirectusFoldersInput(),
  };
};

export const anUpdateDirectusRolesInput = (
  overrides?: Partial<UpdateDirectusRolesInput>,
): UpdateDirectusRolesInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'e00df04b-c7e1-4f22-a24d-cc7bfe6720aa',
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'voluptas',
    icon:
      overrides && overrides.hasOwnProperty('icon') ? overrides.icon! : 'aut',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'eos',
    ip_access:
      overrides && overrides.hasOwnProperty('ip_access')
        ? overrides.ip_access!
        : 'quos',
    enforce_tfa:
      overrides && overrides.hasOwnProperty('enforce_tfa')
        ? overrides.enforce_tfa!
        : false,
    module_list:
      overrides && overrides.hasOwnProperty('module_list')
        ? overrides.module_list!
        : 'voluptates',
    collection_list:
      overrides && overrides.hasOwnProperty('collection_list')
        ? overrides.collection_list!
        : 'dolor',
    admin_access:
      overrides && overrides.hasOwnProperty('admin_access')
        ? overrides.admin_access!
        : false,
    app_access:
      overrides && overrides.hasOwnProperty('app_access')
        ? overrides.app_access!
        : true,
    users:
      overrides && overrides.hasOwnProperty('users')
        ? overrides.users!
        : [anUpdateDirectusUsersInput()],
  };
};

export const anUpdateDirectusUsersInput = (
  overrides?: Partial<UpdateDirectusUsersInput>,
): UpdateDirectusUsersInput => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '95417fe5-058b-4f12-989b-b2912c8cfacf',
    first_name:
      overrides && overrides.hasOwnProperty('first_name')
        ? overrides.first_name!
        : 'expedita',
    last_name:
      overrides && overrides.hasOwnProperty('last_name')
        ? overrides.last_name!
        : 'sed',
    email:
      overrides && overrides.hasOwnProperty('email')
        ? overrides.email!
        : 'quia',
    password:
      overrides && overrides.hasOwnProperty('password')
        ? overrides.password!
        : 'sequi',
    location:
      overrides && overrides.hasOwnProperty('location')
        ? overrides.location!
        : 'accusantium',
    title:
      overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'et',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'aut',
    tags:
      overrides && overrides.hasOwnProperty('tags')
        ? overrides.tags!
        : 'quaerat',
    avatar:
      overrides && overrides.hasOwnProperty('avatar')
        ? overrides.avatar!
        : anUpdateDirectusFilesInput(),
    language:
      overrides && overrides.hasOwnProperty('language')
        ? overrides.language!
        : 'eius',
    theme:
      overrides && overrides.hasOwnProperty('theme')
        ? overrides.theme!
        : 'fugit',
    tfa_secret:
      overrides && overrides.hasOwnProperty('tfa_secret')
        ? overrides.tfa_secret!
        : 'mollitia',
    status:
      overrides && overrides.hasOwnProperty('status')
        ? overrides.status!
        : 'et',
    role:
      overrides && overrides.hasOwnProperty('role')
        ? overrides.role!
        : anUpdateDirectusRolesInput(),
    token:
      overrides && overrides.hasOwnProperty('token')
        ? overrides.token!
        : 'pariatur',
    last_access:
      overrides && overrides.hasOwnProperty('last_access')
        ? overrides.last_access!
        : '1970-01-01T23:57:35.604Z',
    last_page:
      overrides && overrides.hasOwnProperty('last_page')
        ? overrides.last_page!
        : 'sit',
  };
};
