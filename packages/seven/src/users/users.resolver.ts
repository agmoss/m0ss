import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { GqlAuth } from "../auth/guards/gql.guard";
import { Role } from "../auth/role.enum";
import { Roles } from "../auth/roles.decorator";
import { RolesGqlGuard } from "../auth/guards/RolesGql.guard";
import { UserInput } from "./dto/user.dto";
import { User } from "./user.entity";
import { UsersService } from "./users.service";

@Resolver((of) => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query((returns) => User)
    async Users(@Args("email") email: string): Promise<User> {
        return await this.usersService.findOne(email);
    }

    @Mutation((returns) => User)
    // @UseGuards(GqlAuth, RolesGqlGuard)
    // @Roles(Role.Admin)
    async addUser(@Args("newUser") newUser: UserInput): Promise<User> {
        return await this.usersService.create(newUser);
    }
}
