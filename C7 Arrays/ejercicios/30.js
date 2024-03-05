function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
console.log(numeros);

for( var i = 0; i < numeros.length; i++){
  console.log(i)
  for( var j = i+1; j < numeros.length; j++){
    
    if(numeros[i] === numeros[j]) return numeros[j];

  }
}



}
encontrarElementoRepetido([1, 2, 3, 3, 4, 5]);

module.exports = encontrarElementoRepetido;