import { Injectable } from '@nestjs/common';
import { DirectusService } from '@system/directus/directus.service';

import { getSdk } from './auth.sdk';

@Injectable()
export class AuthRepository {
  constructor(private directusService: DirectusService) { }

  private authSdk() {
    return getSdk(this.directusService.getSystemGraphqlClient());
  }

  async login() {
    const { DIRECTUS_ADMIN_EMAIL, DIRECTUS_ADMIN_PASSWORD } = process.env;

    return (await this.authSdk().authLogin(
      { email: DIRECTUS_ADMIN_EMAIL, password: DIRECTUS_ADMIN_PASSWORD }
    )).data.auth_login;
  }
}
