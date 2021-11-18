import mysql from 'mysql';


// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'hyfuser',
    password: 'hyfpassword',
});

// Connect to the database
connection.connect(err => {
  if (err) throw err;
  console.log("Connected !");
});

// Drop Database
connection.query('DROP DATABASE IF EXISTS meetup', (err, results) => {
    if (err) throw err;
    console.log('Database dropped !');
});


// Create Database
connection.query("CREATE DATABASE meetup", (err, result) => {
  if (err) throw err;
  console.log("Database created !");
});

// Use the database
connection.query('USE meetup', (err, results) => {
    if (err) throw err;
    console.log('Database selected !');
});

// Create tables in the database
connection.query("CREATE TABLE Invitee (invitee_no INT, invitee_name TEXT, invited_by TEXT)", (err, result) => {
  if (err) throw err;
  console.log("Table created !");
});

connection.query("CREATE TABLE Room (room_no INT, room_name TEXT, floor_number INT)", (err, result) => {
  if (err) throw err;
  console.log("Table created !");
});

connection.query("CREATE TABLE Meeting (meeting_no INT, meeting_title TEXT, starting_time TIME, ending_time TIME, room_no INT)", (err, result) => {
  if (err) throw err;
  console.log("Table created !");
});


// Insert data into the tables
const invitee = [
  [1, 'John', 'Peter'],
  [2, 'Amy', 'Hannah'],
  [3, 'Michael', 'Sandy'],
  [4, 'Betty', 'Richard'],
  [5, 'Susan', 'William'],
];

connection.query('INSERT INTO Invitee (invitee_no, invitee_name, invited_by) VALUES ?', [invitee], (err, result) => {
  if (err) throw err;
  console.log("Data inserted !");
});


const room = [
  [1, 'Room 1', 1],
  [2, 'Room 2', 1],
  [3, 'Room 3', 1],
  [4, 'Room 4', 1],
  [5, 'Room 5', 1],
];

connection.query('INSERT INTO Room (room_no, room_name, floor_number) VALUES ?', [room], (err, result) => {
  if (err) throw err;
  console.log("Data inserted !");
});

const meeting = [
  [1, 'Meeting 1', '10:00:00', '11:00:00', 1],
  [2, 'Meeting 2', '11:00:00', '12:00:00', 2],
  [3, 'Meeting 3', '12:00:00', '13:00:00', 3],
  [4, 'Meeting 4', '13:00:00', '14:00:00', 4],
  [5, 'Meeting 5', '14:00:00', '15:00:00', 5],
];

connection.query('INSERT INTO Meeting (meeting_no, meeting_title, starting_time, ending_time, room_no) VALUES ?', [meeting], (err, result) => {
  if (err) throw err;
  console.log("Data inserted !");
});