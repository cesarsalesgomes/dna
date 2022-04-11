import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';

import { EnviromentVariableDirectusIPNotDefinedException } from './directus.exception';

@Injectable()
export class DirectusService {
  getGraphqlClient(accessToken: string) {
    const { DIRECTUS_IP } = this.getEnviromentVariables();

    return new GraphQLClient(`${DIRECTUS_IP}/graphql?access_token=${accessToken}`);
  }

  getSystemGraphqlClient() {
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
