/* Se debe calcular las calificaciones de un grupo de alumnos, donde la nota final
 de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%
Se debe ingresar el nombre del alumno y sus tres notas, se escribirá el resultado 
y se volverá a pedir los datos del siguiente alumno hasta que el nombre sea una cadena vacía ""
Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las notas, 
mostrara un mensaje de error y continuará con otro alumno)
*/

let readlineSync = require('readline-sync');
let nombreAlumno = readlineSync.question("Ingresar el nombre del alumno: ");
let partTeorica, partPract, partProbl;
while (nombreAlumno != ""){
    console.log("Ingresar las notas del alumno");
    partTeorica = readlineSync.questionFloat("la nota de la parte teorica es: ");
    partPract = readlineSync.questionFloat("la nota de la parte practica es: ");
    partProbl = readlineSync.questionFloat("la nota de la parte problemas es: ");
    if ((partTeorica >= 0 && partTeorica <=10) && (partPract >=0 && partPract <=10) 
    && (partProbl >= 0 && partProbl <= 10)){
        let nota = partTeorica * 0.4 + partPract * 0.1 + partProbl * 0.5;
        console.log("La nota final del alumno "+ nombreAlumno + " es de: "+nota);
    }
    else{
        console.log("Notas invalidas, deben ser entre 0 y 10!!!");
    }
    nombreAlumno = readlineSync.question("Ingresar el nombre del alumno: ");
}