use CFL2020_data;
-- ejemplos de equivalencias de sqls con join
select c.nombre, c.apellido, t.nro_telefono, c.nro_cliente 
from e01_cliente c
inner join e01_telefono t on t.nro_cliente = c.nro_cliente
where c.nombre = 'Xerxes';

-- version antigua
select c.nombre, c.apellido, t.nro_telefono, c.nro_cliente 
from e01_cliente c, e01_telefono t
-- (quita esta linea) inner join e01_telefono t on t.nro_cliente = c.nro_cliente
where c.nombre = 'Xerxes';

-- --------------------------------------------------
-- consultas join (Ejercicios)
-- 1. mostrar cada telefono con los datos del cliente
select t.*, c.* from e01_telefono t
inner join e01_cliente c
on (c.nro_cliente = t.nro_cliente);
-- 2.Mostrar todos los teléfonos del cliente número 30 junto con todos sus datos personales.
select t.*, c.* from e01_telefono t
inner join e01_cliente c
on (c.nro_cliente = t.nro_cliente)
where c.nro_cliente = 30;
-- 3.Mostrar nombre y apellido de cada cliente junto con lo que gastó en total (con iva incluido).
select c.nombre, c.apellido, f.total_con_iva
from e01_cliente c
inner join e01_factura f on c.nro_cliente = f.nro_cliente
where f.total_con_iva > 0;
-- 4.Listar todas las facturas que hayan sido compradas por el cliente de nombre "Pandora" y apellido "Tate".
select c.nombre, c.apellido, f.* from e01_factura f
inner join e01_cliente c on f.nro_cliente = c.nro_cliente
where nombre = 'Pandora' and apellido like 'Tate';
-- 5.Listar todas las Facturas que contengan productos de la marca "In Faucibus Inc."
select  f.*, p.marca from e01_factura f
inner join e01_detalle_factura df on f.nro_factura = df.nro_factura
inner join e01_producto p on df.codigo_producto = p.codigo_producto
where marca = 'In Faucibus Inc.';
-- 6.listar todos los clientes que tengan código de área 296
select t.* from e01_telefono t
left join e01_cliente c on c.nro_cliente = t.nro_cliente
where t.codigo_area = 296;
-- 7.mostrarme todos los clientes que compraron el producto cuyo nombre = 'scales'
select c.*, p.nombre from e01_cliente c
inner join e01_factura f on c.nro_cliente = f.nro_cliente
inner join e01_detalle_factura df on f.nro_factura = df.nro_factura
inner join e01_producto p on df.codigo_producto = p.codigo_producto
where p.nombre like 'scales';
-- 8.mostrar los códigos de área de los clientes del punto anterior
select t.codigo_area, c.*, p.nombre from e01_telefono t
inner join e01_cliente c on c.nro_cliente = t.nro_cliente
inner join e01_factura f on c.nro_cliente = f.nro_cliente
inner join e01_detalle_factura df on f.nro_factura = df.nro_factura
inner join e01_producto p on df.codigo_producto = p.codigo_producto
where p.nombre like 'scales';
-- 9. mostrar los clientes sin telefonos
select c.*,t.nro_telefono from e01_cliente c
left join e01_telefono t on c.nro_cliente = t.nro_cliente
where t.nro_telefono is null;
-- 10. mostrar todas los codigos de telefono que no tienen facturas
select c.*, t.codigo_area,f.nro_factura from e01_telefono t
inner join e01_cliente c on c.nro_cliente = t.nro_cliente
left join e01_factura f on c.nro_cliente = f.nro_cliente
where nro_factura is null;
-- 11. mostrar todas las facturas que no tienen productos asociados
select f.*,df.codigo_producto from e01_factura f
left join e01_detalle_facturA df on f.nro_factura = df.nro_factura
where df.codigo_producto is null;
-- 12. mostrar los clientes que tienen facturas sin productos
select c.*, f.nro_factura, df.codigo_producto from e01_cliente c
inner join e01_factura f on c.nro_cliente = f.nro_factura
left join e01_detalle_factura df on f.nro_factura = df.nro_factura
where df.codigo_producto is null;