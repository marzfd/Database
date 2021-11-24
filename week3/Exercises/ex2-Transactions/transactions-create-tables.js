import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'hyfdb'
});

connection.connect();

connection.query(`
  CREATE TABLE account (
    account_number INT PRIMARY KEY,
    balance INT
  )`, (err) => {
  if (err) throw err;
  console.log('Table "account" created !');
});

connection.query(`
  CREATE TABLE account_changes (
    change_number INT,
    account_number INT,
    amount INT,
    change_date DATE,
    remark VARCHAR(255),
    PRIMARY KEY (change_number),
    FOREIGN KEY (account_number) REFERENCES account(account_number)
  )`, (err) => {
  if (err) throw err;
  console.log('Table "account_changes" created !');
});