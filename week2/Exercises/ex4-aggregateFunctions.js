import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'mysql_week2'
});

connection.connect();

// 1. All research papers and the number of authors
connection.query(`
  SELECT research_papers.paper_title, COUNT(DISTINCT authors.author_no) AS authors
  FROM research_papers
  JOIN authors_papers
    ON authors_papers.paper_id = research_papers.paper_id
  JOIN authors
    ON authors.author_no = authors_papers.author_no
  GROUP BY research_papers.paper_title
  `, (err, rows) => {
    if (err) throw err;
    console.table(rows);
});


// 2. Sum of the research papers published by female authors
connection.query(`
  SELECT COUNT(gender) AS Female_Numbers
  FROM authors
  WHERE gender = 'F'
  `, (err, result) => {
    if (err) throw err;
    console.log(result);
});


// 3. Average of the h-index of all authors per university
connection.query(`
  SELECT university, AVG(h_index)
  FROM authors
  GROUP BY university
  `, (err, rows) => {
    if (err) throw err;
    console.table(rows);
});



// 4. Sum of the research papers of the authors per university
connection.query(`
  SELECT university, COUNT(DISTINCT research_papers.paper_id) AS Papers
  FROM research_papers
  JOIN authors_papers
    ON authors_papers.paper_id = research_papers.paper_id
  JOIN authors
    ON authors.author_no = authors_papers.author_no
  GROUP BY university
  `, (err, rows) => {
    if (err) throw err;
    console.table(rows);
});


// 5. Minimum and maximum of the h-index of all authors per university
connection.query(`
  SELECT university, MIN(h_index), MAX(h_index)
  FROM authors
  GROUP BY university
  `, (err, rows) => {
    if (err) throw err;
    console.table(rows);
});