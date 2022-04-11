import { Mutation, Query, BooleanFilterOperators, Cat, CatAggregated, CatAggregatedFields, CatFilter, CreateCatInput, CreateDirectusFilesInput, CreateDirectusFoldersInput, CreateDirectusRolesInput, CreateDirectusUsersInput, CreateRestaurantInput, DateFilterOperators, DatetimeFunctionFilterOperators, DatetimeFunctions, DatetimeFunctionsInput, DeleteMany, DeleteOne, DirectusFiles, DirectusFilesFilter, DirectusFolders, DirectusFoldersFilter, DirectusRoles, DirectusRolesFilter, DirectusUsers, DirectusUsersFilter, NumberFilterOperators, Restaurant, RestaurantAggregated, RestaurantAggregatedFields, RestaurantFilter, StringFilterOperators, UpdateCatInput, UpdateDirectusFilesInput, UpdateDirectusFoldersInput, UpdateDirectusRolesInput, UpdateDirectusUsersInput, UpdateRestaurantInput } from './restaurant.sdk';

export const aMutation = (overrides?: Partial<Mutation>): Mutation => {
    return {
        create_cat_item: overrides && overrides.hasOwnProperty('create_cat_item') ? overrides.create_cat_item! : aCat(),
        create_cat_items: overrides && overrides.hasOwnProperty('create_cat_items') ? overrides.create_cat_items! : [aCat()],
        create_restaurant_item: overrides && overrides.hasOwnProperty('create_restaurant_item') ? overrides.create_restaurant_item! : aRestaurant(),
        create_restaurant_items: overrides && overrides.hasOwnProperty('create_restaurant_items') ? overrides.create_restaurant_items! : [aRestaurant()],
        delete_cat_item: overrides && overrides.hasOwnProperty('delete_cat_item') ? overrides.delete_cat_item! : aDeleteOne(),
        delete_cat_items: overrides && overrides.hasOwnProperty('delete_cat_items') ? overrides.delete_cat_items! : aDeleteMany(),
        delete_restaurant_item: overrides && overrides.hasOwnProperty('delete_restaurant_item') ? overrides.delete_restaurant_item! : aDeleteOne(),
        delete_restaurant_items: overrides && overrides.hasOwnProperty('delete_restaurant_items') ? overrides.delete_restaurant_items! : aDeleteMany(),
        update_cat_item: overrides && overrides.hasOwnProperty('update_cat_item') ? overrides.update_cat_item! : aCat(),
        update_cat_items: overrides && overrides.hasOwnProperty('update_cat_items') ? overrides.update_cat_items! : [aCat()],
        update_restaurant_item: overrides && overrides.hasOwnProperty('update_restaurant_item') ? overrides.update_restaurant_item! : aRestaurant(),
        update_restaurant_items: overrides && overrides.hasOwnProperty('update_restaurant_items') ? overrides.update_restaurant_items! : [aRestaurant()],
    };
};

export const aQuery = (overrides?: Partial<Query>): Query => {
    return {
        cat: overrides && overrides.hasOwnProperty('cat') ? overrides.cat! : [aCat()],
        cat_aggregated: overrides && overrides.hasOwnProperty('cat_aggregated') ? overrides.cat_aggregated! : [aCatAggregated()],
        cat_by_id: overrides && overrides.hasOwnProperty('cat_by_id') ? overrides.cat_by_id! : aCat(),
        restaurant: overrides && overrides.hasOwnProperty('restaurant') ? overrides.restaurant! : [aRestaurant()],
        restaurant_aggregated: overrides && overrides.hasOwnProperty('restaurant_aggregated') ? overrides.restaurant_aggregated! : [aRestaurantAggregated()],
        restaurant_by_id: overrides && overrides.hasOwnProperty('restaurant_by_id') ? overrides.restaurant_by_id! : aRestaurant(),
    };
};

export const aBooleanFilterOperators = (overrides?: Partial<BooleanFilterOperators>): BooleanFilterOperators => {
    return {
        _eq: overrides && overrides.hasOwnProperty('_eq') ? overrides._eq! : false,
        _neq: overrides && overrides.hasOwnProperty('_neq') ? overrides._neq! : false,
        _nnull: overrides && overrides.hasOwnProperty('_nnull') ? overrides._nnull! : false,
        _null: overrides && overrides.hasOwnProperty('_null') ? overrides._null! : true,
    };
};

export const aCat = (overrides?: Partial<Cat>): Cat => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-01T16:35:05.633Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctions(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-03T17:48:28.394Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctions(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'f54c0ef5-82b1-4327-8142-8bf4cf1f3a2a',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'sequi',
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aDirectusUsers(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aDirectusUsers(),
    };
};

export const aCatAggregated = (overrides?: Partial<CatAggregated>): CatAggregated => {
    return {
        avg: overrides && overrides.hasOwnProperty('avg') ? overrides.avg! : aCatAggregatedFields(),
        avgDistinct: overrides && overrides.hasOwnProperty('avgDistinct') ? overrides.avgDistinct! : aCatAggregatedFields(),
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : aCatAggregatedFields(),
        countDistinct: overrides && overrides.hasOwnProperty('countDistinct') ? overrides.countDistinct! : aCatAggregatedFields(),
        group: overrides && overrides.hasOwnProperty('group') ? overrides.group! : 'sequi',
        max: overrides && overrides.hasOwnProperty('max') ? overrides.max! : aCatAggregatedFields(),
        min: overrides && overrides.hasOwnProperty('min') ? overrides.min! : aCatAggregatedFields(),
        sum: overrides && overrides.hasOwnProperty('sum') ? overrides.sum! : aCatAggregatedFields(),
        sumDistinct: overrides && overrides.hasOwnProperty('sumDistinct') ? overrides.sumDistinct! : aCatAggregatedFields(),
    };
};

export const aCatAggregatedFields = (overrides?: Partial<CatAggregatedFields>): CatAggregatedFields => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 6.25,
    };
};

