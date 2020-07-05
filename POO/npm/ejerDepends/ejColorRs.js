var color = require ('colors/safe');
var ReadlineSync = require("./node_modules/readline-sync");

let nombre = ReadlineSync.question("Ingresar el nombre: ");
console.log(color.red(nombre));
console.log(color.blue(nombre));
console.log(color.green(nombre));
