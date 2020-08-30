import LegajoEscolar from "./legajoEscolar";
import Examen from "./examen";
import Alumno from "./alumno";

let legajo: LegajoEscolar = new LegajoEscolar("La Escuelita Adulta");
let examen1: Examen = new Examen("curso 1","02082020");
let colegiado: Alumno = new Alumno(12211,"Carlo","Marxo",30);
examen1.agregarAlumno(colegiado);
colegiado.agregarExamen(examen1);
examen1.setNotaAlumno(colegiado,7);

let examen2: Examen = new Examen("curso 2","02072020");
examen2.agregarAlumno(colegiado);
colegiado.agregarExamen(examen2);
examen2.setNotaAlumno(colegiado,8);

let colegia2: Alumno = new Alumno(12213,"Jon","Snow",22);
examen1.agregarAlumno(colegia2);
colegia2.agregarExamen(examen1);
examen1.setNotaAlumno(colegia2,4);

examen2.agregarAlumno(colegia2);
colegia2.agregarExamen(examen2);
examen2.setNotaAlumno(colegia2,5);

legajo.agregar(colegiado);
console.log("promedio de ",colegiado.getNombreCompleto()," es de: ",colegiado.calcularPromedio());
console.log("estudiante: ",colegiado);
// console.log("legajo: ",legajo);
legajo.agregar(colegia2);
console.log("promedio de ",colegia2.getNombreCompleto()," es de: ",colegia2.calcularPromedio());
console.log("estudiante: ",colegia2);
console.log("legajo: ",legajo);

console.log("promedio de gral de alumnos en el instituto ", legajo.getInstitucion(),"es de: ",legajo.calcularPromedio());