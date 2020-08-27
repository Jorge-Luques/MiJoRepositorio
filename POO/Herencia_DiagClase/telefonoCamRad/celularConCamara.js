"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CelularConCamara = void 0;
//-------------------- Clase TelefonoConCamara -------------------------
var celular_1 = require("./celular");
var CelularConCamara = /** @class */ (function (_super) {
    __extends(CelularConCamara, _super);
    function CelularConCamara(miNro) {
        var _this = _super.call(this, miNro) || this;
        _this.camaraCel = "";
        return _this;
    }
    CelularConCamara.prototype.sacarFoto = function () {
        this.camaraCel += "foto ";
        console.log(this.camaraCel);
    };
    return CelularConCamara;
}(celular_1.Celular));
exports.CelularConCamara = CelularConCamara;
