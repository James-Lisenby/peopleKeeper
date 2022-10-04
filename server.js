const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Beavertrapper69.',
    database: 'castleKeeper_db'
  },
  console.log(`Connected to the castleKeeper_db database.`)
);


// View all departments
// SELECT * FROM department

function viewDepartments() {

}

// View all roles
// SELECT * FROM roles

function viewRoles() {

}

// View all employees
// SELECT * FROM employees

function viewEmployees() {
    
}