export const aCatFilter = (overrides?: Partial<CatFilter>): CatFilter => {
    return {
        _and: overrides && overrides.hasOwnProperty('_and') ? overrides._and! : [aCatFilter()],
        _or: overrides && overrides.hasOwnProperty('_or') ? overrides._or! : [aCatFilter()],
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : aDateFilterOperators(),
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionFilterOperators(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : aDateFilterOperators(),
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionFilterOperators(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : aNumberFilterOperators(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : aStringFilterOperators(),
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aDirectusUsersFilter(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aDirectusUsersFilter(),
    };
};

export const aCreateCatInput = (overrides?: Partial<CreateCatInput>): CreateCatInput => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-07T10:31:13.015Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionsInput(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-06T08:33:12.926Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionsInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '8cf94551-0430-4d7f-80fc-673ceab478a0',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'debitis',
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aCreateDirectusUsersInput(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aCreateDirectusUsersInput(),
    };
};

export const aCreateDirectusFilesInput = (overrides?: Partial<CreateDirectusFilesInput>): CreateDirectusFilesInput => {
    return {
        charset: overrides && overrides.hasOwnProperty('charset') ? overrides.charset! : 'voluptate',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'expedita',
        duration: overrides && overrides.hasOwnProperty('duration') ? overrides.duration! : 8640,
        embed: overrides && overrides.hasOwnProperty('embed') ? overrides.embed! : 'sequi',
        filename_disk: overrides && overrides.hasOwnProperty('filename_disk') ? overrides.filename_disk! : 'et',
        filename_download: overrides && overrides.hasOwnProperty('filename_download') ? overrides.filename_download! : 'repudiandae',
        filesize: overrides && overrides.hasOwnProperty('filesize') ? overrides.filesize! : 4836,
        folder: overrides && overrides.hasOwnProperty('folder') ? overrides.folder! : aCreateDirectusFoldersInput(),
        height: overrides && overrides.hasOwnProperty('height') ? overrides.height! : 9561,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '7a17b0b5-af6f-418a-83a3-827fa33cb163',
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : 'sunt',
        metadata: overrides && overrides.hasOwnProperty('metadata') ? overrides.metadata! : 'non',
        modified_by: overrides && overrides.hasOwnProperty('modified_by') ? overrides.modified_by! : aCreateDirectusUsersInput(),
        modified_on: overrides && overrides.hasOwnProperty('modified_on') ? overrides.modified_on! : '1970-01-06T11:24:26.104Z',
        modified_on_func: overrides && overrides.hasOwnProperty('modified_on_func') ? overrides.modified_on_func! : aDatetimeFunctionsInput(),
        storage: overrides && overrides.hasOwnProperty('storage') ? overrides.storage! : 'illo',
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : 'at',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'consectetur',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'labore',
        uploaded_by: overrides && overrides.hasOwnProperty('uploaded_by') ? overrides.uploaded_by! : aCreateDirectusUsersInput(),
        uploaded_on: overrides && overrides.hasOwnProperty('uploaded_on') ? overrides.uploaded_on! : '1970-01-02T12:53:45.995Z',
        uploaded_on_func: overrides && overrides.hasOwnProperty('uploaded_on_func') ? overrides.uploaded_on_func! : aDatetimeFunctionsInput(),
        width: overrides && overrides.hasOwnProperty('width') ? overrides.width! : 8859,
    };
};

export const aCreateDirectusFoldersInput = (overrides?: Partial<CreateDirectusFoldersInput>): CreateDirectusFoldersInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '4e01c4fc-aa47-42ea-8540-c19242a73b61',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'illo',
        parent: overrides && overrides.hasOwnProperty('parent') ? overrides.parent! : aCreateDirectusFoldersInput(),
    };
};

export const aCreateDirectusRolesInput = (overrides?: Partial<CreateDirectusRolesInput>): CreateDirectusRolesInput => {
    return {
        admin_access: overrides && overrides.hasOwnProperty('admin_access') ? overrides.admin_access! : false,
        app_access: overrides && overrides.hasOwnProperty('app_access') ? overrides.app_access! : true,
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'corrupti',
        enforce_tfa: overrides && overrides.hasOwnProperty('enforce_tfa') ? overrides.enforce_tfa! : false,
        icon: overrides && overrides.hasOwnProperty('icon') ? overrides.icon! : 'minus',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '9f3c65b9-5f16-403b-b01e-ed55b04d84d6',
        ip_access: overrides && overrides.hasOwnProperty('ip_access') ? overrides.ip_access! : ['ad'],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'minima',
        users: overrides && overrides.hasOwnProperty('users') ? overrides.users! : [aCreateDirectusUsersInput()],
    };
};

export const aCreateDirectusUsersInput = (overrides?: Partial<CreateDirectusUsersInput>): CreateDirectusUsersInput => {
    return {
        auth_data: overrides && overrides.hasOwnProperty('auth_data') ? overrides.auth_data! : 'tenetur',
        avatar: overrides && overrides.hasOwnProperty('avatar') ? overrides.avatar! : aCreateDirectusFilesInput(),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'eum',
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'error',
        email_notifications: overrides && overrides.hasOwnProperty('email_notifications') ? overrides.email_notifications! : false,
        external_identifier: overrides && overrides.hasOwnProperty('external_identifier') ? overrides.external_identifier! : 'amet',
        first_name: overrides && overrides.hasOwnProperty('first_name') ? overrides.first_name! : 'quos',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '42cb4e19-4ab9-4f0a-bfdf-b7d2deb310c8',
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : 'blanditiis',
        last_access: overrides && overrides.hasOwnProperty('last_access') ? overrides.last_access! : '1970-01-02T13:20:07.517Z',
        last_access_func: overrides && overrides.hasOwnProperty('last_access_func') ? overrides.last_access_func! : aDatetimeFunctionsInput(),
        last_name: overrides && overrides.hasOwnProperty('last_name') ? overrides.last_name! : 'et',
        last_page: overrides && overrides.hasOwnProperty('last_page') ? overrides.last_page! : 'omnis',
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : 'dolores',
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : 'omnis',
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : 'neque',
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : aCreateDirectusRolesInput(),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'qui',
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : 'dolor',
        tfa_secret: overrides && overrides.hasOwnProperty('tfa_secret') ? overrides.tfa_secret! : 'hic',
        theme: overrides && overrides.hasOwnProperty('theme') ? overrides.theme! : 'sint',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'enim',
        token: overrides && overrides.hasOwnProperty('token') ? overrides.token! : 'autem',
    };
};

export const aCreateRestaurantInput = (overrides?: Partial<CreateRestaurantInput>): CreateRestaurantInput => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-05T06:39:07.798Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionsInput(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-11T08:40:07.444Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionsInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '52e633cc-4eb6-48f8-a95b-6f371079aa65',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'ratione',
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'omnis',
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aCreateDirectusUsersInput(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aCreateDirectusUsersInput(),
    };
};

export const aDateFilterOperators = (overrides?: Partial<DateFilterOperators>): DateFilterOperators => {
    return {
        _eq: overrides && overrides.hasOwnProperty('_eq') ? overrides._eq! : 'quaerat',
        _gt: overrides && overrides.hasOwnProperty('_gt') ? overrides._gt! : 'facere',
        _gte: overrides && overrides.hasOwnProperty('_gte') ? overrides._gte! : 'eos',
        _lt: overrides && overrides.hasOwnProperty('_lt') ? overrides._lt! : 'ad',
        _lte: overrides && overrides.hasOwnProperty('_lte') ? overrides._lte! : 'ut',
        _neq: overrides && overrides.hasOwnProperty('_neq') ? overrides._neq! : 'omnis',
        _nnull: overrides && overrides.hasOwnProperty('_nnull') ? overrides._nnull! : true,
        _null: overrides && overrides.hasOwnProperty('_null') ? overrides._null! : true,
    };
};

export const aDatetimeFunctionFilterOperators = (overrides?: Partial<DatetimeFunctionFilterOperators>): DatetimeFunctionFilterOperators => {
    return {
        day: overrides && overrides.hasOwnProperty('day') ? overrides.day! : aNumberFilterOperators(),
        hour: overrides && overrides.hasOwnProperty('hour') ? overrides.hour! : aNumberFilterOperators(),
        minute: overrides && overrides.hasOwnProperty('minute') ? overrides.minute! : aNumberFilterOperators(),
        month: overrides && overrides.hasOwnProperty('month') ? overrides.month! : aNumberFilterOperators(),
        second: overrides && overrides.hasOwnProperty('second') ? overrides.second! : aNumberFilterOperators(),
        week: overrides && overrides.hasOwnProperty('week') ? overrides.week! : aNumberFilterOperators(),
        weekday: overrides && overrides.hasOwnProperty('weekday') ? overrides.weekday! : aNumberFilterOperators(),
        year: overrides && overrides.hasOwnProperty('year') ? overrides.year! : aNumberFilterOperators(),
    };
};

export const aDatetimeFunctions = (overrides?: Partial<DatetimeFunctions>): DatetimeFunctions => {
    return {
        day: overrides && overrides.hasOwnProperty('day') ? overrides.day! : 6751,
        hour: overrides && overrides.hasOwnProperty('hour') ? overrides.hour! : 4788,
        minute: overrides && overrides.hasOwnProperty('minute') ? overrides.minute! : 1565,
        month: overrides && overrides.hasOwnProperty('month') ? overrides.month! : 5250,
        second: overrides && overrides.hasOwnProperty('second') ? overrides.second! : 8118,
        week: overrides && overrides.hasOwnProperty('week') ? overrides.week! : 6439,
        weekday: overrides && overrides.hasOwnProperty('weekday') ? overrides.weekday! : 6325,
        year: overrides && overrides.hasOwnProperty('year') ? overrides.year! : 6131,
    };
};

export const aDatetimeFunctionsInput = (overrides?: Partial<DatetimeFunctionsInput>): DatetimeFunctionsInput => {
    return {
        day: overrides && overrides.hasOwnProperty('day') ? overrides.day! : 8473,
        hour: overrides && overrides.hasOwnProperty('hour') ? overrides.hour! : 4320,
        minute: overrides && overrides.hasOwnProperty('minute') ? overrides.minute! : 1958,
        month: overrides && overrides.hasOwnProperty('month') ? overrides.month! : 7265,
        second: overrides && overrides.hasOwnProperty('second') ? overrides.second! : 2395,
        week: overrides && overrides.hasOwnProperty('week') ? overrides.week! : 1103,
        weekday: overrides && overrides.hasOwnProperty('weekday') ? overrides.weekday! : 2077,
        year: overrides && overrides.hasOwnProperty('year') ? overrides.year! : 9940,
    };
};

export const aDeleteMany = (overrides?: Partial<DeleteMany>): DeleteMany => {
    return {
        ids: overrides && overrides.hasOwnProperty('ids') ? overrides.ids! : ['ce26b5a1-003a-4e0d-9e47-bc3ffd5ba6a3'],
    };
};

export const aDeleteOne = (overrides?: Partial<DeleteOne>): DeleteOne => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'd0b0a19a-a721-4a35-a3cb-7c99580eb8ce',
    };
};

