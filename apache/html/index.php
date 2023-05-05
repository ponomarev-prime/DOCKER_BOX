<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="UTF-8">
    <title>PHP Maria Table</title>
</head>

<?php

// Подключение к базе данных MySQL
$host = 'mariadb';
$port = '3306';
$dbname = 'php_database';
$username = 'php_user';
$password = 'php_pass';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Выбор всех записей из таблицы
$stmt = $pdo->prepare("SELECT * FROM names");
$stmt->execute();
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);


// Вывод значений на веб-страницу
echo "<h1>APACHE-PHP | DB :: $host | $dbname</h1>";
echo "<table>";
echo "<tr><th>ID</th><th>Name</th><th>date_created</th><th>Number</th><th>Description</th><th>Key</th></tr>";
foreach ($rows as $row) {
    echo "<tr>";
    echo "<td>{$row['id']}</td>";
    echo "<td>{$row['name']}</td>";
    echo "<td>{$row['date_created']}</td>";
    echo "<td>{$row['number']}</td>";
    echo "<td>{$row['description']}</td>";
    echo "<td>{$row['key']}</td>";
    echo "</tr>";
}
echo "</table>";