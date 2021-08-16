import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@graphql/sdk';

@Injectable()
export class DirectusService {
  private client: GraphQLClient;

  constructor() {
    this.setGraphqlClient();
  }

  setGraphqlClient() {
    try {
      const {
        DOCKER_DNA_IPV4_DIRECTUS,
        DIRECTUS_PORT,
        DOCKER_DNA_DIRECTUS_ACCESS_TOKEN,
      } = process.env;

      this.client = new GraphQLClient(
        `http://${DOCKER_DNA_IPV4_DIRECTUS}:${DIRECTUS_PORT}/graphql?access_token=${DOCKER_DNA_DIRECTUS_ACCESS_TOKEN}`,
      );
    } catch (error) {
      console.error(error);
      // TODO: interromper aplicação caso variáveis de ambiente não definidas
    }
  }

  get sdk() {
    return getSdk(this.client);
  }
}
