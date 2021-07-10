import { Field, ObjectType } from "@nestjs/graphql";
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({
    name: "profiles",
})
@ObjectType()
export class Profile {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ name: "first_name" })
    firstName: string;

    @Field()
    @Column({ name: "last_name" })
    lastName: string;

    @Field()
    @Column({ name: "profile_photo" })
    profilePhoto: string;

    @Field()
    @Column()
    rant: string;

    @Field()
    @Column()
    bio: string;

    @Field()
    @Column({ default: true, name: "is_active" })
    isActive: boolean;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
