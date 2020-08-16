import {Decodificador} from './Decodificador';

class Televisor {
    private estaPrendido: boolean
    private decodificador: Decodificador;

    constructor() {
        this.decodificador = new Decodificador();
        this.estaPrendido = false;
    }

    public getDecodificador():Decodificador{
        return this.decodificador;
    }
    
    public prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false
        else
            this.estaPrendido = true
    }

    public subirVolumen(): void {
        if (this.estaPrendido) {
                this.getDecodificador().subirVolumen();
        }
    }

    public bajarVolumen(): void {
        if (this.estaPrendido) {
            this.getDecodificador().bajarVolumen();
        }
    }

    public subirCanal(): void {
        if (this.estaPrendido) {
            this.getDecodificador().subirCanal();
        }
    }

    public bajarCanal(): void {
        if (this.estaPrendido) {
            this.getDecodificador().bajarCanal();
        }
    }

    public elegirCanal(canal: number): void {
        if (this.estaPrendido) {
            this.getDecodificador().elegirCanal(canal);
        }
    }

    public getCanal(): number{
        return this.decodificador.getCanal();
    }
}

function mirandoTele() {
    miTele.bajarVolumen();
    miTele.bajarVolumen();
    console.log(miTele);
    miTele.subirCanal();
    miTele.subirVolumen();
    console.log(miTele);
    for (let i = 1; i <= 10; i++) {
        miTele.subirVolumen();
        console.log("subo el volumen.... ", miTele);
    }
    miTele.elegirCanal(25);
    console.log(miTele);
}

let miTele = new Televisor();
console.log("prendo el televisor");
miTele.prenderApagar();
mirandoTele();
console.log("apago el televisor");
miTele.prenderApagar();
mirandoTele();



