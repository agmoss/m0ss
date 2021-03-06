import { Field, InputType } from "@nestjs/graphql";
import { Length, MaxLength } from "class-validator";

@InputType()
export class ArticleInput {
    @Field()
    @MaxLength(30)
    title: string;

    @Field()
    @Length(1, 255)
    description: string;

    @Field()
    @Length(1, 255)
    image: string;

    @Field()
    @Length(1, 255)
    markdown: string;

    @Field()
    internalLink: string;

    @Field()
    externalLink: string;
}
