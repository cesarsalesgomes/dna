import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ClientError } from 'graphql-request';
import { GraphQLResponse } from 'graphql-request/dist/types';

/**
 * Feature 0.2.0: NestJS Exception Filter (https://docs.nestjs.com/exception-filters)
 */
@Catch()
export default class ExceptionFilterImplementation implements ExceptionFilter {
  constructor() { }

  catch(exception: unknown, host: ArgumentsHost) {
    const response = this.getExpressResponse(host);

    if (exception instanceof ClientError) {
      this.handleDirectusResponseException(exception, response);
    } else {
      this.handleDefaultResponseException(exception, response);
    }
  }

  private getExpressResponse(host: ArgumentsHost) {
    return host.switchToHttp().getResponse<Response>();
  }

  private handleDirectusResponseException(
    error: ClientError,
    response: Response<any, Record<string, any>>,
  ) {
    this.handleResponseException(error.response, response);
  }

  private handleDefaultResponseException(
    error: unknown,
    response: Response<any, Record<string, any>>,
  ) {
    const graphqlResponse: GraphQLResponse = {
      status: HttpStatus.SERVICE_UNAVAILABLE,
      errors: [
        {
          message: 'Unexpected error',
          extensions: error,
        },
      ],
    };

    this.handleResponseException(graphqlResponse, response);
  }

  private handleResponseException(
    { errors, status }: GraphQLResponse,
    response: Response<any, Record<string, any>>,
  ) {
    response.status(status).json({
      errors,
    });
  }
}
