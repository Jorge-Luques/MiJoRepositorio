
//---------------------- CLASE ArticuloLectura ------------------------------------
abstract class ArticuloLectura{
    private ISBN:number;
    private autor:string;
    private editorial:string;
    private titulo:string;
    protected cantidadPaginas:number;
    

    constructor(isbn: number, titulo:string, autor:string, editorial:string){
        this.ISBN = isbn;
        this.editorial = editorial;
        this.autor = autor;
        this.titulo = titulo;
        this.cantidadPaginas = 100;
    }

    public getISBN():number{
        return this.ISBN;
    }

    public getEditorial():string{
        return this.editorial;
    }
    
    public getautor():string{
        return this.autor;
    }

    public getTitulo():string{
        return this.titulo;
    }

    public abstract setCantPaginas(cant:number):void;

    public getCantPaginas():number{
        return this.cantidadPaginas;
    }

}

//---------------------- CLASE Revista ------------------------------------
class Revista extends ArticuloLectura{
    private articulos: string[];

    public constructor(isbn: number, titulo:string, autor:string, editorial:string){
        super(isbn, titulo, autor, editorial);
        this.articulos = [];
    }

    public setCantPaginas(c: number){
        if (c <= 50){
            this.cantidadPaginas = c;
        }
        else{
            console.error("Cantidad de paginas excedida");
        }
    }
}

//---------------------- CLASE Libro ------------------------------------
class Libro extends ArticuloLectura{

    public constructor(isbn: number, titulo:string, autor:string, editorial:string){
        super(isbn, titulo, autor, editorial);
    }

    public setCantPaginas(c: number){
        
    }
}

//---------------------- CLASE Biblioteca ------------------------------------
class Biblioteca{
    private elementos:ArticuloLectura[];
    private nombreBiblioteca: string;
    private direccion: string;

    constructor(nombreBiblioteca:string, dir: string){
        this.nombreBiblioteca = nombreBiblioteca;
        this.direccion = dir;
        this.elementos = [];
        
    }
    
    public getNombre():string{
        return this.nombreBiblioteca;
    }
    
    /**
     * El método insertar debe crea un Elemento de Lectura (Libro o Revista) y lo agrega a la lista de elementos, 
     * retornará true en caso de haberlo guardado exitosamente y false en otro caso. 
     * @param miArtic 
     */
    public insertar(miArtic:ArticuloLectura):boolean{
        if(!this.elementos.includes(miArtic)){
            this.elementos.push(miArtic);
            return true;
        }
        return false;
    }

    private buscar(codigo:number):number{
        let artl:ArticuloLectura = null;
        for(let i=0; this.elementos.length; i++){
            artl = this.elementos[i];
            if(codigo == artl.getISBN()){
                return i;
            }
        }
        return -1;
    }

    /**El método eliminar recibe un identificador de artículo 
     * y debe retornar true en caso de haberlo borrado exitosamente 
     * y false en caso contrario.
     * 
     * @param codigo 
     */
    public eliminar(codigo:number):boolean{
        if (this.buscar(codigo) != -1){
            let poslibro:number = this.buscar(codigo);//lo encontro y se para en la pos donde se encuentra
            for (let i = poslibro; i < this.elementos.length-1; i++){
                this.elementos[i] = this.elementos[i+1];//hago corrimiento a izq
            }
            this.elementos.pop();//borro el ultimo, que esta duplicado
            return true;
        }
        return false;
    }

    public actualizar(car:ArticuloLectura, pos:number):void{
        if(pos >= 0 && pos < this.elementos.length){
            this.elementos[pos] = car;
        }
        else{
            console.log("posicion NO VALIDA para actualizar el libro");
        }
    }

    /**
     * El método buscar, recibira el numero de ISBN del elemento y deberá retornar 
     * el elemento de lectura correspondiente, en caso de no existir, manejar el error como crea adecuado
     * @param codigoIsbn 
     */
    public busqueda(codigoIsbn:number):ArticuloLectura{
        let artl:ArticuloLectura = null;
        let pos: number = this.buscar(codigoIsbn);
        if (this.buscar(codigoIsbn) != -1){
            artl = this.elementos[pos];
            return artl;
        }
        else{
            console.error("No se encontro un articulo coincidente");
            return null;
        }

    }

    /**
     * El método modificarPaginas, recibe el ID del artículo y retorna true en caso de éxito 
     * y false en otro caso.
     */
    public modificarPaginas(codigo:number, c:number):boolean{
        if(this.busqueda(codigo) != null){
            let art:ArticuloLectura = this.busqueda(codigo);
            art.setCantPaginas(c);
            return true;
        }
        return false;
    }

    /**
     * El método buscarPorAutor, recibirá un string con el nombre del autor 
     * y retorna un arreglo con todos los artículos de lectura que correspondan.
     * @param bsqAutor 
     */
    public buscarPorAutor(bsqAutor: string): ArticuloLectura[]{
        let articulos: ArticuloLectura[]=[];
        for (let i=0; i < this.elementos.length; i++){
            if (bsqAutor == this.elementos[i].getautor()){
                articulos.push(this.elementos[i]);
            }
        }
        return articulos;
    }
}
