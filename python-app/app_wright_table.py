import psycopg2
import hashlib
from faker import Faker
from datetime import datetime
import random

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

# Создаем генератор случайных значений
fake = Faker()

# Массив имен
names = ['Ahab', 'John', 'Mary', 'Alex', 'Kate', 'Mike', 'Lisa']

# Для каждого имени создаем строку в таблице
for name in names:
    # Генерируем случайные значения
    created_at = datetime.now()
    number = str(random.randint(100000, 999999))
    description = fake.text()[:10]
    key = hashlib.sha1((number + description).encode()).hexdigest()[:25]
    
    # Формируем запрос на добавление данных в таблицу
    sql = f"INSERT INTO {table_name} (name, created_at, number, description, key) VALUES (%s, %s, %s, %s, %s)"
    data = (name, created_at, number, description, key)
    
    # Выполняем запрос
    cur.execute(sql, data)

# Сохраняем изменения в базе данных
conn.commit()

# Закрываем курсор и соединение
cur.close()
conn.close()