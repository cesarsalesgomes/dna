import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@graphql/sdk';
import {
  EnviromentVariableDockerDnaIPV4NotDefinedException,
  EnviromentVariableDirectusPortNotDefinedException,
} from './directus.exception';

@Injectable()
export class DirectusService {
  getSdk(accessToken: string) {
    return getSdk(this.getGraphqlClient(accessToken));
  }

  private getGraphqlClient(accessToken: string) {
    const { DOCKER_DNA_IPV4_DIRECTUS, DIRECTUS_PORT } = this.getEnviromentVariables();

    return new GraphQLClient(`http://${DOCKER_DNA_IPV4_DIRECTUS}:${DIRECTUS_PORT}/graphql?access_token=${accessToken}`);
  }

  private getEnviromentVariables() {
    const { DOCKER_DNA_IPV4_DIRECTUS, DIRECTUS_PORT } = process.env;

    if (!DOCKER_DNA_IPV4_DIRECTUS) throw new EnviromentVariableDockerDnaIPV4NotDefinedException();
    if (!DIRECTUS_PORT) throw new EnviromentVariableDirectusPortNotDefinedException();

    return {
      DOCKER_DNA_IPV4_DIRECTUS,
      DIRECTUS_PORT,
    };
  }
}
