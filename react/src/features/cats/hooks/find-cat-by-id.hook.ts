import { useNestGetFetcher } from '@config/react-query/nest/nest-get.fetcher';
import { Cat } from '@hooks/cat.hooks';
import GraphQLError from '@interfaces/graphql-error.interface';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export interface FindCatByIdVariables { id: number }

export const useFindCatByIdQuery = <
  TData = Cat,
  TError = GraphQLError
>(
  variables: FindCatByIdVariables,
  options?: UseQueryOptions<Cat, TError, TData>
) => {
  const findCatByIdUri = `/cats/${variables.id}`;

  return useQuery<Cat, TError, TData>(
    ['findCatById', variables.id],
    useNestGetFetcher<Cat, FindCatByIdVariables>(findCatByIdUri).bind(null, variables),
    options
  );
};
