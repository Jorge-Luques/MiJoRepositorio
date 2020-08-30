import {Auto} from './auto';
import {AutoDeportivo} from './autoDeportivo';
import { AutoCiudad } from './autoCiudad';

let primerAuto: Auto = new Auto('Ford', 'Fiesta');
let autoViejo: Auto = new AutoCiudad("Ford","Falcon");
let superAuto: Auto = new AutoDeportivo('Ford', 'Mustang');
let superCar: Auto = new AutoDeportivo("Ferrari","F50");
primerAuto.acelerar();
superAuto.acelerar();
console.log(primerAuto);
console.log(superAuto);
console.log("yo tengo un ",superAuto.getMarca()," ",superAuto.getModelo());
console.log("...y yo tengo un ",superCar.getMarca()," ",superCar.getModelo());
superCar.acelerar();
superCar.acelerar();
console.log(superCar);
autoViejo.acelerar();
console.log(autoViejo);