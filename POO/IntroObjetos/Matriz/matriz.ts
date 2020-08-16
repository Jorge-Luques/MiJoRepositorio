// import * as rs from 'readline-sync';
// class Matriz{
//     private fil: number;
//     private col: number;
//     private matriz: string[][];

//     public constructor(fil:number, col:number){
//         this.fil = fil;
//         this.col = col;
//         this.matriz = new Array<string>(fil);
//         let indice:number;
//         for (indice = 0; indice < fil; indice++){
//             this.matriz[indice] = new Array<string>(col);
//         }
//     }

//     public get(x:number, y:number):any{
//         return this.matriz[x][y];
//     }

//     public loadInPos(x:number, y:number, value:string){
//         this.matriz[x][y] = value;
//     }

//     public mostrarMatriz():void{
//         let x:number;
//         let y:number;
//         let cadena:string = "";
//         for (x = 0; x < this.fil; x++){
//             for (y = 0; y < this.col; y++){
//                 cadena += this.matriz[x][y] + " ";
//             }
//             console.log(cadena);
//             cadena = "";
//         }
//     }

//     public getCantFilas():number{
//         return this.fil;
//     }

//     public getCantCol():number{
//         return this.col;
//     }
// }

// //------------------------ MAIN ---------------------
// let miMatrix:Matriz = new Matriz(3,4);
// let otraMatriz:Matriz = new Matriz(2,2);

// function cargarMatriz(mat:Matriz,fil:number, col:number){
//     let valor;
//     for (let i=0; i < fil; i++){
//         for (let j=0; j < col; j++){
//             valor = rs.question("ingresar el valor a cargar en a pos: ["+i+"] ["+j+"]");
//             mat.loadInPos(i,j,valor);
//         }
//     }
// }