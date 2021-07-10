create database seven;

-- Populate roles
insert into roles("role")
values ('user'),('admin');

-- Give newly created user the admin role
insert into users_roles_roles ("usersId", "rolesId")
values (1,2);
