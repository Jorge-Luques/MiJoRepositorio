// class Decodificador{
//     private volumenActual: number;
//     private canalActual: number

//     constructor (){
//         this.volumenActual = 20;
//         this.canalActual = 44;
//     }

//     public subirVolumen(): void {    
//             if (this.volumenActual < 100) {
//                 this.volumenActual = this.volumenActual + 1;
//             }
//     }

//     public bajarVolumen(): void {  
//             if (this.volumenActual > 0) {
//                 this.volumenActual = this.volumenActual - 1;
//             }   
//     }

//     public subirCanal(): void {  
//             this.canalActual = this.canalActual + 1; 
//     }

//     public bajarCanal(): void {  
//             this.canalActual = this.canalActual - 1; 
//     }

//     public elegirCanal(canal: number): void {  
//             this.canalActual = canal;
//     }

//     public getCanal(): number{
//         return this.canalActual;
//     }
// }