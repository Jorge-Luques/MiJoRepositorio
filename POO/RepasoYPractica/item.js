"use strict";
exports.__esModule = true;
var Item = /** @class */ (function () {
    function Item(codigo, nombre, precio, cantidad) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    Item.prototype.getPrecio = function () {
        return this.precio;
    };
    Item.prototype.getCantidad = function () {
        return this.cantidad;
    };
    Item.prototype.getCodigo = function () {
        return this.codigo;
    };
    Item.prototype.vender = function (cant) {
        this.cantidad -= cant;
    };
    Item.prototype.getNombre = function () {
        return this.nombre;
    };
    return Item;
}());
exports["default"] = Item;
