import { Injectable } from '@nestjs/common';
import { ItemStatus } from 'src/enums/system.enums';

import { RestaurantRepository } from './restaurant.repository';

@Injectable()
export class RestaurantService {
  constructor(private restaurantRepository: RestaurantRepository) { }

  async disableRestaurantByName(accessToken: string, name: string) {
    const { id } = await this.restaurantRepository.getRestaurantByName(accessToken, name);

    await this.restaurantRepository.updateRestaurantById(accessToken, id, { status: ItemStatus.DISABLED });
  }

  async checkIfRestaurantIsActive(accessToken: string, name: string): Promise<boolean> {
    const { status } = await this.restaurantRepository.getRestaurantByName(accessToken, name);

    return status === ItemStatus.ACTIVE;
  }
}
