import os
from flask import Flask, render_template
import psycopg2

table_name = "python_table"

app = Flask(__name__)

def get_db_connection():
    return psycopg2.connect(
        host="postgres",
        database="postgres",
        user="postgres",
        password="postgres",
        port=5432
    )

@app.route('/')
def index():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(f"SELECT * FROM {table_name}")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return render_template('index.html', rows=rows, table_name=table_name)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8050)