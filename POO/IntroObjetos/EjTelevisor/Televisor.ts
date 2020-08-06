class Televisor {
    private estaPrendido: boolean
    private volumenActual: number
    private canalActual: number
    private decodificador: Decodificador;

    constructor(canalActual: number, volumenActual: number) {
        this.decodificador = new Decodificador();
        this.canalActual = canalActual;
        this.volumenActual = volumenActual;
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
            if (this.volumenActual < 100) {
                this.getDecodificador().subirVolumen();
            }
        }
    }

    public bajarVolumen(): void {
        if (this.estaPrendido) {
            if (this.volumenActual > 0) {
                this.getDecodificador().bajarVolumen();
            }
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

class Decodificador{
    private volumenActual: number;
    private canalActual: number

    constructor (){
        this.volumenActual = 20;
        this.canalActual = 44;
    }

    public subirVolumen(): void {    
            if (this.volumenActual < 100) {
                this.volumenActual = this.volumenActual + 1;
            }
    }

    public bajarVolumen(): void {  
            if (this.volumenActual > 0) {
                this.volumenActual = this.volumenActual - 1;
            }   
    }

    public subirCanal(): void {  
            this.canalActual = this.canalActual + 1; 
    }

    public bajarCanal(): void {  
            this.canalActual = this.canalActual - 1; 
    }

    public elegirCanal(canal: number): void {  
            this.canalActual = canal;
    }

    public getCanal(): number{
        return this.canalActual;
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



