import psycopg2

table_name = "python_table"

# Создаем подключение к базе данных
conn = psycopg2.connect(
    host="postgres",
    database="postgres",
    user="postgres",
    password="postgres",
    port=5432
)

# Создаем курсор для выполнения SQL-запросов
cur = conn.cursor()

# Формируем запрос на удаление всех записей из таблицы
sql = f"DELETE FROM {table_name}"

# Выполняем запрос
cur.execute(sql)

# Сохраняем изменения в базе данных
conn.commit()

# Закрываем курсор и соединение
cur.close()
conn.close()