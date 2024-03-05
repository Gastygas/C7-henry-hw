function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var aleatorio = array.find(Math.random);
   return aleatorio;
}

module.exports = obtenerElementoAleatorio;
