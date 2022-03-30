import { Module } from '@nestjs/common';
import { DirectusService } from '@system/directus/directus.service';

import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService, AuthRepository, DirectusService],
  exports: [AuthService]
})
export class AuthModule { }
