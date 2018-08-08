CREATE DATABASE burgers_db IF NOT EXISTS;
USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT;
    ,burger_name VARCHAR(100) not null
    ,devoured BOOLEAN DEFAULT 0
    ,primary key (id)
);