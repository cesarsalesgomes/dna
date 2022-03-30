import { Injectable } from '@nestjs/common';
import { DirectusService } from '@system/directus/directus.service';

@Injectable()
export class AuthRepository {
  constructor(private directusService: DirectusService) { }

  async login() {
    const { DIRECTUS_ADMIN_EMAIL, DIRECTUS_ADMIN_PASSWORD } = process.env;

    return (await this.directusService.getSystemSdk().authLogin(
      { email: DIRECTUS_ADMIN_EMAIL, password: DIRECTUS_ADMIN_PASSWORD }
    )).data.auth_login;
  }
}
