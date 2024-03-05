function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
 
  var resultado = array.filter(function(numero){
    if(numero > 10){
      return numero
    }
  })
  
  return resultado.length;
}





module.exports = contarElementosMayoresA10;
