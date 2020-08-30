import Examen from "./examen";
import { Promedio } from "./promedio";

export default class Alumno implements Promedio{
    private expediente: number;
    private nombre: string;
    private apellido: string;
    private edad: number;
    private examenes: Examen[];

    public constructor(expediente: number, nombre: string, apellido: string, edad:number){
        this.expediente = expediente;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.examenes = [];
    }

    public calcularPromedio(): number{
        let suma:number = 0;
        for (let i=0; i < this.examenes.length; i++){
            suma += this.examenes[i].getNotaAlumno(this);
        }
        if (this.examenes.length > 0){
            return suma/this.examenes.length
        }
        else{
            return 0;
        }
    }

    public getNombreCompleto(): string{
        return (this.nombre+" "+this.apellido);
    }

    public agregarExamen(prueba: Examen): void{
        this.examenes.push(prueba);
    }
}