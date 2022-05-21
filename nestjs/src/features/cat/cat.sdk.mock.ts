import { GraphQLError } from 'graphql-request/dist/types';

import { aCat } from './cat.mock';
import { CatByIdQuery, FindAllCatsQuery, Sdk } from './cat.sdk';

type FindAllCats = {
  data: FindAllCatsQuery;
  extensions?: any;
  headers: Headers;
  status: number;
  errors?: GraphQLError[];
};

type CatById = {
  data: CatByIdQuery;
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

export const getCatSdkMock: Sdk = {
  findAllCats: findAllCatsMock,
  catById: catByIdMock,
};