import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from './directus.sdk';
import { EnviromentVariableDirectusIPNotDefinedException } from './directus.exception';

@Injectable()
export class DirectusService {
  getSdk(accessToken: string) {
    return getSdk(this.getGraphqlClient(accessToken));
  }

  private getGraphqlClient(accessToken: string) {
    const { DIRECTUS_IP } = this.getEnviromentVariables();

    return new GraphQLClient(`${DIRECTUS_IP}/graphql?access_token=${accessToken}`);
  }

  private getEnviromentVariables() {
    const { DIRECTUS_IP } = process.env;

    if (!DIRECTUS_IP) throw new EnviromentVariableDirectusIPNotDefinedException();

    return {
      DIRECTUS_IP,
    };
  }
}