export const aDirectusFiles = (overrides?: Partial<DirectusFiles>): DirectusFiles => {
    return {
        charset: overrides && overrides.hasOwnProperty('charset') ? overrides.charset! : 'aspernatur',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'quia',
        duration: overrides && overrides.hasOwnProperty('duration') ? overrides.duration! : 6666,
        embed: overrides && overrides.hasOwnProperty('embed') ? overrides.embed! : 'nihil',
        filename_disk: overrides && overrides.hasOwnProperty('filename_disk') ? overrides.filename_disk! : 'debitis',
        filename_download: overrides && overrides.hasOwnProperty('filename_download') ? overrides.filename_download! : 'laudantium',
        filesize: overrides && overrides.hasOwnProperty('filesize') ? overrides.filesize! : 7422,
        folder: overrides && overrides.hasOwnProperty('folder') ? overrides.folder! : aDirectusFolders(),
        height: overrides && overrides.hasOwnProperty('height') ? overrides.height! : 5935,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '4ff67016-13de-4f23-8780-72121f1d91ff',
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : 'eligendi',
        metadata: overrides && overrides.hasOwnProperty('metadata') ? overrides.metadata! : 'sit',
        modified_by: overrides && overrides.hasOwnProperty('modified_by') ? overrides.modified_by! : aDirectusUsers(),
        modified_on: overrides && overrides.hasOwnProperty('modified_on') ? overrides.modified_on! : '1970-01-01T05:17:08.518Z',
        modified_on_func: overrides && overrides.hasOwnProperty('modified_on_func') ? overrides.modified_on_func! : aDatetimeFunctions(),
        storage: overrides && overrides.hasOwnProperty('storage') ? overrides.storage! : 'quo',
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : 'libero',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'error',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'molestiae',
        uploaded_by: overrides && overrides.hasOwnProperty('uploaded_by') ? overrides.uploaded_by! : aDirectusUsers(),
        uploaded_on: overrides && overrides.hasOwnProperty('uploaded_on') ? overrides.uploaded_on! : '1970-01-06T01:35:56.476Z',
        uploaded_on_func: overrides && overrides.hasOwnProperty('uploaded_on_func') ? overrides.uploaded_on_func! : aDatetimeFunctions(),
        width: overrides && overrides.hasOwnProperty('width') ? overrides.width! : 7053,
    };
};

