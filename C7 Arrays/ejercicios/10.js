function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  return array.find(array => typeof array === 'string' && array.length >= 5);
// console.log(array)
//   console.log(array.find(array => typeof array === 'string' && array.length >= 5))


// var temporal = undefined;

// for( var i = 0; i < array.length; i++){
//   if(array[i].length >= 5){
//     temporal = array[i];
//     break;
    
//   }
// }
//  return temporal;

}
obtenerPrimerStringLargo(["hi", "there", "hola", "mundoo"]);
module.exports = obtenerPrimerStringLargo;
