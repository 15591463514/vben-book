import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResOp } from '../model/response.model';
import { Reflector } from '@nestjs/core';
import { BYPASS_KEY } from '../decorators/bypass.decorator';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  constructor(private readonly reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const bypass = this.reflector.get<boolean>(
      BYPASS_KEY,
      context.getHandler(),
    );

    if (bypass) return next.handle();

    return next.handle().pipe(
      map((data) => {
        return new ResOp(HttpStatus.OK, data ?? null);
      }),
    );
  }
}
