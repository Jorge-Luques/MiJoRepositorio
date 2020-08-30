import Item from "./item";
import * as fs from 'fs';

export default class Local {
    private nombre: string;
    private elementos: Item[];

    public constructor(nombre: string) {
        this.nombre = nombre;
        this.elementos = [];
        this.cargarItems();
    }


    public getElementos(): Item[] {
        return this.elementos;
    }

    public agregar(itm: Item): void {
        this.elementos.push(itm);
    }

    public hayStock(artic: Item): boolean {
        let pos: number = this.elementos.indexOf(artic);
        return this.elementos[pos].getCantidad() > 0;
    }


    private cargarItems(): void {
        try {
            let txtItems: string = fs.readFileSync("articulos.txt", "utf-8");
            let datosItems: string[] = txtItems.split('\r\n');
            let infoItems: string[];
            let itm: Item;
            for (let i = 0; i < datosItems.length; i++) {
                infoItems = datosItems[i].split(',');
                itm = new Item(parseInt(infoItems[0]), infoItems[1], parseInt(infoItems[2]), parseInt(infoItems[3]));
                this.elementos.push(itm);
            }
        }
        catch(err){
            console.error("NO SE ENCONTRO EL ARCHIVO...", err);
        }
    }

    private buscar(codigo: number): number {
        let art: Item = null;
        for (let i = 0; i < this.elementos.length; i++) {
            art = this.elementos[i];
            if (codigo == art.getCodigo()) {
                return i;
            }
        }
        return -1;
    }

    private valorVenta(precio: number, cant: number): number {
        return precio * cant;
    }

    public venderItem(codigo: number, cant: number) {
        let posicItem: number = this.buscar(codigo);
        if (posicItem != -1) {
            if (cant < this.elementos[posicItem].getCantidad()) {
                this.elementos[posicItem].vender(cant);
                let venta = fs.appendFile('vendidos.txt', this.elementos[posicItem].getNombre() + ","
                    + cant.toString() + "," + this.valorVenta(this.elementos[posicItem].getPrecio(), cant).toString() + "\r\n", function (err) {
                        if (err) {
                            throw console.error("NO SE PUDO GUARDAR...",err);
                        } else {
                            
                        }
                    });
            }
            else {
                console.log("no se pudo realizar la venta (no hay suficiente stock)");
            }
        }
    }

    public calcularVentas():number{
        try{
            let suma:number = 0;
            let txtVentas: string = fs.readFileSync("vendidos.txt", "utf-8");
            let datosVentas: string[] = txtVentas.split('\r\n');
            datosVentas.pop(); //elimino la ultima fila que esta vacia
            let infoItem: string[] = [];
            for (let i = 0; i < datosVentas.length; i++) {
                infoItem = datosVentas[i].split(",");
                //console.log(infoItem);
                //console.log(infoItem[2])
                suma += parseInt(infoItem[2]);
                // console.log("sum: ",suma);
            }
            return suma;
        }
        catch (e){
            console.error("NO SE ENCONTRO EL ARCHIVO...",e);
        }
    }
}
