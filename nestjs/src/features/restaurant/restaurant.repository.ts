import { Injectable } from '@nestjs/common';
import { DirectusService } from '@system/directus/directus.service';
import { UpdateRestaurantInput } from '@system/directus/sdk/directus.sdk';

@Injectable()
export class RestaurantRepository {
  constructor(private directusService: DirectusService) { }

  async getRestaurantByName(accessToken: string, restaurantName: string) {
    const { restaurant } = (await this.directusService.getSdk(accessToken).findRestaurant(
      { data: { name: { _eq: restaurantName } } })
    ).data;

    return restaurant[0];
  }

  async updateRestaurantById(accessToken: string, id: string, data: UpdateRestaurantInput) {
    return (await this.directusService.getSdk(accessToken).updateRestaurant(
      { id, data })
    ).data.update_restaurant_item;
  }
}
