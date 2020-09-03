"use strict";
exports.__esModule = true;
var item_1 = require("./item");
var fs = require("fs");
var Local = /** @class */ (function () {
    function Local(nombre) {
        this.nombre = nombre;
        this.elementos = [];
        this.cargarItems();
    }
    Local.prototype.getElementos = function () {
        return this.elementos;
    };
    Local.prototype.agregar = function (itm) {
        this.elementos.push(itm);
    };
    Local.prototype.hayStock = function (artic) {
        var pos = this.elementos.indexOf(artic);
        return this.elementos[pos].getCantidad() > 0;
    };
    Local.prototype.cargarItems = function () {
        try {
            var txtItems = fs.readFileSync("articulos.txt", "utf-8");
            var datosItems = txtItems.split('\r\n');
            var infoItems = void 0;
            var itm = void 0;
            for (var i = 0; i < datosItems.length; i++) {
                infoItems = datosItems[i].split(',');
                itm = new item_1["default"](parseInt(infoItems[0]), infoItems[1], parseInt(infoItems[2]), parseInt(infoItems[3]));
                this.elementos.push(itm);
            }
        }
        catch (err) {
            console.error("NO SE ENCONTRO EL ARCHIVO...", err);
        }
    };
    Local.prototype.buscar = function (codigo) {
        var art = null;
        for (var i = 0; i < this.elementos.length; i++) {
            art = this.elementos[i];
            if (codigo == art.getCodigo()) {
                return i;
            }
        }
        return -1;
    };
    Local.prototype.valorVenta = function (precio, cant) {
        return precio * cant;
    };
    Local.prototype.venderItem = function (codigo, cant) {
        var posicItem = this.buscar(codigo);
        if (posicItem != -1) {
            if (cant < this.elementos[posicItem].getCantidad()) {
                this.elementos[posicItem].vender(cant);
                var venta = fs.appendFile('vendidos.txt', this.elementos[posicItem].getNombre() + ","
                    + cant.toString() + "," + this.valorVenta(this.elementos[posicItem].getPrecio(), cant).toString() + "\r\n", function (err) {
                    if (err) {
                        throw console.error("NO SE PUDO GUARDAR...", err);
                    }
                    else {
                    }
                });
            }
            else {
                console.log("no se pudo realizar la venta (no hay suficiente stock)");
            }
        }
    };
    Local.prototype.calcularVentas = function () {
        try {
            var suma = 0;
            console.log("suma = ", suma);
            var txtVentas = fs.readFileSync("vendidos.txt", "utf-8");
            //console.log("vdd ",txtVentas);
            var datosVentas = txtVentas.split('\r\n');
            datosVentas.pop(); //elimino la ultima fila que esta vacia
            var infoItem = [];
            console.log("dV ", datosVentas);
            for (var i = 0; i < datosVentas.length; i++) {
                infoItem = datosVentas[i].split(",");
                //console.log(infoItem);
                //console.log(infoItem[2])
                suma += parseInt(infoItem[2]);
                // console.log("sum: ",suma);
            }
            // console.log("suma = ",suma);
            return suma;
        }
        catch (e) {
            console.error("NO SE ENCONTRO EL ARCHIVO...", e);
        }
    };
    return Local;
}());
exports["default"] = Local;
