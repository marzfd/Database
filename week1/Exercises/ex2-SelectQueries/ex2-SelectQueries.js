import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'new_world'
});

connection.connect();


// Name of the countries with population over 8 million
connection.query('SELECT name FROM country WHERE population > 8000000', (err, result) => {
  if (err) throw err;
  const countries = result.map(country => country.name);
  console.log(countries);
  console.log(`Number of countries with population over 8 million: ${countries.length}`);
});

// Name of the countries that have 'land' in their name
connection.query('SELECT name FROM country WHERE name LIKE "%land%"', (err, result) => {
  if (err) throw err;
  const countries = result.map(country => country.name);
  console.log(countries);
  console.log(`Number of countries with 'land' in their name: ${countries.length}`);
});

// Name of the cities with population between 500000 and 1000000
connection.query('SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000', (err, result) => {
  if (err) throw err;
  const cities = result.map(city => city.name);
  console.log(cities);
  console.log(`Number of cities with population between 500000 and 1000000: ${cities.length}`);
});

// Name of all the countries on the continent 'Europe'
connection.query('SELECT name FROM country WHERE continent = "Europe"', (err, result) => {
  if (err) throw err;
  const countries = result.map(country => country.name);
  console.log(countries);
  console.log(`Number of countries on the continent 'Europe': ${countries.length}`);
});

// All countries in the descending order of their surface area
connection.query('SELECT name FROM country ORDER BY surfaceArea DESC', (err, result) => {
  if (err) throw err;
  const countries = result.map(country => country.name);
  console.log(countries);
});

// Name of cities in Netherlands
connection.query('SELECT name FROM city WHERE countryCode = "NLD"', (err, result) => {
  if (err) throw err;
  const cities = result.map(city => city.name);
  console.log(cities);
  console.log(`Number of cities in 'Netherlands': ${cities.length}`);
});

// Population of Rotterdam
connection.query('SELECT population FROM city WHERE name = "Rotterdam"', (err, result) => {
  if (err) throw err;
  const population = result[0].population;
  console.log(`Population of Rotterdam: ${population}`);
});

// Top 10 countries with the largest surface area
connection.query('SELECT name, surfaceArea FROM country ORDER BY surfaceArea DESC LIMIT 10', (err, result) => {
  if (err) throw err;
  const countries = result.map(country => country.name);
  console.log(countries);
});

// Top 10 most populated cities
connection.query('SELECT name, population FROM city ORDER BY population DESC LIMIT 10', (err, result) => {
  if (err) throw err;
  const cities = result.map(city => city.name);
  console.log(cities);
});

// The world's population
connection.query('SELECT SUM(population) AS totalPopulation FROM country', (err, result) => {
  if (err) throw err;
  const population = result[0].totalPopulation;
  console.log(`The world's population: ${population}`);
});