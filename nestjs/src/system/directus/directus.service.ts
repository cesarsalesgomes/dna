import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';

import { EnviromentVariableDirectusIPNotDefinedException } from './directus.exception';
import { getSdk as getSystemSdk } from './sdk/directus-system.sdk';
import { getSdk } from './sdk/directus.sdk';

@Injectable()
export class DirectusService {
  getSdk(accessToken: string) {
    return getSdk(this.getGraphqlClient(accessToken));
  }

  getSystemSdk() {
    return getSystemSdk(this.getSystemGraphqlClient());
  }

  private getGraphqlClient(accessToken: string) {
    const { DIRECTUS_IP } = this.getEnviromentVariables();

    return new GraphQLClient(`${DIRECTUS_IP}/graphql?access_token=${accessToken}`);
  }

  private getSystemGraphqlClient() {
    const { DIRECTUS_IP } = this.getEnviromentVariables();

    return new GraphQLClient(`${DIRECTUS_IP}/graphql/system`);
  }

  private getEnviromentVariables() {
    const { DIRECTUS_IP } = process.env;

    if (!DIRECTUS_IP) throw new EnviromentVariableDirectusIPNotDefinedException();

    return {
      DIRECTUS_IP,
    };
  }
}
