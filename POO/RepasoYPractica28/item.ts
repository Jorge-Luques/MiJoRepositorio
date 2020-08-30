import Stock from "./stock";

export default class Item implements Stock {
    private codigo: number;
    private nombre: string;
    private precio: number;
    private cantidad: number;
    
    public constructor(codigo: number, nombre: string, precio: number, cantidad: number) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public getCantidad(): number {
        return this.cantidad;
    }

    public getCodigo():number{
        return this.codigo;
    }

    public vender(cant:number){
        this.cantidad -= cant;
    }

    public getNombre():string{
        return this.nombre;
    }
}
