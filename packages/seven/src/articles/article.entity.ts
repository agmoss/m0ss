import { Field, ObjectType } from "@nestjs/graphql";
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

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

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
