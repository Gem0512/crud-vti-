"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpWhitelistGuard = void 0;
const common_1 = require("@nestjs/common");
let IpWhitelistGuard = class IpWhitelistGuard {
    constructor() {
        this.allowedIps = ['127.0.0.1', '192.168.1.110'];
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const requestIp = request.ip || request.socket.remoteAddress;
        if (this.isIpAllowed(requestIp)) {
            console.log(`Access IP: ${requestIp}`);
            return true;
        }
        else {
            console.log(`Access denied from IP: ${requestIp}`);
            throw new common_1.ForbiddenException('Access denied from your IP address');
        }
    }
    isIpAllowed(ip) {
        return this.allowedIps.includes(ip);
    }
};
exports.IpWhitelistGuard = IpWhitelistGuard;
exports.IpWhitelistGuard = IpWhitelistGuard = __decorate([
    (0, common_1.Injectable)()
], IpWhitelistGuard);
//# sourceMappingURL=ip-whitelist.guard.js.map