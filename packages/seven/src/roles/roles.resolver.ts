import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { GqlAuth } from "../auth/gql.guard";
import { Role } from "../auth/role.enum";
import { Roles as RolesDecorator } from "../auth/roles.decorator";
import { RolesGqlGuard } from "../auth/RolesGql.guard";
import { RolesInput } from "./dto/roles.dto";
import { Roles } from "./roles.entity";
import { RolesService } from "./roles.service";

@Resolver((of) => Roles)
export class RolesResolver {
    constructor(private readonly rolesService: RolesService) {}

    @Query((returns) => [Roles])
    async Roles(): Promise<Roles[]> {
        return await this.rolesService.findAll();
    }

    @Mutation((returns) => Roles)
    @UseGuards(GqlAuth, RolesGqlGuard)
    @RolesDecorator(Role.Admin)
    async addRoles(@Args("newRole") newRole: RolesInput): Promise<Roles> {
        return await this.rolesService.create(newRole);
    }
}
