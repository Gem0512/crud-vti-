import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class IpWhitelistGuard implements CanActivate {
    private allowedIps;
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    private isIpAllowed;
}
