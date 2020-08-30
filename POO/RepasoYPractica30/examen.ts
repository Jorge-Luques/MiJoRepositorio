import Alumno from "./alumno";

export default class Examen{
    private materia: string;
    private fecha: string;
    private notas: number[];
    private alumnos: Alumno[];

    public constructor(materia:string, fecha:string){
        this.materia = materia;
        this.fecha = fecha;
        this.alumnos = [];
        this.notas = [];
    }

    public getMateria(): string{
        return this.materia;
    }

    public getFecha(): string{
        return this.fecha;
    }

    public setNotaAlumno(alumno: Alumno, nota: number): void{
        if (this.alumnos.includes(alumno)){
            let pos: number;
            pos = this.alumnos.indexOf(alumno);
            this.notas[pos] = nota;
        }
    }

    public getNotaAlumno(estud:Alumno): number{
        if (this.alumnos.includes(estud)){
            let pos: number;
            pos = this.alumnos.indexOf(estud);
            return this.notas[pos];
        }
        return -1;
    }

    public agregarAlumno(estud: Alumno): void{
        this.alumnos.push(estud);
    }
}