import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'hyfdb'
});

connection.connect();

connection.query(`INSERT INTO account (
  account_number,
  balance
  ) VALUES
    (101, 10000),
    (102, 20000)
  `,
 (err) => {
  if (err) throw err;
    console.log('Data inserted into "account" table !');
});

connection.query(`INSERT INTO account_changes (
  change_number,
  account_number,
  amount,
  change_date,
  remark
  ) VALUES
    (01, 101, 10000, '2019-01-01', 'Opening balance'),
    (02, 102, 20000, '2019-01-02', 'Opening balance')
  `,
 (err) => {
  if (err) throw err;
    console.log('Data inserted into "account_changes" table !');
});