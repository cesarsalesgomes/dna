import { aCat } from '@graphql/mock';
import { FindAllCatsQuery } from '@graphql/sdk';
import { GraphQLError } from 'graphql-request/dist/types';

type findAllCats = {
  data?: FindAllCatsQuery;
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

function getFakeCat() {
  return aCat({ user_created: null, user_updated: null });
}
