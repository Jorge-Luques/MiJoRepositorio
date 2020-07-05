let EventEmitter = require('events')
var ReadlineSync = require("./node_modules/readline-sync");
 
let ee = new EventEmitter()
ee.on('message', function (text) {
  console.log(text)
})
//ee.emit('message', 'hello world')

console.log("Mensaje hecho por consola");
ee.emit('message',"mensaje manejado con evento");
let nombre = ReadlineSync.question("Ingresar nombre: ");
ee.emit("message","HOLA "+nombre);
