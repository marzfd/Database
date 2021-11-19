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

// Create database
connection.query('CREATE DATABASE mysql_week2', err => {
  if (err) throw err;
  console.log('Database created !');
});

// Use database
connection.query('USE MySQL_week2', err => {
  if (err) throw err;
  console.log('Using database !');
});

// Create table
connection.query(`CREATE TABLE authors (
  author_no INT PRIMARY KEY,
  author_name VARCHAR(255),
  university VARCHAR(255),
  date_of_birth DATE,
  h_index INT,
  gender ENUM('M', 'F')
  )`,
  err => {
    if (err) throw err;
    console.log('Table created !');
});

// Add Column
connection.query(`AlTER TABLE authors ADD COLUMN mentor VARCHAR(255) REFERENCES authors(author_no)`, err => {
  if (err) throw err;
  console.log('Column Added !')
});

// ! ?? Foreign Key ??
// connection.query(`ALTER TABLE authors ADD FOREIGN KEY (mentor)`, err => {
//   if (err) throw err;
//   console.log('Foreign Key Added !')
// });