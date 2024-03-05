function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  

  var resultado = array.filter(function(numero){
    if (numero % 2 === 0 ){
      return array;
      
    }
  })

  return resultado;
}

filtrarNumerosPares([1, 2, 3, 4, 5, 6])

module.exports = filtrarNumerosPares;
