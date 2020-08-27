//------------------------ Clase Vehiculo --------------------- 
export class Vehiculo{
    private patente:string;
    private marca:string;
    private disegno:string;
    private modelo:string;

    constructor(patente: string, marca:string, disegno:string, modelo:string){
        this.patente = patente;
        this.marca = marca;
        this.disegno = disegno;
        this.modelo = modelo;
    }

    public getPatente():string{
        return this.patente;
    }

    public getMarca():string{
        return this.marca;
    }
    
    public getDisegno():string{
        return this.disegno;
    }

    public getModelo():string{
        return this.modelo;
    }

  
}