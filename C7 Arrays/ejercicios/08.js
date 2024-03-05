function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   // console.log(array);
   // console.log(num)

    return array.indexOf(num);
   // for(var i = 0; i < array.length; i++){
   //    if(array[i] === num){
   //       return i;
   //    }
   // }


   // return -1;

   // var resultado = array.filter( function(numero, indice, array){
   //    if(numero === num) return indice})

   //    return resultado[0];
    
}

encontrarElemento(6780,[1, 2, 3, 4, 5, 6, 7])



module.exports = encontrarElemento;
