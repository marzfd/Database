import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'mysql_week2'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to "mysql_week2" !');
});

// 1. Create a Table called "research_papers"
connection.query(`CREATE TABLE research_papers (
  paper_id INT,
  paper_title VARCHAR(255),
  conference VARCHAR(255),
  published_date DATE,
  author_no INT,
  PRIMARY KEY (paper_id),
  FOREIGN KEY (author_no) REFERENCES authors(author_no)
  )`, err => {
    if (err) throw err;
    console.log('Table "research_papers" created !');
});


// 2. Create a Table called "authors_papers"
connection.query(`CREATE TABLE authors_papers (
  author_no INT,
  paper_id INT,
  FOREIGN KEY (author_no) REFERENCES authors(author_no),
  FOREIGN KEY (paper_id) REFERENCES research_papers(paper_id)
  )`, err => {
    if (err) throw err;
    console.log('Table "authors_papers" created !');
});


// 3. Create 15 authors and 30 research papers

// Authors data
const authors = [
  ['1001', 'Author_1', 'Uni_1', '2019-01-01', '1', 'M', 'Mentor_1'],
  ['1002', 'Author_2', 'Uni_2', '2019-01-02', '2', 'F', 'Mentor_2'],
  ['1003', 'Author_3', 'Uni_3', '2019-01-03', '3', 'M', 'Mentor_3'],
  ['1004', 'Author_4', 'Uni_4', '2019-01-04', '4', 'F', 'Mentor_4'],
  ['1005', 'Author_5', 'Uni_3', '2019-01-05', '5', 'M', 'Mentor_5'],
  ['1006', 'Author_6', 'Uni_2', '2019-01-06', '6', 'F', 'Mentor_6'],
  ['1007', 'Author_7', 'Uni_4', '2019-01-07', '7', 'M', 'Mentor_7'],
  ['1008', 'Author_8', 'Uni_1', '2019-01-08', '8', 'F', 'Mentor_8'],
  ['1009', 'Author_9', 'Uni_3', '2019-01-09', '9', 'M', 'Mentor_9'],
  ['1010', 'Author_10', 'Uni_5', '2019-01-10', '10', 'F', 'Mentor_10'],
  ['1011', 'Author_11', 'Uni_5', '2019-01-11', '11', 'M', 'Mentor_11'],
  ['1012', 'Author_12', 'Uni_1', '2019-01-12', '12', 'F', 'Mentor_12'],
  ['1013', 'Author_13', 'Uni_3', '2019-01-13', '13', 'M', 'Mentor_13'],
  ['1014', 'Author_14', 'Uni_3', '2019-01-14', '14', 'F', 'Mentor_14'],
  ['1015', 'Author_15', 'Uni_5', '2019-01-15', '15', 'M', 'Mentor_15'],
];

// Research papers data
const research_Papers = [
  ['1101', 'Paper_1', 'Conference_1', '2019-01-01', '1001'],
  ['1102', 'Paper_3', 'Conference_2', '2019-02-02', '1001'],
  ['1103', 'Paper_3', 'Conference_3', '2019-03-03', '1002'],
  ['1104', 'Paper_4', 'Conference_4', '2019-04-04', '1002'],
  ['1105', 'Paper_5', 'Conference_5', '2019-05-05', '1002'],
  ['1106', 'Paper_6', 'Conference_6', '2019-06-06', '1004'],
  ['1107', 'Paper_7', 'Conference_7', '2019-07-07', '1004'],
  ['1108', 'Paper_8', 'Conference_8', '2019-08-08', '1005'],
  ['1109', 'Paper_9', 'Conference_9', '2019-09-09', '1005'],
  ['1110', 'Paper_1', 'Conference_1', '2019-10-10', '1005'],
  ['1111', 'Paper_1', 'Conference_1', '2019-11-11', '1006'],
  ['1112', 'Paper_12', 'Conference_12', '2019-12-12', '1006'],
  ['1113', 'Paper_13', 'Conference_13', '2019-01-01', '1007'],
  ['1114', 'Paper_14', 'Conference_14', '2019-02-02', '1007'],
  ['1115', 'Paper_15', 'Conference_15', '2019-03-03', '1007'],
  ['1116', 'Paper_2', 'Conference_2', '2019-04-04', '1009'],
  ['1117', 'Paper_1', 'Conference_1', '2019-05-05', '1009'],
  ['1118', 'Paper_6', 'Conference_6', '2019-06-06', '1010'],
  ['1119', 'Paper_2', 'Conference_2', '2019-07-07', '1010'],
  ['1120', 'Paper_5', 'Conference_5', '2019-08-08', '1010'],
  ['1121', 'Paper_2', 'Conference_2', '2019-09-09', '1011'],
  ['1122', 'Paper_4', 'Conference_4', '2019-10-10', '1011'],
  ['1123', 'Paper_5', 'Conference_5', '2019-11-11', '1012'],
  ['1124', 'Paper_2', 'Conference_2', '2019-12-12', '1012'],
  ['1125', 'Paper_1', 'Conference_1', '2019-01-01', '1012'],
  ['1126', 'Paper_6', 'Conference_6', '2019-02-02', '1014'],
  ['1127', 'Paper_2', 'Conference_2', '2019-03-03', '1014'],
  ['1128', 'Paper_2', 'Conference_2', '2019-04-04', '1014'],
  ['1129', 'Paper_2', 'Conference_2', '2019-05-05', '1015'],
  ['1130', 'Paper_3', 'Conference_3', '2019-06-06', '1015'],
];


// Insert data
connection.query(`INSERT INTO authors (
  author_no,
  author_name,
  university,
  date_of_birth,
  h_index,
  gender,
  mentor
  ) VALUES ?`,
  [authors], err => {
    if (err) throw err;
    console.log('Data inserted into "authors" !');
});

connection.query(`INSERT INTO research_papers (
  paper_id,
  paper_title,
  conference,
  published_date,
  author_no
  ) VALUES ?`,
  [research_Papers], err => {
    if (err) throw err;
    console.log('Data inserted into "research_papers" !');
});

// Insert data into "authors_papers" table
connection.query(`INSERT INTO authors_papers (author_no, paper_id)
  SELECT authors.author_no, research_papers.paper_id
  From research_papers
  LEFT JOIN authors
    ON research_papers.author_no = authors.author_no
  LEFT JOIN authors_papers
    ON authors.author_no = authors_papers.author_no
  `, err => {
    if (err) throw err;
    console.log('Data inserted into "authors_papers" !');
});