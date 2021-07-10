import { Field, ObjectType } from "@nestjs/graphql";
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

import { Roles } from "../roles/roles.entity";

@Entity({
    name: "users",
})
@ObjectType()
export class User {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ name: "email" })
    email: string;

    @Field()
    @Column()
    password: string;

    @Field({ name: "is_active" })
    @Column({ default: true, name: "is_active" })
    isActive: boolean;

    @ManyToMany((type) => Roles, (role) => role.role, {
        nullable: false,
        eager: true,
    })
    @JoinTable()
    roles: Roles[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
