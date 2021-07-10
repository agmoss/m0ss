import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "articles",
})
@ObjectType()
export class Article {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column()
    description: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    image: string;

    @Field()
    @Column()
    markdown: string;

    @Field()
    @Column({ name: "internal_link", nullable: true })
    internalLink: string;

    @Field()
    @Column({ name: "external_link" })
    externalLink: string;

    @Field()
    @Column({ default: true, name: "is_active" })
    isActive: boolean;
}
