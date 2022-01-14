-- create database mydb;

-- use mydb;

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'manager';
-- flush privileges;

create table User(
    empid integer primary key auto_increment,
    name varchar(200),
    salary double,
    age int
);


