//comparaciones logicas entre numeros y entre strings
let numero1 = 3;
let numero2 = 5;
resultado = numero1 > numero2; // resultado=false
resultado = numero1 < numero2; // resultado=true
numero1 = 5;
numero2 = 5;
resultado = numero1 >= numero2; // resultado=true
if (resultado){
    console.log(numero1+" es mayor o igual que "+numero2);
}
resultado = numero1 <= numero2; // resultado=true
if (resultado){
    console.log(numero1+" es menor o igual que "+numero2);
}
resultado = numero1 == numero2; // resultado=true
if (resultado){
    console.log(numero1+" es igual que "+numero2);
}
resultado = numero1 != numero2; // resultado=false
if (!resultado){
    console.log(numero1+" no es distinto de "+numero2);
}
// El operador "=" asigna valores
numero1 = 5;
resultado = numero1 = 3; // numero1=3 y resultado=3
console.log("esto tiene la variable resultado: "+resultado);

// El operador "==" compara variables
numero1 = 5;
resultado = numero1 == 3; // numero1=5 y resultado=false;
if (!resultado){
    console.log(numero1+" no es igual que 3");
}
let texto1 = "hola";
let texto2 = "hola";
let texto3 = "adios";
resultado = texto1 == texto3; // resultado = false
if (!resultado){
    console.log(texto1+" NO es igual que "+texto3);
}
resultado = texto1 != texto2; // resultado = false
if (!resultado){
    console.log(texto1+" NO es distinto que "+texto2);
}
resultado = texto3 >= texto2; // resultado = false
if (!resultado){
    console.log(texto3+" NO es mayor o igual que "+texto2);
}