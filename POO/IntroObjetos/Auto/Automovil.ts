import * as fs from 'fs';

class Automovil{
    private patente:string;
    private marca:string;
    private disegno:string;
    private modelo:string;
    private estaPrendido: boolean;
    private velocidad:number;
    private combustible: number;

    constructor(patente: string, marca:string, disegno:string, modelo:string){
        this.patente = patente;
        this.marca = marca;
        this.disegno = disegno;
        this.modelo = modelo;
        this.estaPrendido = false;
        this.combustible = 0;
        this.velocidad = 0;
    }

    public getPatente():string{
        return this.patente;
    }

    public getMarca():string{
        return this.marca;
    }
    
    public getDisegno():string{
        return this.disegno;
    }

    public getModelo():string{
        return this.modelo;
    }

    public acelerar():void{
        if (this.estaPrendido && this.combustible > 0){
            this.velocidad = this.velocidad+5;
            this.combustible -1;
        }
    }

    public frenar():void{
        if(this.velocidad >= 2){
            this.velocidad = this.velocidad -2;
        }
    }

    public cargarCombustible(litros:number):void{
        this.combustible = this.combustible + litros;
    }

    public arrancar(){
        if(!this.estaPrendido && this.combustible > 0){
            this.estaPrendido = true;
        }
        else{
            console.log("el carro ya arranco o le falta combustible");
        }
    }

    public parar(){
        if(this.estaPrendido){
            this.estaPrendido = false;
            this.velocidad = 0;
        }   
    }
}


class RegistroAutomotor{
    private registrados:Automovil[];
    private id:number;

    constructor(id:number){
        this.id = id;
        this.registrados = [];
        this.cargarAutos();
    }

    private cargarAutos(){
        let txtAutos:string = fs.readFileSync("Auto/coches.txt","utf-8");
        let datosAuto:string[] = txtAutos.split('\r\n');
        let infoAuto: string[];
        let carro: Automovil;
        for (let i=0; i < datosAuto.length;i++){
            infoAuto = datosAuto[i].split(',');
            carro = new Automovil(infoAuto[3],infoAuto[0],infoAuto[1],infoAuto[2]);
            this.agregar(carro);
        }      
    }
    
    public getId():number{
        return this.id;
    }
    
    public agregar(auto:Automovil):void{
        this.registrados.push(auto);
    }

    private buscar(patente:string):number{
        let autoReg:Automovil = null;
        for(let i=0; this.registrados.length; i++){
            autoReg = this.registrados[i];
            if(patente == autoReg.getPatente()){
                return i;
            }
        }
        return -1;
    }

    public borrar(patente:string):void{
        if (this.buscar(patente) != -1){
            let posAuto:number = this.buscar(patente);//lo encontro y se para en la pos donde se encuentra
            for (let i = posAuto; i < this.registrados.length-1; i++){
                this.registrados[i] = this.registrados[i+1];//hago corrimiento a izq
            }
            this.registrados.pop();//borro el ultimo, que esta duplicado
        }
    }

    public actualizar(car:Automovil, pos:number):void{
        if(pos >= 0 && pos < this.registrados.length){
            this.registrados[pos] = car;
        }
        else{
            console.log("posicion NO VALIDA para actualizar el vehiculo");
        }
    }
}


    let registoAutos = new RegistroAutomotor(1000);
    let miAuto = new Automovil("abc123","fiat","palio","2014");
    miAuto.arrancar();
    let otroAuto = new Automovil("gol701","volkswagen","gol","2010");
    // miAuto.cargarCombustible(10);
    // console.log("carga de combustible, ",miAuto);
    // miAuto.arrancar();
    // console.log("arranco el auto ",miAuto);
    // miAuto.acelerar();
    // console.log("acelero...",miAuto);
    // miAuto.acelerar();
    // console.log("acelero...",miAuto);
    // miAuto.frenar();
    // console.log("freno el auto ",miAuto);
    // miAuto.parar();
    // console.log("Auto parado. ",miAuto);
    // console.log("mi auto es un: ",miAuto.getMarca());
    // console.log("diseño: ",miAuto.getDisegno());
    // console.log("modelo: ",miAuto.getModelo());
    // console.log("patente: ",miAuto.getPatente());
    registoAutos.agregar(miAuto);
    console.log(registoAutos);
    registoAutos.borrar("jjj338");
    console.log(registoAutos);
    registoAutos.actualizar(otroAuto,2);
    console.log(registoAutos);
