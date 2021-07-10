import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GqlAuth } from "../auth/gql.guard";
import { Role } from "../auth/role.enum";
import { Roles } from "../auth/roles.decorator";
import { RolesGqlGuard } from "../auth/RolesGql.guard";

import { MediaInput } from "./dto/media.dto";
import { Media } from "./media.entity";
import { MediaService } from "./media.service";

@Resolver((of) => Media)
export class MediaResolver {
    constructor(private readonly mediaService: MediaService) {}

    @Query((returns) => [Media])
    @UseGuards(GqlAuth, RolesGqlGuard)
    @Roles(Role.User)
    async media(): Promise<Media[]> {
        return await this.mediaService.findAll();
    }

    @Mutation((returns) => Media)
    @UseGuards(GqlAuth, RolesGqlGuard)
    @Roles(Role.Admin)
    async addMedia(@Args("newMedia") newMedia: MediaInput): Promise<Media> {
        return await this.mediaService.create(newMedia);
    }
}
