select distinct nombre from e01_producto;
select * from  e01_producto where nombre = 'fruit';
select * from  e01_producto where precio between 200 and 500;
select * from  e01_producto where codigo_producto in (4, 7, 10, 17);
select codigo_producto, nombre, stock from e01_producto
where stock between 60 and 100;
select * from e01_producto
where precio like '2_%';
select nro_cliente, apellido, nombre from e01_cliente
where nombre  like 'Jescie';
select codigo_producto, nombre, stock from e01_producto
where stock >= 60 and stock <= 90;
select codigo_producto, nombre, stock from e01_producto
where stock between 60 and 90;
select codigo_producto, nombre, stock from e01_producto
where (nombre like 'fish') or (stock <= 26);