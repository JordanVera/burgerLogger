CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
    id int(10) not null auto_increment,
    burger_name varchar(100) not null,
    devoured bool,
    primary key (id)
)