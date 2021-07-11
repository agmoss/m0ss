import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { AuthService } from "./auth.service";
import { AccessToken, LoginInput } from "./dto/auth.dto";
import { GqlAuth } from "./guards/gql.guard";
import { GqlStrategy } from "./strategies/gql.strategy";

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) {}

    @Mutation((returns) => AccessToken)
    async login(@Args("loginInput") userLogin: LoginInput) {
        return this.authService.login(userLogin);
    }
}
