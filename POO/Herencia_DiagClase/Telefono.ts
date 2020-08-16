//-------------------- Clase Telefono -------------------------
class Celular{
    private numero: number;
    protected estaPrendido: boolean;
    private bateriaActual: number;
    protected linternaPrendida: boolean;

    public constructor(miNro:number){
        this.numero = miNro;
        this.estaPrendido = false;
        this.linternaPrendida = false;
        this.bateriaActual = 100;
    }

    public mandarMensaje(msg:string, numero:number):boolean{
        if (this.estaPrendido){
            console.log("enviando sms con texto: ",msg," al numero: ",numero);
            this.bateriaActual -= 2;
            return true;
        } 
    }

    public hacerLlamada():void{
        if (this.estaPrendido){
            console.log("llamando...C");
            this.bateriaActual -= 4;
        }
    }

    public prenderApagar():void{
        if (!this.estaPrendido)
            this.estaPrendido = true;
        else{
            this.estaPrendido = false;
        }
    }

    public getBateriaActual():number{
        return this.bateriaActual;
    }

    public getNumero():number{
        return this.numero;
    }
}


//-------------------- Clase TelefonoConCamara -------------------------
class CelularConCamara extends Celular{
    private camaraCel: string;

    public constructor(miNro:number){
        super(miNro);
        this.camaraCel = "";
    }

    public sacarFoto():void{
        this.camaraCel += "foto ";
        console.log(this.camaraCel);
    }
}

//-------------------- Clase CelularConRadio -------------------------
class CelularConRadio extends Celular{
    private frecuenciaActual:number; 

    public constructor(miNro:number){
        super(miNro);
        this.frecuenciaActual = 500;
        
    }

    public sintonizar(dial: number){
        if (this.estaPrendido){
            this.frecuenciaActual = dial;
        }
    }

    public verFrecuenciaActual():number{
        return this.frecuenciaActual;
    }
}

//-------- MAIN -----------------------
let micel:Celular = new Celular(3333456);
let celuCam: CelularConCamara = new CelularConCamara(22233344);
let celRadio: CelularConRadio = new CelularConRadio(24942881);
micel.prenderApagar();
micel.mandarMensaje("hola",12345);
console.log(micel);
celuCam.prenderApagar();
celuCam.hacerLlamada();
celuCam.sacarFoto();
celuCam.sacarFoto();
celuCam.sacarFoto();
console.log(celuCam);
celRadio.prenderApagar();
celRadio.sintonizar(750);
console.log("sintonizando ",celRadio.verFrecuenciaActual());
console.log(celRadio);
