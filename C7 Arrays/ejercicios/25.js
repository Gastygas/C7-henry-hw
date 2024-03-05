function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
console.log("hola mundo")


for(var i = 0; i < numeros.length; i++){
  
 if( numeros[i] % 2 === 0){
  return numeros
 } else{
  continue;
 }

}

return numeros;
}

contarParesConContinue([1,2,3,4,5,6,7,8,9])

module.exports = contarParesConContinue;
