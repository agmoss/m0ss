import { Field, InputType } from "@nestjs/graphql";
import { Length, MaxLength } from "class-validator";

@InputType()
export class UserInput {
    @Field()
    @MaxLength(100)
    email: string;

    @Field()
    @Length(30, 50)
    password: string;
}

// drop database seven;

// insert into users_roles_roles ("usersId", "rolesId")
// values (1,2);

// select * from seven.public.articles;
