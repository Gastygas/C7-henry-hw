function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  

  var acumulador = array[0]
  for(var i = 1; i < array.length; i++){

    if(array[i] !== acumulador){
      return false;
    }
  } 
  return true;
}



module.exports = todosIguales;
