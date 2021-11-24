import mysql from 'mysql';

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'world'
});


function getPopulation(Country, name, code, cb) {
  // assuming that connection to the database is established and stored as conn
  conn.query(
    `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
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