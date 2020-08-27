import LegajoEscolar from "./legajoEscolar";
import Examen from "./examen";
import Alumno from "./alumno";

let legajo: LegajoEscolar = new LegajoEscolar("La Escuelita Adulta");
let examen1: Examen = new Examen("curso 1","02082020");
let colegiado: Alumno = new Alumno(12211,"Carlo","Marxo",30);
examen1.agregarAlumno(colegiado);
examen1.setNotaAlumno(colegiado,7);

let examen2: Examen = new Examen("curso 2","02072020");
examen2.agregarAlumno(colegiado);

examen2.setNotaAlumno(colegiado,8);

legajo.agregar(colegiado);
console.log("promedio de ",colegiado.getNombreCompleto()," es de: ",colegiado.calcularPromedioGral());
console.log("estudiante: ",colegiado);
console.log("legajo: ",legajo);