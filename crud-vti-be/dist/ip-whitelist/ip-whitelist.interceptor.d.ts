import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class IpWhitelistInterceptor implements NestInterceptor {
    private allowedIps;
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
