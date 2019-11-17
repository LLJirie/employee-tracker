DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(30),
);

CREATE TABLE role (
    id INTEGER NOT NULL AUTO_INCREMENT, 
    title VARCHAR(30),
    salary DECIMAL(),
    department_id INTEGER(),
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INTEGER NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER(),
    manager_id INTEGER(),
    PRIMARY KEY (id)
)

INSERT INTO departments (roles, employees)
VALUES ("", first name, last name);


UPDATE role
SET role = title = "Franklin", pet_age = 2
WHERE id = i;

SELECT * FROM departments;
SELECT * FROM employees;
SELECT * FROM roles;