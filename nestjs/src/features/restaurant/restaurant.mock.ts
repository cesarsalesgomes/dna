import { aRestaurant } from '@system/directus/directus.mock';
import { FindRestaurantQuery, UpdateRestaurantMutation } from '@system/directus/sdk/directus.sdk';
import { GraphQLError } from 'graphql-request/dist/types';

type UpdateRestaurant = {
  data?: UpdateRestaurantMutation;
  extensions?: any;
  headers: Headers;
  status: number;
  errors?: GraphQLError[];
};

type FindRestaurant = {
  data?: FindRestaurantQuery;
  extensions?: any;
  headers: Headers;
  status: number;
  errors?: GraphQLError[];
};

function getFakeRestaurant() {
  return aRestaurant({ user_created: null, user_updated: null });
}

export const updateRestaurantMock: () => Promise<UpdateRestaurant> = async () => ({
  data: {
    update_restaurant_item: null,
  },
  status: 200,
  headers: <any>{},
});

export const findRestaurantMock: () => Promise<FindRestaurant> = async () => ({
  data: {
    restaurant: [getFakeRestaurant()],
  },
  status: 200,
  headers: <any>{},
});