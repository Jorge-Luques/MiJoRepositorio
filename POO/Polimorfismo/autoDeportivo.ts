import {Auto} from './auto';

export class AutoDeportivo extends Auto {
    public constructor(marca: string, modelo: string) {
        super(marca, modelo);
    }
    
    public acelerar(): void {
        this.velocidadActual += 50;
    }
}