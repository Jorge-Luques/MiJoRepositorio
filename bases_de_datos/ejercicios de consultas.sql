-- 1.Obtener todos los datos de todos los clientes
select * from e01_cliente;
-- 2.Obtener solo los nombres y apellidos de todos los clientes
select nombre, apellido from e01_cliente;
-- 3.Obtener los nombres de los diferentes productos
select nombre from e01_producto;
-- 4.Obtener los diferentes códigos de área de los teléfonos
select distinct codigo_area from e01_telefono;
-- 5.Obtener el listado de todos los productos que tengan un stock mayor a 50 y menor a 200
select * from e01_producto where stock not between 50 and 200;
-- 6.Obtener los datos correspondientes al producto cuyo codigo es 50
select * from e01_producto where codigo_producto = 50;
-- 7.Obtener los datos de las facturas cuyo total (con iva incluido) sea mayor a 400.000$ y lo haya realizado el cliente número 8
select * from e01_factura where total_con_iva > 400 and nro_cliente = 8;
-- 8.Obtener los datos del cliente cuyo nombre es “Ivor” y el apellido “Saunders”
select * from e01_cliente where nombre = 'Ivor' and apellido='Saunders';
-- 9.Todas las Facturas pertenecientes al cliente número 10
select * from e01_factura where nro_cliente = 8;
-- 10.Todas las Facturas que superen los 500.000$
select * from e01_factura where total_con_iva > 50000.0;
-- buscar todos los nro_cliente que tengan facturas entre el 2017-01-01 y 2017-01-31 que no tengan repetidos
select distinct nro_cliente from e01_factura where fecha between '2017-01-01' and '2017-01-31';
-- mostrar todos los nro_factura del producto cuyo nombre es 'return policy'
select codigo_producto from e01_producto where nombre = 'return policy';
select distinct codigo_producto from e01_factura where codigo_producto in (1,85);
-- buscar todas las factura del cliente Calvin Hyde
select * from e01_cliente where nombre = 'Calvin' and apellido = 'Hyde';
select nro_factura from e01_factura  where nro_cliente = 6;
-- mostrar todos los productos cuyo stock sea menor que 50 y mayor a 900 o que tengan la 2da, 3ra y 4ta letra del nombre 'ree'
select * from e01_producto where stock not between 50 and 900 or nombre like '_ree%';
-- mostrar todas las facturas con fechas  posterior al 19-03-2017 y tambien aquellas cuyo total_con_iva sea menor a 10000
select * from e01_factura where fecha > '2017-03-19' or (total_con_iva < 10000 and total_con_iva > 0);

-- usando subqueries

-- Listar todas las Facturas que hayan sido compradas por el cliente de nombre "Pandora" y apellido "Tate".
select * from e01_factura
where nro_cliente in (
		select nro_cliente from e01_cliente
		where e01_factura.nro_cliente = e01_cliente.nro_cliente and nombre = 'pandora' and apellido = 'tate');
-- Listar todas las Facturas que contengan productos de la marca "In Faucibus Inc."
select * from e01_factura
where nro_factura in(
	select nro_factura from e01_detalle_factura 
	where codigo_producto in (
		select codigo_producto from e01_producto 
		where e01_factura.nro_factura = e01_detalle_factura.nro_factura and marca = "In Faucibus Inc."));
-- listar todos los clientes que tengan codigo de área 296
select * from e01_cliente 
where exists (
	select * from e01_telefono 
	where e01_cliente.nro_cliente = e01_telefono.nro_cliente and codigo_area = 296);
-- mostrarme todos los clientes que compraron el producto cuyo nombre = 'scales'
select * from e01_cliente
where exists(
	select nro_cliente, nro_factura from e01_factura
	where exists(
		select nro_factura from e01_detalle_factura 
		where exists(
			select codigo_producto from e01_producto
			where e01_producto.codigo_producto = e01_detalle_factura.codigo_producto and e01_detalle_factura.nro_factura = e01_factura.nro_factura 
			and nombre = 'scales'
		) and e01_cliente.nro_cliente  = e01_factura.nro_cliente
	)
);

-- igual al anterior pero con in
select * from e01_cliente
where nro_cliente in(
	select nro_cliente from e01_factura 
	where nro_factura in (
		select nro_factura from e01_detalle_factura 
		where codigo_producto in (
			select codigo_producto from e01_producto
			where nombre = 'scales'
		)
	)
);