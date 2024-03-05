function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
 
 
  // var inicio = 0
  // var resultado = arrayOfNums.reduce((acumulador, currentValue )=> acumulador + 
  // currentValue, inicio,
  // );
  // console.log(resultado)

  var resultado = arrayOfNums.reduce(function(acum,numero){
    return (acum = acum + numero)
    
  })

  return resultado;

}

module.exports = agregarNumeros;
