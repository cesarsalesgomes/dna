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
      cat: [{ id: '1' }],
    },
    status: 200,
    headers: <any>{},
  };
};
