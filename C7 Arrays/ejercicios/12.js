function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
//  return array.map( array =>{
//   if(typeof array === 'string'){
//     return array.toUpperCase();
//   }else{
//     return array;
//   }
//  });
 
  var resultado = array.map(function(texto){

    if(typeof texto === "string"){
      return texto.toUpperCase();
    }
  })
  
 return resultado;
}


module.exports = convertirStringAMayusculas;
