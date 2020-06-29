let inputCompra = document.querySelector(".compra");
let h3Total = document.querySelector(".total");
let misCompras = document.querySelector(".mis-compras");
let compras = [];

let actualizarLista = () => {
  misCompras.innerHTML = "";
  for (let i = 0; i < compras.length; i++) {
    let miLi = document.createElement("li");
    miLi.innerHTML = compras[i];
    misCompras.appendChild(miLi);
  }
};

let agregarCompra = () => {
  let nuevaCompra = Number(inputCompra.value);
  compras.push(nuevaCompra);
  inputCompra.value = "";
  actualizarLista();
};

let calcularTotal = () => {
  let suma = 0;
  for (let i = 0; i < compras.length; i++) {
    suma += compras[i];
  }
  h3Total.innerHTML = suma;
};

let eliminarUltima = () => {
  compras.pop();
  actualizarLista();
};

let eliminarTodas = () => {
    compras = [];
    actualizarLista();
};

let botonAgregar = document.querySelector(".boton-agregar");
botonAgregar.addEventListener("click", agregarCompra);

let botonTotal = document.querySelector(".boton-total");
botonTotal.addEventListener("click", calcularTotal);

let botonEliminarUltima = document.querySelector(".boton-eliminar-ultima");
botonEliminarUltima.addEventListener("click", eliminarUltima);

let botonEliminarTodas = document.querySelector(".boton-eliminar-todas");
botonEliminarTodas.addEventListener("click", eliminarTodas);
