import { ForbiddenException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

import { User } from "../users/user.entity";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string): Promise<User> {
        const user = await this.usersService.findOne(email);

        if (!user) {
            throw new ForbiddenException("User not found!");
        }

        const validCredentials = await bcrypt.compare(password, user.password);

        if (!validCredentials) {
            throw new ForbiddenException("Credentials are invalid");
        }

        return user;
    }

    async login(user: any) {
        const _user = await this.validateUser(user.email, user.password);

        const payload = { email: _user.email, sub: _user.id };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}
