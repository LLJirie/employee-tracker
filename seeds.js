var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: ""
  database: 'employee_db'
});
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();

var inquirer = require("inquirer");
inquirer.prompt([/* Pass your questions in here */], function (answers) {
    // Use user feedback for... whatever!!
});

FOR console.TABLEnpm install console.table--save
bower install console.table--save

// call once somewhere in the beginning of the app
const cTable = require('console.table');
console.table([
    {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        title: "Sales Lead",
        department: "Sales",
        salary: 100000,
        manager: "Ashley Rodriguez"
    },
    {
        id: 2,
        first_name: "Mike",
        last_name: "Chan",
        title: "Salesperson"
        department: "Sales",
        salary 80000,
        manager: "John Doe",
    }
  {
        id: 3,
        first_name: "Ashley",
        last_name: "Rodriguez"
        title: "Lead Engineer",
        department: "Engineering",
        salary: 150000,
        manager: null
    }
    {
        id: 4,
        first_name: "Kevin",
        last_name: "Tupik",
        title: "Software Engineer"
        department: "Engineering",
        salary: 120000,
        manager: "Ashley Rodriguez"

    }
    {
        id: 6
        first_name: "Malia",
        last_name: "Brown",
        title: "Accountant",
        department: "Finance"
        salary: 125000,
        manager: null
    }
    {
        id: 7,
        first_name: "Sarah",
        last_name: "Lourd",
        title: "Legal Team",
        department: "Legal",
        salary: 250000,
        manager: null
}
{
       id: 8,
       first_name: "Tom",
       last_name:  "Allen",
       title: "Lawyer",
       department: "Engineering",
       salary: 190000,
       manager: "Sarah Lourd"
       
}
{
    id: 9
    first_name: "Christian",
    last_name: "Eckenrode"
    title: "Lead Engineer",
    salary: 150000,
    manager: "Mike Chan"
}
]);


