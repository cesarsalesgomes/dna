import { Injectable } from '@nestjs/common';

import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(private authRepository: AuthRepository) { }

  async getAccessToken() {
    return (await this.authRepository.login()).access_token;
  }
}
