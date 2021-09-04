import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { GraphQLResponse } from 'graphql-request/dist/types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, GraphQLResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<GraphQLResponse<T>> {
    return next.handle().pipe(map((data) => ({ data, status: HttpStatus.OK })));
  }
}
