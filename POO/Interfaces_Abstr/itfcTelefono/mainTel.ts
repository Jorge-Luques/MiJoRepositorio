import {SmartPhone} from "./smartphone";

let miSmart = new SmartPhone("007339920");
let tuSmart = new SmartPhone("030345677");

miSmart.prender();
tuSmart.prender();
miSmart.llamar(tuSmart.getNumero());
console.log(miSmart);
console.log(tuSmart);