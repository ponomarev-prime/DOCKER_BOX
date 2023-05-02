![](gitcontent/app_title_text.png)
# DOCKER BOX

```
nginx, apache, php, .net, python, nodejs, adminer, certbot, mysql, mariadb, postgres, certbot
```

Available now:
- Nginx
- Apache
- PHP
- Adminer
- Postgres
- Python
- nodejs 
- mariadb 

## NGINX

Nginx

http://localhost/

http://localhost/apache

http://localhost/adminer

http://localhost/python

## APACHE

Apache

## PHP 

PHP

## ADMINER

Adminer 

## POSTGRES 

PosgresSQL
```
CREATE TABLE mytable (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  number VARCHAR(6) NOT NULL,
  description VARCHAR(10) NOT NULL,
  key VARCHAR(25) NOT NULL
);
```

## PYTHON 

![](gitcontent/docker_box_python-app.png)

`app_html.py` - рендерит страницу, выводит записи из БД

`app_delete_frome_tb.py` - удаляет все записи в БД (id остаётся!)

`app_wright_table.py` - записывает в таблицу БД, сам создаёт данные для каждого имени из `names`

## NODE JS 

![](gitcontent/docker_box_node-app.png)

`index.js` - рендерит страницу, выводит записи из БД