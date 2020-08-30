import {Telefono} from './telefono';

export class SmartPhone implements Telefono {
    private numero: string;
    private estaPrendido: boolean;

    public constructor(nro:string) {
        this.numero = nro;
        this.estaPrendido = false;
    }
    
    public prender(): void{
        this.estaPrendido = true;
    }

    public apagar(): void{
        this.estaPrendido = false;
    }

    public llamar(numero:string): void{
        console.log("llamando al ",numero);
    }

    public getNumero(): string{
        return this.numero;
    }
}