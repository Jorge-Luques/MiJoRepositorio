//-------------------- Clase Telefono -------------------------
class Telefono{
    private numero: number;
    private estaPrendido: boolean;
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
        // o tambien se puede hacer
        // this.estaPrendido = !this.estaPrendido;
    }

    public getBateriaActual():number{
        return this.bateriaActual;
    }

    public getNumero():number{
        return this.numero;
    }
}


//-------------------- Clase TelefonoConCamara -------------------------
class TelefonoConCamara extends Telefono{
    private camaraCel: Camara;

    public constructor(miNro:number){
        super(miNro);
        this.camaraCel = new Camara();
    }

    public sacarFoto():void{
        console.log(this.camaraCel.sacarFoto());
    }
}

//-------------------- Clase Camara -------------------------
class Camara{

    public constructor(){
    }

    public sacarFoto():string{
        return "sonrian...salen en la foto";
    }
}

//-------- MAIN -----------------------
let cel:Telefono = new Telefono(3333456);
let celCam: TelefonoConCamara = new TelefonoConCamara(22233344);
cel.prenderApagar();
cel.mandarMensaje("hola",12345);
console.log(cel);
celCam.prenderApagar();
celCam.hacerLlamada();
celCam.sacarFoto();
console.log(celCam);