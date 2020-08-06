import * as fs from 'fs';
import * as rs from 'readline-sync';

//---------------------- CLASE Libro ------------------------------------
class Libro{
    private codigo:string;
    private genero:string;
    private autor:string;
    private titulo:string;
    private stock:number;
    

    constructor(codigo: string, titulo:string, autor:string, genero:string){
        this.codigo = codigo;
        this.genero = genero;
        this.autor = autor;
        this.titulo = titulo;
        this.stock = 1;
    }

    public getcodigo():string{
        return this.codigo;
    }

    public getgenero():string{
        return this.genero;
    }
    
    public getautor():string{
        return this.autor;
    }

    public getTitulo():string{
        return this.titulo;
    }

    public agregarcantStock(cant:number):void{
        this.stock += cant;
    }

    public vender():void{
        this.stock = this.stock -1;
    }

}

//---------------------- CLASE GestorLibros ------------------------------------
class GestorLibros{
    private registrados:Libro[];
    private id:number;

    constructor(id:number){
        this.id = id;
        this.registrados = [];
        this.cargarLibros();
    }

    private cargarLibros(){
        let txtLibros:string = fs.readFileSync("misLibros.txt","utf-8");
        let datosLibro:string[] = txtLibros.split('\r\n');
        let infolibro: string[];
        let theBook: Libro;
        for (let i=0; i < datosLibro.length;i++){
            infolibro = datosLibro[i].split(',');
            theBook = new Libro(infolibro[0],infolibro[1],infolibro[2],infolibro[3]);
            this.agregar(theBook);
        }      
    }
    
    public getId():number{
        return this.id;
    }
    
    public agregar(libro:Libro):void{
        this.registrados.push(libro);
    }

    private buscar(codigo:string):number{
        let libroReg:Libro = null;
        for(let i=0; this.registrados.length; i++){
            libroReg = this.registrados[i];
            if(codigo == libroReg.getcodigo()){
                return i;
            }
        }
        return -1;
    }

    public borrar(codigo:string):void{
        if (this.buscar(codigo) != -1){
            let poslibro:number = this.buscar(codigo);//lo encontro y se para en la pos donde se encuentra
            for (let i = poslibro; i < this.registrados.length-1; i++){
                this.registrados[i] = this.registrados[i+1];//hago corrimiento a izq
            }
            this.registrados.pop();//borro el ultimo, que esta duplicado
        }
    }

    public actualizar(car:Libro, pos:number):void{
        if(pos >= 0 && pos < this.registrados.length){
            this.registrados[pos] = car;
        }
        else{
            console.log("posicion NO VALIDA para actualizar el libro");
        }
    }

    public busquedaGlobal(criterio:string):Libro[]{
        let matching: Libro[];
        let tipoBsq:number;
        //seleccionar el criterio de busqueda de acuerdo a lo ingresado en el tipo de busqueda
        if (criterio != ''){
            console.log("Ingresar el tipo de busqueda en el gestor de libros de acuerdo a los siguientes tipos");
            console.log(" 1. por genero");
            console.log(" 2. por autor");
            tipoBsq = rs.questionInt("seleccionar busqueda: ");
            switch (tipoBsq){
                case 1: matching = this.coincidentesxGenero(criterio); break;
                case 2: matching = this.coincidentesxAutor(criterio); break;
                default: matching = this.registrados; break;
            }
        }
        else{
            matching = this.registrados;
        }
        return matching;
    }

    private coincidentesxGenero(bsqGenero: string): Libro[]{
        let librosCriterio: Libro[]=[];
        for (let i=0; i < this.registrados.length; i++){
            if (bsqGenero == this.registrados[i].getgenero()){
                librosCriterio.push(this.registrados[i]);
            }
        }
        return librosCriterio;
    }

    private coincidentesxAutor(bsqAutor: string): Libro[]{
        let librosCriterio: Libro[]=[];
        for (let i=0; i < this.registrados.length; i++){
            if (bsqAutor == this.registrados[i].getautor()){
                librosCriterio.push(this.registrados[i]);
            }
        }
        return librosCriterio;
    }
}

let gbook:GestorLibros = new GestorLibros(33);
let unLibro: Libro = new Libro("230f","Harry Potter y la piedra filosofal","J.K. Rowling","infantil");
console.log("llego el libro ",unLibro.getTitulo()," con codigo: ",unLibro.getcodigo());
unLibro.agregarcantStock(5);
gbook.agregar(unLibro);
console.log(gbook);
let busqueda: Libro[] = [];
busqueda = gbook.busquedaGlobal("Las mil y una noches");
console.log(busqueda);
