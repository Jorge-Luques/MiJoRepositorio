class Televisor {
    private estaPrendido: boolean
    private volumenActual: number
    private canalActual: number

    constructor(canalActual: number, volumenActual: number) {
        this.canalActual = canalActual;
        this.volumenActual = volumenActual;
        this.estaPrendido = false;
    }
    prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false
        else
            this.estaPrendido = true
    }
    subirVolumen(): void {
        if (this.estaPrendido) {
            if (this.volumenActual < 100) {
                this.volumenActual = this.volumenActual + 1;
            }
        }
    }
    bajarVolumen(): void {
        if (this.estaPrendido) {
            if (this.volumenActual > 0) {
                this.volumenActual = this.volumenActual - 1;
            }
        }
    }
    subirCanal(): void {
        if (this.estaPrendido) {
            this.canalActual = this.canalActual + 1;
        }
    }
    bajarCanal(): void {
        if (this.estaPrendido) {
            this.canalActual = this.canalActual - 1;
        }
    }
    elegirCanal(canal: number): void {
        if (this.estaPrendido) {
            this.canalActual = canal;
        }
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

let miTele = new Televisor(2, 0);
console.log("prendo el televisor");
miTele.prenderApagar();
mirandoTele();
console.log("apago el televisor");
miTele.prenderApagar();
mirandoTele();



