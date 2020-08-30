//-------------------- Clase Celular -------------------------
export class Celular{
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
