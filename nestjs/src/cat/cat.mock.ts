import { aCat } from '@system/directus/directus.mock';
import { CatByIdQuery, FindAllCatsQuery } from '@system/directus/directus.sdk';
import { GraphQLError } from 'graphql-request/dist/types';

type findAllCats = {
  data?: FindAllCatsQuery;
  extensions?: any;
  headers: Headers;
  status: number;
  errors?: GraphQLError[];
};

type catById = {
  data?: CatByIdQuery;
  extensions?: any;
  headers: Headers;
  status: number;
  errors?: GraphQLError[];
};

export const findAllCatsMock: () => Promise<findAllCats> = async () => {
  return {
    data: {
      cat: [getFakeCat()],
    },
    status: 200,
    headers: <any>{},
  };
};

export const catByIdMock: () => Promise<catById> = async () => {
  return {
    data: {
      cat_by_id: getFakeCat(),
    },
    status: 200,
    headers: <any>{},
  };
};

function getFakeCat() {
  return aCat({ user_created: null, user_updated: null });
}
