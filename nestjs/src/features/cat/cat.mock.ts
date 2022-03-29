import { aCat } from '@system/directus/directus.mock';
import { CatByIdQuery, FindAllCatsQuery } from '@system/directus/sdk/directus.sdk';
import { GraphQLError } from 'graphql-request/dist/types';

type FindAllCats = {
  data?: FindAllCatsQuery;
  extensions?: any;
  headers: Headers;
  status: number;
  errors?: GraphQLError[];
};

type CatById = {
  data?: CatByIdQuery;
  extensions?: any;
  headers: Headers;
  status: number;
  errors?: GraphQLError[];
};

function getFakeCat() {
  return aCat({ user_created: null, user_updated: null });
}

export const findAllCatsMock: () => Promise<FindAllCats> = async () => ({
  data: {
    cat: [getFakeCat()],
  },
  status: 200,
  headers: <any>{},
});

export const catByIdMock: () => Promise<CatById> = async () => ({
  data: {
    cat_by_id: getFakeCat(),
  },
  status: 200,
  headers: <any>{},
});
