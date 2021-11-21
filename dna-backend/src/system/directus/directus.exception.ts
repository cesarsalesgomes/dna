import { HttpException, HttpStatus } from '@nestjs/common';

export class EnviromentVariableDirectusIPNotDefinedException extends HttpException {
  constructor() {
    super('Enviroment variable DIRECTUS_IP not defined', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
