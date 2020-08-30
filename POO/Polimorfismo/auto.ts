export class Auto {
    private marca: string;
    private modelo: string;
    protected velocidadActual: number;

    public constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = 0;
    }

    public acelerar(): void {
        this.velocidadActual += 10;
    }

    public getMarca():string{
        return this.marca;
    }

    public getModelo(){
        return this.modelo;
    }
}