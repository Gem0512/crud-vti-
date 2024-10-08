import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(createUserDto: any): Promise<import("../users/entities/user.entity").User>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
