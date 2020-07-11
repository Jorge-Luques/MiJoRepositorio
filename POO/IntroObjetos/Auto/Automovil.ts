class Automovil{
    private estaPrendido: boolean;
    private velocidad:number;
    private combustible: number;

    constructor(combustible:number){
        this.estaPrendido = false;
        this.combustible = combustible;
        this.velocidad = 0;
    }

    acelerar():void{
        if (this.estaPrendido){
            this.velocidad = this.velocidad+5;
            this.combustible--;
        }
    }

    frenar():void{
        if(this.velocidad >= 2){
            this.velocidad = this.velocidad -2;
        }
    }

    cargarCombustible(litros:number):void{
        this.combustible = this.combustible + litros;
    }

    arrancar(){
        if(!this.estaPrendido && this.combustible > 0){
            this.estaPrendido = true;
        }
        else{
            console.log("el carro ya arranco o le falta combustible");
        }
    }

    parar(){
        if(this.estaPrendido){
            this.estaPrendido = false;
            this.velocidad = 0;
        }   
    }
}
    let miAuto = new Automovil(0);
    miAuto.arrancar();
    miAuto.cargarCombustible(10);
    console.log("carga de combustible, ",miAuto);
    miAuto.arrancar();
    console.log("arranco el auto ",miAuto);
    miAuto.acelerar();
    console.log("acelero...",miAuto);
    miAuto.acelerar();
    console.log("acelero...",miAuto);
    miAuto.frenar();
    console.log("freno el auto ",miAuto);
    miAuto.parar();
    console.log("Auto parado. ",miAuto);
