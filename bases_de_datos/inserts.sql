use cfl2020;
-- inserts en e01_cliente
insert into `E01_cliente` values(1,'Juan','Gonzalez','Gomez 1332');
insert into `E01_cliente` values(2,'Juan','Gonzalez','Gomez 1340');
insert into `E01_cliente` values(3,'Jorge','Perez','Seritti 140');
insert into `E01_cliente` values(4,'Juliana','Ramirez','San Martin 1340');
insert into `E01_cliente` values(5,'Javier','Fernandez','Sarmiento 3310');
insert into `E01_cliente` (`nro_cliente`,`nombre`,`apellido`,`direccion`) VALUES (9,"Amicha","Tyson","205-2990 Quam C.");
insert into `E01_cliente` (`nro_cliente`,`apellido`,`nombre`,`direccion`) VALUES (7,"Fury","Tyson","Whashington 7833");
-- inserts en e01_telefono
INSERT INTO `E01_TELEFONO` (`codigo_area`,`nro_telefono`,`tipo`,`nro_cliente`) VALUES ("249","4712565","F",1);
INSERT INTO `E01_TELEFONO` (`codigo_area`,`nro_telefono`,`tipo`,`nro_cliente`) VALUES ("242","4474281","M",3);
INSERT INTO `E01_TELEFONO` (`codigo_area`,`nro_telefono`,`tipo`,`nro_cliente`) VALUES ("333","4537796","F",7);
INSERT INTO `E01_TELEFONO` (`codigo_area`,`nro_telefono`,`tipo`,`nro_cliente`) VALUES ("007","4699941","F",4);
INSERT INTO `E01_TELEFONO` (`codigo_area`,`nro_telefono`,`tipo`,`nro_cliente`) VALUES ("007","4518627","F",4);
INSERT INTO `E01_TELEFONO` (`codigo_area`,`nro_telefono`,`tipo`,`nro_cliente`) VALUES ("666","4972222","M",9);
INSERT INTO `E01_TELEFONO` (`codigo_area`,`nro_telefono`,`tipo`,`nro_cliente`) VALUES ("818","4547153","F",5);
INSERT INTO `E01_TELEFONO` (`codigo_area`,`nro_telefono`,`tipo`,`nro_cliente`) VALUES ("443","4518627","F",2);
INSERT INTO `E01_TELEFONO` (`codigo_area`,`nro_telefono`,`tipo`,`nro_cliente`) VALUES ("911","4972222","M",7);
INSERT INTO `E01_TELEFONO` (`codigo_area`,`nro_telefono`,`tipo`,`nro_cliente`) VALUES ("518","4547153","F",5);
-- inserts en e01_producto
INSERT INTO `E01_PRODUCTO` (`codigo_producto`,`marca`,`nombre`,`descripcion`,`precio`,`stock`) VALUES (1,"Quetimporta","chocolate","risus. In mi","133.2",204);
INSERT INTO `E01_PRODUCTO` (`codigo_producto`,`marca`,`nombre`,`descripcion`,`precio`,`stock`) VALUES (2,"Natura","Mayonesa","Nunc mauris elit,","92.65",85);
INSERT INTO `E01_PRODUCTO` (`codigo_producto`,`marca`,`nombre`,`descripcion`,`precio`,`stock`) VALUES (3,"Miramax","Cine Book","nec, euismod in,","554.1",123);
INSERT INTO `E01_PRODUCTO` (`codigo_producto`,`marca`,`nombre`,`descripcion`,`precio`,`stock`) VALUES (4,"Dreamwork","Cine Book","lorem, luctus ut,","733.15",39);
INSERT INTO `E01_PRODUCTO` (`codigo_producto`,`marca`,`nombre`,`descripcion`,`precio`,`stock`) VALUES (5,"Lion Gates","Cine Book","molestie arcu. Sed","533.05",69);
INSERT INTO `E01_PRODUCTO` (`codigo_producto`,`marca`,`nombre`,`descripcion`,`precio`,`stock`) VALUES (6,"Natura","Crema Facial","vestibulum massa rutrum","335.23",236);
INSERT INTO `E01_PRODUCTO` (`codigo_producto`,`marca`,`nombre`,`descripcion`,`precio`,`stock`) VALUES (7,"Odio atodos","Mermelada","Praesent interdum ligula","184.47",5);
-- inserts en e01_factura
INSERT INTO `E01_FACTURA` (`nro_factura`,`fecha`,`total_sin_iva`,`iva`,`total_con_iva`,`nro_cliente`) VALUES (1,"2017-01-27 13:09:17",1,21,1,1);
INSERT INTO `E01_FACTURA` (`nro_factura`,`fecha`,`total_sin_iva`,`iva`,`total_con_iva`,`nro_cliente`) VALUES (2,"2017-01-27 13:09:17",1,21,1,4);
INSERT INTO `E01_FACTURA` (`nro_factura`,`fecha`,`total_sin_iva`,`iva`,`total_con_iva`,`nro_cliente`) VALUES (3,"2016-06-05 09:50:17",1,21,1,3);
INSERT INTO `E01_FACTURA` (`nro_factura`,`fecha`,`total_sin_iva`,`iva`,`total_con_iva`,`nro_cliente`) VALUES (4,"2017-02-09 05:36:14",1,21,1,9);
INSERT INTO `E01_FACTURA` (`nro_factura`,`fecha`,`total_sin_iva`,`iva`,`total_con_iva`,`nro_cliente`) VALUES (5,"2016-12-29 11:17:12",1,21,1,9);
INSERT INTO `E01_FACTURA` (`nro_factura`,`fecha`,`total_sin_iva`,`iva`,`total_con_iva`,`nro_cliente`) VALUES (6,"2017-03-28 11:38:45",1,21,1,7);
INSERT INTO `E01_FACTURA` (`nro_factura`,`fecha`,`total_sin_iva`,`iva`,`total_con_iva`,`nro_cliente`) VALUES (7,"2016-12-08 02:21:36",1,21,1,5);
INSERT INTO `E01_FACTURA` (`nro_factura`,`fecha`,`total_sin_iva`,`iva`,`total_con_iva`,`nro_cliente`) VALUES (8,"2016-07-20 17:30:44",1,21,1,3);
INSERT INTO `E01_FACTURA` (`nro_factura`,`fecha`,`total_sin_iva`,`iva`,`total_con_iva`,`nro_cliente`) VALUES (9,"2016-03-27 22:24:22",1,21,1,2);
INSERT INTO `E01_FACTURA` (`nro_factura`,`fecha`,`total_sin_iva`,`iva`,`total_con_iva`,`nro_cliente`) VALUES (10,"2016-12-14 10:42:35",1,21,1,2);
-- inserts en e01_detalle_factura
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (9,7,2,89);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (2,1,1,69);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (1,5,2,71);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (7,3,3,22);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (10,6,4,12);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (4,2,7,18);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (6,4,8,37);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (2,7,9,89);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (5,1,10,17);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (7,2,11,58);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (1,6,12,54);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (8,2,13,56);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (7,3,5,22);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (10,6,12,12);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (8,2,14,18);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (6,4,15,37);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (2,7,20,89);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (5,1,16,17);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (7,3,17,58);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (8,6,18,54);
INSERT INTO `E01_DETALLE_FACTURA` (`nro_factura`,`codigo_producto`,`nro_item`,`cantidad`) VALUES (3,5,19,56);

-- updates
update `E01_cliente` set nombre='Jose' where nro_cliente=1;
update `E01_cliente` set direccion='Lamberto 1088' where nro_cliente=2;

update `E01_telefono` set codigo_area='022' where nro_cliente=5;
update `E01_telefono` set codigo_area='360', nro_telefono='5462991'  where nro_cliente=1;

update `E01_producto` set marca='Naaaquever' where nro_cliente=7;
update `E01_producto` set precio=499.99, stock=150  where codigo_producto=4;

update `E01_factura` set fecha="2018-09-09 15:59:56" where nro_factura=3;
update `E01_factura` set cantidad=20 where nro_factura=10;

update `E01_detalle_factura` set cantidad=20 where nro_item=10;

-- sentencia para realizar borrados de tablas sin usar restricciones
delete from e01_factura where nro_factura > 0;
