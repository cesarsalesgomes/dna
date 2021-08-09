import { Injectable } from '@nestjs/common';

import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../../graphql/sdk';

@Injectable()
export class CatService {
  private client: GraphQLClient;

  constructor() {
    const {
      DOCKER_DNA_IPV4_DIRECTUS,
      DIRECTUS_PORT,
      DOCKER_DNA_DIRECTUS_ACCESS_TOKEN,
    } = process.env;

    this.client = new GraphQLClient(
      `http://${DOCKER_DNA_IPV4_DIRECTUS}:${DIRECTUS_PORT}/graphql?access_token=${DOCKER_DNA_DIRECTUS_ACCESS_TOKEN}`,
    );
  }

  async findAll() {
    const sdk = getSdk(this.client);

    const { data } = await sdk.findAllCats();

    return data.cat;
  }
}
