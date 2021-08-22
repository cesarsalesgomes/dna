import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@graphql/sdk';
import {
  ENVIROMENT_VARIABLE_DIRECTUS_PORT_NOT_DEFINED_ERROR,
  ENVIROMENT_VARIABLE_DOCKER_DNA_DIRECTUS_ACCESS_TOKEN_NOT_DEFINED_ERROR,
  ENVIROMENT_VARIABLE_DOCKER_DNA_IPV4_DIRECTUS_NOT_DEFINED_ERROR,
} from './directus.error';

@Injectable()
export class DirectusService {
  private client: GraphQLClient;

  constructor() {
    this.setGraphqlClient();
  }

  get sdk() {
    return getSdk(this.client);
  }

  private getEnviromentVariables() {
    const {
      DOCKER_DNA_IPV4_DIRECTUS,
      DIRECTUS_PORT,
      DOCKER_DNA_DIRECTUS_ACCESS_TOKEN,
    } = process.env;

    if (!DOCKER_DNA_IPV4_DIRECTUS)
      throw ENVIROMENT_VARIABLE_DOCKER_DNA_IPV4_DIRECTUS_NOT_DEFINED_ERROR;

    if (!DIRECTUS_PORT)
      throw ENVIROMENT_VARIABLE_DIRECTUS_PORT_NOT_DEFINED_ERROR;

    if (!DOCKER_DNA_DIRECTUS_ACCESS_TOKEN)
      throw ENVIROMENT_VARIABLE_DOCKER_DNA_DIRECTUS_ACCESS_TOKEN_NOT_DEFINED_ERROR;

    return {
      DOCKER_DNA_IPV4_DIRECTUS,
      DIRECTUS_PORT,
      DOCKER_DNA_DIRECTUS_ACCESS_TOKEN,
    };
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
}