export const aDirectusFilesFilter = (overrides?: Partial<DirectusFilesFilter>): DirectusFilesFilter => {
    return {
        _and: overrides && overrides.hasOwnProperty('_and') ? overrides._and! : [aDirectusFilesFilter()],
        _or: overrides && overrides.hasOwnProperty('_or') ? overrides._or! : [aDirectusFilesFilter()],
        charset: overrides && overrides.hasOwnProperty('charset') ? overrides.charset! : aStringFilterOperators(),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : aStringFilterOperators(),
        duration: overrides && overrides.hasOwnProperty('duration') ? overrides.duration! : aNumberFilterOperators(),
        embed: overrides && overrides.hasOwnProperty('embed') ? overrides.embed! : aStringFilterOperators(),
        filename_disk: overrides && overrides.hasOwnProperty('filename_disk') ? overrides.filename_disk! : aStringFilterOperators(),
        filename_download: overrides && overrides.hasOwnProperty('filename_download') ? overrides.filename_download! : aStringFilterOperators(),
        filesize: overrides && overrides.hasOwnProperty('filesize') ? overrides.filesize! : aNumberFilterOperators(),
        folder: overrides && overrides.hasOwnProperty('folder') ? overrides.folder! : aDirectusFoldersFilter(),
        height: overrides && overrides.hasOwnProperty('height') ? overrides.height! : aNumberFilterOperators(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : aStringFilterOperators(),
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : aStringFilterOperators(),
        metadata: overrides && overrides.hasOwnProperty('metadata') ? overrides.metadata! : aStringFilterOperators(),
        modified_by: overrides && overrides.hasOwnProperty('modified_by') ? overrides.modified_by! : aDirectusUsersFilter(),
        modified_on: overrides && overrides.hasOwnProperty('modified_on') ? overrides.modified_on! : aDateFilterOperators(),
        modified_on_func: overrides && overrides.hasOwnProperty('modified_on_func') ? overrides.modified_on_func! : aDatetimeFunctionFilterOperators(),
        storage: overrides && overrides.hasOwnProperty('storage') ? overrides.storage! : aStringFilterOperators(),
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : aStringFilterOperators(),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : aStringFilterOperators(),
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : aStringFilterOperators(),
        uploaded_by: overrides && overrides.hasOwnProperty('uploaded_by') ? overrides.uploaded_by! : aDirectusUsersFilter(),
        uploaded_on: overrides && overrides.hasOwnProperty('uploaded_on') ? overrides.uploaded_on! : aDateFilterOperators(),
        uploaded_on_func: overrides && overrides.hasOwnProperty('uploaded_on_func') ? overrides.uploaded_on_func! : aDatetimeFunctionFilterOperators(),
        width: overrides && overrides.hasOwnProperty('width') ? overrides.width! : aNumberFilterOperators(),
    };
};

export const aDirectusFolders = (overrides?: Partial<DirectusFolders>): DirectusFolders => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '6a9f1a3b-58fd-45e8-a8fe-1e16d2db52e3',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'enim',
        parent: overrides && overrides.hasOwnProperty('parent') ? overrides.parent! : aDirectusFolders(),
    };
};

