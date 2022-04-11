import { Mutation, Query, AuthTokens, Extensions, ServerInfo, UsersMeTfaGenerateData, AuthMode, GraphqlSdlScope } from './auth.sdk';

export const aMutation = (overrides?: Partial<Mutation>): Mutation => {
    return {
        auth_login: overrides && overrides.hasOwnProperty('auth_login') ? overrides.auth_login! : anAuthTokens(),
        auth_logout: overrides && overrides.hasOwnProperty('auth_logout') ? overrides.auth_logout! : false,
        auth_password_request: overrides && overrides.hasOwnProperty('auth_password_request') ? overrides.auth_password_request! : true,
        auth_password_reset: overrides && overrides.hasOwnProperty('auth_password_reset') ? overrides.auth_password_reset! : true,
        auth_refresh: overrides && overrides.hasOwnProperty('auth_refresh') ? overrides.auth_refresh! : anAuthTokens(),
        users_invite_accept: overrides && overrides.hasOwnProperty('users_invite_accept') ? overrides.users_invite_accept! : false,
        users_me_tfa_disable: overrides && overrides.hasOwnProperty('users_me_tfa_disable') ? overrides.users_me_tfa_disable! : false,
        users_me_tfa_enable: overrides && overrides.hasOwnProperty('users_me_tfa_enable') ? overrides.users_me_tfa_enable! : true,
        users_me_tfa_generate: overrides && overrides.hasOwnProperty('users_me_tfa_generate') ? overrides.users_me_tfa_generate! : aUsersMeTfaGenerateData(),
        utils_cache_clear: overrides && overrides.hasOwnProperty('utils_cache_clear') ? overrides.utils_cache_clear! : 'ipsam',
        utils_hash_generate: overrides && overrides.hasOwnProperty('utils_hash_generate') ? overrides.utils_hash_generate! : 'voluptas',
        utils_hash_verify: overrides && overrides.hasOwnProperty('utils_hash_verify') ? overrides.utils_hash_verify! : false,
        utils_revert: overrides && overrides.hasOwnProperty('utils_revert') ? overrides.utils_revert! : true,
        utils_sort: overrides && overrides.hasOwnProperty('utils_sort') ? overrides.utils_sort! : false,
    };
};

export const aQuery = (overrides?: Partial<Query>): Query => {
    return {
        _empty: overrides && overrides.hasOwnProperty('_empty') ? overrides._empty! : 'similique',
        extensions: overrides && overrides.hasOwnProperty('extensions') ? overrides.extensions! : anExtensions(),
        server_health: overrides && overrides.hasOwnProperty('server_health') ? overrides.server_health! : 'ut',
        server_info: overrides && overrides.hasOwnProperty('server_info') ? overrides.server_info! : aServerInfo(),
        server_ping: overrides && overrides.hasOwnProperty('server_ping') ? overrides.server_ping! : 'voluptatum',
        server_specs_graphql: overrides && overrides.hasOwnProperty('server_specs_graphql') ? overrides.server_specs_graphql! : 'et',
        server_specs_oas: overrides && overrides.hasOwnProperty('server_specs_oas') ? overrides.server_specs_oas! : 'quisquam',
    };
};

export const anAuthTokens = (overrides?: Partial<AuthTokens>): AuthTokens => {
    return {
        access_token: overrides && overrides.hasOwnProperty('access_token') ? overrides.access_token! : 'debitis',
        expires: overrides && overrides.hasOwnProperty('expires') ? overrides.expires! : 1105,
        refresh_token: overrides && overrides.hasOwnProperty('refresh_token') ? overrides.refresh_token! : 'iusto',
    };
};

export const anExtensions = (overrides?: Partial<Extensions>): Extensions => {
    return {
        displays: overrides && overrides.hasOwnProperty('displays') ? overrides.displays! : ['dolores'],
        interfaces: overrides && overrides.hasOwnProperty('interfaces') ? overrides.interfaces! : ['error'],
        layouts: overrides && overrides.hasOwnProperty('layouts') ? overrides.layouts! : ['expedita'],
        modules: overrides && overrides.hasOwnProperty('modules') ? overrides.modules! : ['aut'],
    };
};

export const aServerInfo = (overrides?: Partial<ServerInfo>): ServerInfo => {
    return {
        custom_css: overrides && overrides.hasOwnProperty('custom_css') ? overrides.custom_css! : 'sapiente',
        project_background: overrides && overrides.hasOwnProperty('project_background') ? overrides.project_background! : 'ad',
        project_color: overrides && overrides.hasOwnProperty('project_color') ? overrides.project_color! : 'et',
        project_foreground: overrides && overrides.hasOwnProperty('project_foreground') ? overrides.project_foreground! : 'nulla',
        project_logo: overrides && overrides.hasOwnProperty('project_logo') ? overrides.project_logo! : 'possimus',
        project_name: overrides && overrides.hasOwnProperty('project_name') ? overrides.project_name! : 'sed',
        project_note: overrides && overrides.hasOwnProperty('project_note') ? overrides.project_note! : 'accusamus',
    };
};

export const aUsersMeTfaGenerateData = (overrides?: Partial<UsersMeTfaGenerateData>): UsersMeTfaGenerateData => {
    return {
        otpauth_url: overrides && overrides.hasOwnProperty('otpauth_url') ? overrides.otpauth_url! : 'facere',
        secret: overrides && overrides.hasOwnProperty('secret') ? overrides.secret! : 'iusto',
    };
};
