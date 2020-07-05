//import {question} from './node_modules/readline-sync';
var rs = require('./node_modules/readline-sync');
function ejemplo(nombre){
    return "Hola "+nombre;
}

nombre = rs.question("Podes decirme tu nombre? ");
console.log(ejemplo(nombre));