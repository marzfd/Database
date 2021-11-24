import mysql from 'mysql';

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'world'
});

// ! To prevent SQL Injection:
// 1. Using escape function
// name = conn.escape(name);
// code = conn.escape(code);
// 2. Using "?"" mark in the query
// = ?

function getPopulation(Country, name, code, cb) {
  conn.query(
    `SELECT Population FROM ${Country} WHERE Name = ? and code = ?`,
    [name, code],
    function(err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result);
    }
  );
}

getPopulation("country", "marzi", "marzi.03' OR '1=1", (err, result) => {
  if (err) throw err;
  console.log(result);
});

// The Correct request
// getPopulation("country", "Iran", "IRN", (err, result) => {
//   if (err) throw err;
//   console.log(result);
// });