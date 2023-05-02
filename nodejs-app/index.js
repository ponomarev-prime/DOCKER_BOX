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

// Определяем маршрут "/"
app.get('/', (req, res) => {
  // Выполняем запрос к базе данных
  connection.query('SELECT * FROM my_table', (err, rows) => {
    if (err) throw err;

    // Отображаем данные на веб-странице
    const html = `
      <h1>Список элементов из базы данных:</h1>
      <ul>
        ${rows.map(row => `<li>${row.name}</li>`).join('')}
      </ul>
    `;
    res.send(html);
  });
});

// Запускаем сервер на порту 8010
app.listen(8010, () => {
  console.log('Сервер запущен на порту 8010');
});