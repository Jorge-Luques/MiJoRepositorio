use cfl2020;

create table if not exists `E01_cliente`(
	`nro_cliente` int not null,
	`nombre` varchar(45),
    `apellido` varchar(45),
    `direccion` varchar(45),
    primary key (`nro_cliente`)
);

-- drop table if exists `E01_telefono`;
create table if not exists `E01_telefono`(
	`codigo_area` int not null,
	`nro_telefono` int not null,
    `tipo` char(1),
    `nro_cliente` int not null,
    constraint `pk_tel` primary key (`codigo_area`,`nro_telefono`),
    CONSTRAINT `FK_E01_tel_cli`  FOREIGN KEY (`nro_cliente`) REFERENCES `E01_cliente`(`nro_cliente`) on delete cascade
);

-- drop table if exists `E01_factura`;
create table if not exists `E01_factura`(
	`nro_factura` int not null,
	`fecha` date,
    `total_sin_iva` double,
    `iva` double,
    `total_con_iva` double,
    `nro_cliente` int not null,
    primary key (`nro_factura`),
    constraint `FK_E01_fac_cli` foreign key (`nro_cliente`) references `E01_cliente`(`nro_cliente`) on delete cascade
);

-- drop table if exists `E01_producto`;
create table if not exists `E01_producto`(
	`codigo_producto` int not null,
	`nombre` varchar(45),
    `marca` varchar(45),
    `descripcion` varchar(45),
    `precio` float,
    `stock` int,
    primary key (`codigo_producto`)
);

-- drop table if exists `E01_detalle_factura`;
create table if not exists `E01_detalle_factura`(
	`nro_item` int not null,
	`cantidad` float,
    `codigo_producto` int not null,
    `nro_factura` int not null,
    primary key (`nro_item`,`nro_factura`),
    constraint `FK_E01_det_pro` foreign key (`codigo_producto`) references `E01_producto`(`codigo_producto`) on delete cascade,
    constraint `FK_E01_det_fac` foreign key (`nro_factura`) references `E01_factura`(`nro_factura`) on delete cascade
);
