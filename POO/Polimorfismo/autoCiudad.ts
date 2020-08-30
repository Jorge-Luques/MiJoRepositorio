import {Auto} from './auto';

export class AutoCiudad extends Auto {
    public constructor(marca: string, modelo: string) {
        super(marca, modelo);
    }
    
    public acelerar(): void {
        this.velocidadActual += 5;
    }
}