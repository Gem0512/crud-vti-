import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(createUserDto: any): Promise<import("../users/entities/user.entity").User>;
    login(req: any): Promise<{
        access_token: string;
    }>;
}
