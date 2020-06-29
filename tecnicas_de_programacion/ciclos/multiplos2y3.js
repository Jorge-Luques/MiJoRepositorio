// obtiene todos los numeros multiplos de 2 y de 3 entre 1 y 100
let num = 1;
while (num <= 100){
    if(num % 2 == 0 || num % 3 == 0){
        console.log(num + " es multiplo de 2 y/o de 3");
    }
    num++;
}