import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, Length, MaxLength } from "class-validator";

@InputType()
export class ArticleInput {
    @Field()
    @MaxLength(30)
    title: string;

    @Field()
    @Length(1, 255)
    description: string;

    @Field({ nullable: true })
    @Length(1, 255)
    image: string;

    @Field()
    @Length(1, 255)
    markdown: string;

    @Field({ nullable: true })
    internalLink: string;

    @Field({ nullable: true })
    externalLink: string;
}
