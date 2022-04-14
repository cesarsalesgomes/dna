import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemStatus } from 'src/enums/system.enums';

import { RESTAURANT_NOT_FOUND_ERROR } from './restaurant.error';
import { RestaurantRepository } from './restaurant.repository';
import { Restaurant } from './restaurant.sdk';

@Injectable()
export class RestaurantService {
  constructor(private restaurantRepository: RestaurantRepository) { }

  async getRestaurantByName(accessToken: string, name: string) {
    const restaurant = await this.restaurantRepository.getRestaurantByName(accessToken, name);

    if (!restaurant) throw new NotFoundException(RESTAURANT_NOT_FOUND_ERROR);

    return restaurant;
  }

  disableRestaurant(accessToken: string, { id }: Restaurant) {
    return this.restaurantRepository.updateRestaurantById(accessToken, id, { status: ItemStatus.DISABLED });
  }

  checkIfRestaurantIsActive({ status }: Restaurant): boolean {
    return status === ItemStatus.ACTIVE;
  }
}
