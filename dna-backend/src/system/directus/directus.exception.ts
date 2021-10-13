import { HttpException, HttpStatus } from '@nestjs/common';

export class EnviromentVariableDockerDnaIPV4NotDefinedException extends HttpException {
  constructor() {
    super('Enviroment variable DOCKER_DNA_IPV4_DIRECTUS not defined', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export class EnviromentVariableDirectusPortNotDefinedException extends HttpException {
  constructor() {
    super('Enviroment variable DIRECTUS_PORT not defined', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
