import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import AuthenticationResponse from 'src/system/interfaces/AuthenticationResponse';

@Injectable()
export class SystemService {
  constructor(private httpService: HttpService) { }

  authenticate(): Observable<AxiosResponse<AuthenticationResponse>> {
    const { DOCKER_DIRECTUS_IP, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

    return this.httpService.post<AuthenticationResponse>(
      `${DOCKER_DIRECTUS_IP}/auth/login`,
      {
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
      },
    );
  }
}
