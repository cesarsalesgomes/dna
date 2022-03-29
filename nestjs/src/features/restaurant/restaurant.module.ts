import { Module } from '@nestjs/common';
import { DirectusService } from '@system/directus/directus.service';

import { RestaurantRepository } from './restaurant.repository';
import { RestaurantService } from './restaurant.service';

@Module({
  providers: [RestaurantService, RestaurantRepository, DirectusService],
  exports: [RestaurantService]
})
export class RestaurantModule { }
