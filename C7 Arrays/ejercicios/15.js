function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  var indiceMasGrande = 0;
  var mayorNumero = array[0];

  for( var i = 1 ; i < array.length; i++){
    if (array[i] > mayorNumero){
      mayorNumero = array[i];
      indiceMasGrande = i;
      
}
}
  return indiceMasGrande
}



encontrarIndiceMayor([1, 2, 3, 4, 5, 4, 10, 11])
module.exports = encontrarIndiceMayor;
