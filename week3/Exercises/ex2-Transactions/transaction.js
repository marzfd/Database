import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'hyfdb'
});

connection.connect();

connection.query(`SET autocommit = 0;`);

connection.query(`START TRANSACTION;`);

connection.query(`
  UPDATE account
  SET balance = balance - 1000
  WHERE account_number = 101;
`, (err) => {
  if (err) {
    connection.query(`ROLLBACK;`);
    throw err;
  }
  connection.query(`COMMIT;`);
  console.log('COMMITTED: Transfer was successful !');
});

connection.query(`
  UPDATE account
  SET balance = balance + 1000
  WHERE account_number = 102;
`, (err) => {
  if (err) {
    connection.query(`ROLLBACK;`);
    throw err;
  }
  connection.query(`COMMIT;`);
  console.log('COMMITTED: Transfer was successful !');
});

connection.query(`INSERT INTO account_changes (
  change_number,
  account_number,
  amount,
  change_date,
  remark
) VALUES
    (03, 101, -1000, '2019-02-01', 'Transfer'),
    (04, 102, +1000, '2019-02-01', 'Transfer')
  `,
  (err) => {
  if (err) throw err;
  console.log('Table "account_changes" Updated !');
});