precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

numero = 0;

function suma() {
  numero += 1;
  numeroInicial = document.querySelector(".cantidad");
  numeroInicial.innerHTML = numero;

  total = document.querySelector(".valor-total");
  total.innerHTML = numero * precio;
}

function resta() {
  if (numero > 0) {
    numero -= 1;
    numeroInicial = document.querySelector(".cantidad");
    numeroInicial.innerHTML = numero;

    total = document.querySelector(".valor-total");
    total.innerHTML = numero * precio;
  } else {
    numero = 0;
  }
}