export const aDirectusFoldersFilter = (overrides?: Partial<DirectusFoldersFilter>): DirectusFoldersFilter => {
    return {
        _and: overrides && overrides.hasOwnProperty('_and') ? overrides._and! : [aDirectusFoldersFilter()],
        _or: overrides && overrides.hasOwnProperty('_or') ? overrides._or! : [aDirectusFoldersFilter()],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : aStringFilterOperators(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : aStringFilterOperators(),
        parent: overrides && overrides.hasOwnProperty('parent') ? overrides.parent! : aDirectusFoldersFilter(),
    };
};

export const aDirectusRoles = (overrides?: Partial<DirectusRoles>): DirectusRoles => {
    return {
        admin_access: overrides && overrides.hasOwnProperty('admin_access') ? overrides.admin_access! : true,
        app_access: overrides && overrides.hasOwnProperty('app_access') ? overrides.app_access! : true,
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'dolores',
        enforce_tfa: overrides && overrides.hasOwnProperty('enforce_tfa') ? overrides.enforce_tfa! : false,
        icon: overrides && overrides.hasOwnProperty('icon') ? overrides.icon! : 'in',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '7a3fdd79-234f-4a85-82dd-b8f757787f06',
        ip_access: overrides && overrides.hasOwnProperty('ip_access') ? overrides.ip_access! : ['reprehenderit'],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'cumque',
        users: overrides && overrides.hasOwnProperty('users') ? overrides.users! : [aDirectusUsers()],
    };
};

export const aDirectusRolesFilter = (overrides?: Partial<DirectusRolesFilter>): DirectusRolesFilter => {
    return {
        _and: overrides && overrides.hasOwnProperty('_and') ? overrides._and! : [aDirectusRolesFilter()],
        _or: overrides && overrides.hasOwnProperty('_or') ? overrides._or! : [aDirectusRolesFilter()],
        admin_access: overrides && overrides.hasOwnProperty('admin_access') ? overrides.admin_access! : aBooleanFilterOperators(),
        app_access: overrides && overrides.hasOwnProperty('app_access') ? overrides.app_access! : aBooleanFilterOperators(),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : aStringFilterOperators(),
        enforce_tfa: overrides && overrides.hasOwnProperty('enforce_tfa') ? overrides.enforce_tfa! : aBooleanFilterOperators(),
        icon: overrides && overrides.hasOwnProperty('icon') ? overrides.icon! : aStringFilterOperators(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : aStringFilterOperators(),
        ip_access: overrides && overrides.hasOwnProperty('ip_access') ? overrides.ip_access! : aStringFilterOperators(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : aStringFilterOperators(),
        users: overrides && overrides.hasOwnProperty('users') ? overrides.users! : aDirectusUsersFilter(),
    };
};

export const aDirectusUsers = (overrides?: Partial<DirectusUsers>): DirectusUsers => {
    return {
        auth_data: overrides && overrides.hasOwnProperty('auth_data') ? overrides.auth_data! : 'cupiditate',
        avatar: overrides && overrides.hasOwnProperty('avatar') ? overrides.avatar! : aDirectusFiles(),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'earum',
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'dolor',
        email_notifications: overrides && overrides.hasOwnProperty('email_notifications') ? overrides.email_notifications! : true,
        external_identifier: overrides && overrides.hasOwnProperty('external_identifier') ? overrides.external_identifier! : 'velit',
        first_name: overrides && overrides.hasOwnProperty('first_name') ? overrides.first_name! : 'sed',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '6c9806ce-3499-4c8a-bf99-2fef6cb6a6c8',
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : 'veritatis',
        last_access: overrides && overrides.hasOwnProperty('last_access') ? overrides.last_access! : '1970-01-12T22:08:08.316Z',
        last_access_func: overrides && overrides.hasOwnProperty('last_access_func') ? overrides.last_access_func! : aDatetimeFunctions(),
        last_name: overrides && overrides.hasOwnProperty('last_name') ? overrides.last_name! : 'expedita',
        last_page: overrides && overrides.hasOwnProperty('last_page') ? overrides.last_page! : 'consequatur',
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : 'nihil',
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : 'velit',
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : 'sequi',
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : aDirectusRoles(),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'atque',
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : 'modi',
        tfa_secret: overrides && overrides.hasOwnProperty('tfa_secret') ? overrides.tfa_secret! : 'totam',
        theme: overrides && overrides.hasOwnProperty('theme') ? overrides.theme! : 'amet',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'porro',
        token: overrides && overrides.hasOwnProperty('token') ? overrides.token! : 'distinctio',
    };
};

export const aDirectusUsersFilter = (overrides?: Partial<DirectusUsersFilter>): DirectusUsersFilter => {
    return {
        _and: overrides && overrides.hasOwnProperty('_and') ? overrides._and! : [aDirectusUsersFilter()],
        _or: overrides && overrides.hasOwnProperty('_or') ? overrides._or! : [aDirectusUsersFilter()],
        auth_data: overrides && overrides.hasOwnProperty('auth_data') ? overrides.auth_data! : aStringFilterOperators(),
        avatar: overrides && overrides.hasOwnProperty('avatar') ? overrides.avatar! : aDirectusFilesFilter(),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : aStringFilterOperators(),
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : aStringFilterOperators(),
        email_notifications: overrides && overrides.hasOwnProperty('email_notifications') ? overrides.email_notifications! : aBooleanFilterOperators(),
        external_identifier: overrides && overrides.hasOwnProperty('external_identifier') ? overrides.external_identifier! : aStringFilterOperators(),
        first_name: overrides && overrides.hasOwnProperty('first_name') ? overrides.first_name! : aStringFilterOperators(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : aStringFilterOperators(),
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : aStringFilterOperators(),
        last_access: overrides && overrides.hasOwnProperty('last_access') ? overrides.last_access! : aDateFilterOperators(),
        last_access_func: overrides && overrides.hasOwnProperty('last_access_func') ? overrides.last_access_func! : aDatetimeFunctionFilterOperators(),
        last_name: overrides && overrides.hasOwnProperty('last_name') ? overrides.last_name! : aStringFilterOperators(),
        last_page: overrides && overrides.hasOwnProperty('last_page') ? overrides.last_page! : aStringFilterOperators(),
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : aStringFilterOperators(),
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : aStringFilterOperators(),
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : aStringFilterOperators(),
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : aDirectusRolesFilter(),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : aStringFilterOperators(),
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : aStringFilterOperators(),
        tfa_secret: overrides && overrides.hasOwnProperty('tfa_secret') ? overrides.tfa_secret! : aStringFilterOperators(),
        theme: overrides && overrides.hasOwnProperty('theme') ? overrides.theme! : aStringFilterOperators(),
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : aStringFilterOperators(),
        token: overrides && overrides.hasOwnProperty('token') ? overrides.token! : aStringFilterOperators(),
    };
};

export const aNumberFilterOperators = (overrides?: Partial<NumberFilterOperators>): NumberFilterOperators => {
    return {
        _eq: overrides && overrides.hasOwnProperty('_eq') ? overrides._eq! : 7.92,
        _gt: overrides && overrides.hasOwnProperty('_gt') ? overrides._gt! : 2.76,
        _gte: overrides && overrides.hasOwnProperty('_gte') ? overrides._gte! : 2.83,
        _in: overrides && overrides.hasOwnProperty('_in') ? overrides._in! : [4.51],
        _lt: overrides && overrides.hasOwnProperty('_lt') ? overrides._lt! : 4.31,
        _lte: overrides && overrides.hasOwnProperty('_lte') ? overrides._lte! : 4.94,
        _neq: overrides && overrides.hasOwnProperty('_neq') ? overrides._neq! : 7.92,
        _nin: overrides && overrides.hasOwnProperty('_nin') ? overrides._nin! : [8.37],
        _nnull: overrides && overrides.hasOwnProperty('_nnull') ? overrides._nnull! : false,
        _null: overrides && overrides.hasOwnProperty('_null') ? overrides._null! : true,
    };
};

export const aRestaurant = (overrides?: Partial<Restaurant>): Restaurant => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-09T03:00:03.613Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctions(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-09T19:08:44.968Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctions(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '9f2be2f6-5d9e-4449-9cf4-0d31bd797a1f',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'iusto',
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'inventore',
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aDirectusUsers(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aDirectusUsers(),
    };
};

export const aRestaurantAggregated = (overrides?: Partial<RestaurantAggregated>): RestaurantAggregated => {
    return {
        avg: overrides && overrides.hasOwnProperty('avg') ? overrides.avg! : aRestaurantAggregatedFields(),
        avgDistinct: overrides && overrides.hasOwnProperty('avgDistinct') ? overrides.avgDistinct! : aRestaurantAggregatedFields(),
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : aRestaurantAggregatedFields(),
        countDistinct: overrides && overrides.hasOwnProperty('countDistinct') ? overrides.countDistinct! : aRestaurantAggregatedFields(),
        group: overrides && overrides.hasOwnProperty('group') ? overrides.group! : 'quibusdam',
        max: overrides && overrides.hasOwnProperty('max') ? overrides.max! : aRestaurantAggregatedFields(),
        min: overrides && overrides.hasOwnProperty('min') ? overrides.min! : aRestaurantAggregatedFields(),
        sum: overrides && overrides.hasOwnProperty('sum') ? overrides.sum! : aRestaurantAggregatedFields(),
        sumDistinct: overrides && overrides.hasOwnProperty('sumDistinct') ? overrides.sumDistinct! : aRestaurantAggregatedFields(),
    };
};

export const aRestaurantAggregatedFields = (overrides?: Partial<RestaurantAggregatedFields>): RestaurantAggregatedFields => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 9.68,
    };
};

export const aRestaurantFilter = (overrides?: Partial<RestaurantFilter>): RestaurantFilter => {
    return {
        _and: overrides && overrides.hasOwnProperty('_and') ? overrides._and! : [aRestaurantFilter()],
        _or: overrides && overrides.hasOwnProperty('_or') ? overrides._or! : [aRestaurantFilter()],
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : aDateFilterOperators(),
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionFilterOperators(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : aDateFilterOperators(),
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionFilterOperators(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : aNumberFilterOperators(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : aStringFilterOperators(),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : aStringFilterOperators(),
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : aDirectusUsersFilter(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : aDirectusUsersFilter(),
    };
};

export const aStringFilterOperators = (overrides?: Partial<StringFilterOperators>): StringFilterOperators => {
    return {
        _contains: overrides && overrides.hasOwnProperty('_contains') ? overrides._contains! : 'unde',
        _empty: overrides && overrides.hasOwnProperty('_empty') ? overrides._empty! : true,
        _ends_with: overrides && overrides.hasOwnProperty('_ends_with') ? overrides._ends_with! : 'rem',
        _eq: overrides && overrides.hasOwnProperty('_eq') ? overrides._eq! : 'animi',
        _in: overrides && overrides.hasOwnProperty('_in') ? overrides._in! : ['quia'],
        _ncontains: overrides && overrides.hasOwnProperty('_ncontains') ? overrides._ncontains! : 'est',
        _nempty: overrides && overrides.hasOwnProperty('_nempty') ? overrides._nempty! : false,
        _nends_with: overrides && overrides.hasOwnProperty('_nends_with') ? overrides._nends_with! : 'eligendi',
        _neq: overrides && overrides.hasOwnProperty('_neq') ? overrides._neq! : 'dignissimos',
        _nin: overrides && overrides.hasOwnProperty('_nin') ? overrides._nin! : ['sint'],
        _nnull: overrides && overrides.hasOwnProperty('_nnull') ? overrides._nnull! : false,
        _nstarts_with: overrides && overrides.hasOwnProperty('_nstarts_with') ? overrides._nstarts_with! : 'incidunt',
        _null: overrides && overrides.hasOwnProperty('_null') ? overrides._null! : false,
        _starts_with: overrides && overrides.hasOwnProperty('_starts_with') ? overrides._starts_with! : 'at',
    };
};

export const anUpdateCatInput = (overrides?: Partial<UpdateCatInput>): UpdateCatInput => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-13T01:13:38.411Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionsInput(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-15T13:25:41.643Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionsInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '2ee2ffcc-0048-4d3e-9521-7d14c5f11cf1',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'repellat',
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : anUpdateDirectusUsersInput(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : anUpdateDirectusUsersInput(),
    };
};

export const anUpdateDirectusFilesInput = (overrides?: Partial<UpdateDirectusFilesInput>): UpdateDirectusFilesInput => {
    return {
        charset: overrides && overrides.hasOwnProperty('charset') ? overrides.charset! : 'praesentium',
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'sed',
        duration: overrides && overrides.hasOwnProperty('duration') ? overrides.duration! : 770,
        embed: overrides && overrides.hasOwnProperty('embed') ? overrides.embed! : 'est',
        filename_disk: overrides && overrides.hasOwnProperty('filename_disk') ? overrides.filename_disk! : 'fugiat',
        filename_download: overrides && overrides.hasOwnProperty('filename_download') ? overrides.filename_download! : 'eos',
        filesize: overrides && overrides.hasOwnProperty('filesize') ? overrides.filesize! : 8900,
        folder: overrides && overrides.hasOwnProperty('folder') ? overrides.folder! : anUpdateDirectusFoldersInput(),
        height: overrides && overrides.hasOwnProperty('height') ? overrides.height! : 5382,
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '8105d55b-e81e-4eb9-aab6-195c53ac0da8',
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : 'ab',
        metadata: overrides && overrides.hasOwnProperty('metadata') ? overrides.metadata! : 'facere',
        modified_by: overrides && overrides.hasOwnProperty('modified_by') ? overrides.modified_by! : anUpdateDirectusUsersInput(),
        modified_on: overrides && overrides.hasOwnProperty('modified_on') ? overrides.modified_on! : '1970-01-15T04:36:38.341Z',
        modified_on_func: overrides && overrides.hasOwnProperty('modified_on_func') ? overrides.modified_on_func! : aDatetimeFunctionsInput(),
        storage: overrides && overrides.hasOwnProperty('storage') ? overrides.storage! : 'rerum',
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : 'voluptatem',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'animi',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'aut',
        uploaded_by: overrides && overrides.hasOwnProperty('uploaded_by') ? overrides.uploaded_by! : anUpdateDirectusUsersInput(),
        uploaded_on: overrides && overrides.hasOwnProperty('uploaded_on') ? overrides.uploaded_on! : '1970-01-07T04:52:09.103Z',
        uploaded_on_func: overrides && overrides.hasOwnProperty('uploaded_on_func') ? overrides.uploaded_on_func! : aDatetimeFunctionsInput(),
        width: overrides && overrides.hasOwnProperty('width') ? overrides.width! : 1282,
    };
};

export const anUpdateDirectusFoldersInput = (overrides?: Partial<UpdateDirectusFoldersInput>): UpdateDirectusFoldersInput => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'fe02e8a5-3b0c-434b-8526-dbb88b503719',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'ratione',
        parent: overrides && overrides.hasOwnProperty('parent') ? overrides.parent! : anUpdateDirectusFoldersInput(),
    };
};

export const anUpdateDirectusRolesInput = (overrides?: Partial<UpdateDirectusRolesInput>): UpdateDirectusRolesInput => {
    return {
        admin_access: overrides && overrides.hasOwnProperty('admin_access') ? overrides.admin_access! : false,
        app_access: overrides && overrides.hasOwnProperty('app_access') ? overrides.app_access! : true,
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'eos',
        enforce_tfa: overrides && overrides.hasOwnProperty('enforce_tfa') ? overrides.enforce_tfa! : false,
        icon: overrides && overrides.hasOwnProperty('icon') ? overrides.icon! : 'aut',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'e00df04b-c7e1-4f22-a24d-cc7bfe6720aa',
        ip_access: overrides && overrides.hasOwnProperty('ip_access') ? overrides.ip_access! : ['quos'],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'voluptas',
        users: overrides && overrides.hasOwnProperty('users') ? overrides.users! : [anUpdateDirectusUsersInput()],
    };
};

export const anUpdateDirectusUsersInput = (overrides?: Partial<UpdateDirectusUsersInput>): UpdateDirectusUsersInput => {
    return {
        auth_data: overrides && overrides.hasOwnProperty('auth_data') ? overrides.auth_data! : 'enim',
        avatar: overrides && overrides.hasOwnProperty('avatar') ? overrides.avatar! : anUpdateDirectusFilesInput(),
        description: overrides && overrides.hasOwnProperty('description') ? overrides.description! : 'aut',
        email: overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'quia',
        email_notifications: overrides && overrides.hasOwnProperty('email_notifications') ? overrides.email_notifications! : false,
        external_identifier: overrides && overrides.hasOwnProperty('external_identifier') ? overrides.external_identifier! : 'odit',
        first_name: overrides && overrides.hasOwnProperty('first_name') ? overrides.first_name! : 'expedita',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '95417fe5-058b-4f12-989b-b2912c8cfacf',
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : 'eius',
        last_access: overrides && overrides.hasOwnProperty('last_access') ? overrides.last_access! : '1970-01-01T23:57:35.604Z',
        last_access_func: overrides && overrides.hasOwnProperty('last_access_func') ? overrides.last_access_func! : aDatetimeFunctionsInput(),
        last_name: overrides && overrides.hasOwnProperty('last_name') ? overrides.last_name! : 'sed',
        last_page: overrides && overrides.hasOwnProperty('last_page') ? overrides.last_page! : 'sit',
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : 'accusantium',
        password: overrides && overrides.hasOwnProperty('password') ? overrides.password! : 'sequi',
        provider: overrides && overrides.hasOwnProperty('provider') ? overrides.provider! : 'necessitatibus',
        role: overrides && overrides.hasOwnProperty('role') ? overrides.role! : anUpdateDirectusRolesInput(),
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'et',
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : 'quaerat',
        tfa_secret: overrides && overrides.hasOwnProperty('tfa_secret') ? overrides.tfa_secret! : 'mollitia',
        theme: overrides && overrides.hasOwnProperty('theme') ? overrides.theme! : 'fugit',
        title: overrides && overrides.hasOwnProperty('title') ? overrides.title! : 'et',
        token: overrides && overrides.hasOwnProperty('token') ? overrides.token! : 'pariatur',
    };
};

export const anUpdateRestaurantInput = (overrides?: Partial<UpdateRestaurantInput>): UpdateRestaurantInput => {
    return {
        date_created: overrides && overrides.hasOwnProperty('date_created') ? overrides.date_created! : '1970-01-11T03:13:01.635Z',
        date_created_func: overrides && overrides.hasOwnProperty('date_created_func') ? overrides.date_created_func! : aDatetimeFunctionsInput(),
        date_updated: overrides && overrides.hasOwnProperty('date_updated') ? overrides.date_updated! : '1970-01-13T14:05:35.333Z',
        date_updated_func: overrides && overrides.hasOwnProperty('date_updated_func') ? overrides.date_updated_func! : aDatetimeFunctionsInput(),
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'e19dd2bd-496f-43d5-8efe-a7e7dce8a061',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'inventore',
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'ea',
        user_created: overrides && overrides.hasOwnProperty('user_created') ? overrides.user_created! : anUpdateDirectusUsersInput(),
        user_updated: overrides && overrides.hasOwnProperty('user_updated') ? overrides.user_updated! : anUpdateDirectusUsersInput(),
    };
};
