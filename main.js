addEventListener("DOMContentLoaded", (e)=>{

  // Función que determina si un número es perfecto
function esPerfecto(n) {
  // Suma de los divisores del número (excluyendo el propio número)
  var suma = 0;

  // Recorremos todos los posibles divisores del número
  for (var i = 1; i < n; i++) {
    // Si el número es divisible por i, lo añadimos a la suma
    if (n % i == 0) {
      suma += i;
    }
  }
  // Si la suma de los divisores es igual al propio número, es perfecto
  if (suma == n) {
    return true;
  } else {
    return false;
  }
}
// Ejemplo: Comprobamos si el número 28 es perfecto
if (esPerfecto(21)) {
  console.log("El número 28 es perfecto");
} else {
  console.log("El número 28 no es perfecto");
}

})

 