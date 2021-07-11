import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CurrentUser } from "../auth/CurrentUser";
import { JwtAuthGuard } from "../auth/guards/jwt.guard";
import { Role } from "../auth/role.enum";
import { Roles } from "../auth/roles.decorator";
import { RolesGqlGuard } from "../auth/guards/RolesGql.guard";
import { User } from "../users/user.entity";

import { GqlAuth } from "../auth/guards/gql.guard";
import { Article } from "./article.entity";
import { ArticlesService } from "./articles.service";
import { ArticleInput } from "./dto/article.dto";

@Resolver((of) => Article)
export class ArticlesResolver {
    constructor(private readonly articlesService: ArticlesService) {}

    @Query((returns) => [Article])
    async articles(): Promise<Article[]> {
        return await this.articlesService.findAll();
    }

    @Query((returns) => Article)
    async article(@Args("slug") slug: string): Promise<Article> {
        return await this.articlesService.findOne(slug);
    }

    @Mutation((returns) => Article)
    @UseGuards(GqlAuth, RolesGqlGuard)
    @Roles(Role.Admin)
    async addArticle(
        @Args("newArticle") newArticle: ArticleInput,
        @CurrentUser() user: User
    ): Promise<Article> {
        return await this.articlesService.create(newArticle);
    }
}
