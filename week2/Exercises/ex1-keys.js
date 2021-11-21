import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
});

// Connect to the database
connection.connect(err => {
    if (err) throw err;
    console.log('Connected !');
});

// Drop Database
connection.query('DROP DATABASE IF EXISTS mysql_week2', (err, results) => {
  if (err) throw err;
  console.log('Database dropped !');
});

// Create database
connection.query('CREATE DATABASE mysql_week2', err => {
  if (err) throw err;
  console.log('Database "mysql_week2" created !');
});

// Use database
connection.query('USE mysql_week2', err => {
  if (err) throw err;
  console.log('Using "mysql_week2" !');
});

// Create table
connection.query(`CREATE TABLE authors (
  author_no INT,
  author_name VARCHAR(255),
  university VARCHAR(255),
  date_of_birth DATE,
  h_index INT,
  gender ENUM('M', 'F'),
  CONSTRAINT PK_authors PRIMARY KEY (author_no)
  )`,
  err => {
    if (err) throw err;
    console.log('Table "authors" created !');
});

// Add Column
connection.query(`
AlTER TABLE authors
ADD COLUMN mentor VARCHAR(255) REFERENCES authors(author_no)`,
err => {
  if (err) throw err;
  console.log('Column "mentor" added !')
});