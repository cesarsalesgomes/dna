import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@graphql/sdk';
import {
  EnviromentVariableDockerDnaIPV4NotDefinedException,
  EnviromentVariableDirectusPortNotDefinedException,
  EnviromentVariableDockerDnaDirectusAccessTokenNotDefinedException,
} from './directus.exception';

@Injectable()
export class DirectusService {
  private client: GraphQLClient;

  constructor() {
    this.setGraphqlClient();
  }

  get sdk() {
    return this.getSdk();
  }

  getSdk() {
    return getSdk(this.client);
  }

  private setGraphqlClient() {
    const {
      DOCKER_DNA_IPV4_DIRECTUS,
      DIRECTUS_PORT,
      DOCKER_DNA_DIRECTUS_ACCESS_TOKEN,
    } = this.getEnviromentVariables();

    this.client = new GraphQLClient(
      `http://${DOCKER_DNA_IPV4_DIRECTUS}:${DIRECTUS_PORT}/graphql?access_token=${DOCKER_DNA_DIRECTUS_ACCESS_TOKEN}`,
    );
  }

  private getEnviromentVariables() {
    const {
      DOCKER_DNA_IPV4_DIRECTUS,
      DIRECTUS_PORT,
      DOCKER_DNA_DIRECTUS_ACCESS_TOKEN,
    } = process.env;

    if (!DOCKER_DNA_IPV4_DIRECTUS)
      throw new EnviromentVariableDockerDnaIPV4NotDefinedException();

    if (!DIRECTUS_PORT)
      throw new EnviromentVariableDirectusPortNotDefinedException();

    if (!DOCKER_DNA_DIRECTUS_ACCESS_TOKEN)
      throw new EnviromentVariableDockerDnaDirectusAccessTokenNotDefinedException();

    return {
      DOCKER_DNA_IPV4_DIRECTUS,
      DIRECTUS_PORT,
      DOCKER_DNA_DIRECTUS_ACCESS_TOKEN,
    };
  }
}
