const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
  host: 'mariadb',
  user: 'user',
  password: 'password',
  database: 'my_db'
});

connection.connect((err) => {
  if (err) throw err;

  console.log('Connected to MariaDB database!');

  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

  for (const name of names) {
    const date = new Date();
    const number = Math.floor(Math.random() * 1000000).toString();
    const description = faker.lorem.sentence(10);
    const key = hash(number + description).substr(0, 25);

    const sql = `INSERT INTO items (name, date_created, number, description, \`key\`) VALUES ('${name}', '${date.toISOString()}', '${number}', '${description}', '${key}')`;

    connection.query(sql, (err, result) => {
      if (err) throw err;

      console.log(`Inserted item for ${name}`);
    });
  }

  connection.end();
});

function hash(text) {
  let hash = 0;

  if (text.length == 0) {
    return hash;
  }

  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }

  return hash.toString();
}