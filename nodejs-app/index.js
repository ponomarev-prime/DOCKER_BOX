const express = require('express');
const mysql = require('mysql');

// Создаем подключение к базе данных
const connection = mysql.createConnection({
  host: 'mariadb', // имя сервиса в docker-compose.yml
  user: 'my_user',
  password: 'my_password',
  database: 'my_database'
});

// Создаем приложение Express
const app = express();

// Задаем имя таблицы
const tableName = 'my_table';

// Определяем маршрут "/"
app.get('/', (req, res) => {
  // Выполняем запрос к базе данных
  connection.query('SELECT * FROM my_table', (err, rows) => {
    if (err) throw err;
  
    // Отображаем данные на веб-странице
    const html = `
      <title>Node JS Table</title>
      <h1>Node JS | Table :: ${tableName}</h1>
      <link rel="stylesheet" href="node/style.css">
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Created At</th>
          <th>Number</th>
          <th>Description</th>
          <th>Key</th>
        </tr>
        ${rows.map(row => `
          <tr>
            <td>${row.id}</td>
            <td>${row.name}</td>
            <td>${new Date(row.created_at).toISOString()}</td>
            <td>${row.number}</td>
            <td>${row.description}</td>
            <td>${row.key}</td>
          </tr>
        `).join('')}
      </table>
    `;
    res.send(html);
  });
});

// Запускаем сервер на порту 8010
app.listen(8010, () => {
  console.log('Сервер запущен на порту 8010');
});