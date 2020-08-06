class Monitor{
    private encendido: boolean;
    private brillo: number;
    private contraste: number;
    private color:number;

    constructor(){
        this.encendido = false;
        this.brillo = 5;
        this.contraste = 5;
        this.color = 5;
    }

    botonPower():void{
        if (!this.encendido){
            this.encendido = true;
        }
        else{
            this.encendido = false;
        }
    }

    getEncendido():boolean{
        return this.encendido;
    }

    subirBrillo():void{
        if (this.encendido){
            if(this.brillo <= 10){
                this.brillo = this.brillo + 1; // OJO porque no funciona el incremento ++ en este caso
            }
        }
    }

    bajarBrillo():void{
        if (this.encendido){
            if(this.brillo > 0){
                this.brillo = this.brillo - 1;
            }
        }
    }

    getBrillo():number{
        return this.brillo;
    }

    subirContraste():void{
        if (this.encendido){
            if(this.contraste <= 10){
                this.contraste = this.contraste+1;
            }
        }
    }

    bajarContraste(){
        if (this.encendido){
            if(this.contraste > 0){
                this.contraste = this.contraste-1;
            }
        }
    }

    getContraste():number{
        return this.contraste;
    }

    subirColor():void{
        if (this.encendido){
            if(this.color <= 10){
                this.color = this.color+1;
            }
        }
    }

    bajarColor(){
        if (this.encendido){
            if(this.color > 0){
                this.color = this.color-1;
            }
        }
    }

    getColor():number{
        return this.color;
    }
}

let miMonitor = new Monitor();
miMonitor.botonPower();
console.log(miMonitor);
miMonitor.subirBrillo();
miMonitor.bajarColor();
console.log(miMonitor);
miMonitor.botonPower();
console.log("apagado...",miMonitor);
miMonitor.subirContraste();
console.log(miMonitor);