import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'mysql_week2'
});

connection.connect();


// Names of all authors and their mentors
connection.query(`
SELECT author_name, mentor
FROM authors`,
(err, rows) => {
  if (err) throw err;
  console.table(rows);
});


// Names of all authors and their published papers (+null if no paper)
connection.query(`
  SELECT * FROM authors
  LEFT JOIN research_papers
  ON authors.author_no = research_papers.author_no
  `, (err, rows) => {
    if (err) throw err;
    console.table(rows);
});