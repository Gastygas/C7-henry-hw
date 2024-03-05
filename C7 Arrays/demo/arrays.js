// las llaves representan un arrays

// var arreglo1 = [1, 234, 423 , 2424, 1322];
     


// var arreglo2 = [];


// var arreglo3 = [ 1, "27384", true, false , , , , , , 234 ,"hola"];


// var arreglo4= [ "Numero1", [41, 2, 4, 6], ["1", 3, true, [false, "holu", ,4, 5]]];

// arreglo1[2] = "Hola cambiamos todo";
// arreglo1[8]= "hola me añadi";
// console.log(arreglo1)

// for (var i = 0; i < arreglo4.length ; i++){
//     if (Array.isArray(arreglo4[i])){
//         for (var j = 0; j < arreglo4[i].length; j++){
//             console.log(arreglo4[i][j]);
//         }
//     }

// }


// console.log(arreglo1[1]);
// console.log(arreglo1.length);

// for ( var i = 0; i < arreglo4.length; i++){
//     console.log(arreglo4[i]);
// }

// var arreglo1 =[1,2,3,4,5]
// console.log("antes", arreglo1)
// for( var i = arreglo1.length - 1; i >= 0; i--){
//     console.log(arreglo1[i]);
// }

// var palabra = "palabra";

// // console.log(palabra[0]);
// // console.log(palabra[3]);
// for(var i = 0 ; i < palabra.length; i++){
//     console.log(palabra[i]);
// }

// var arreglo1 = [1, 2,3,4,5,6,7]
// console.log ("antes del push", arreglo1);

// arreglo1.push(20); // agrega un valor al final de cada elemento


// console.log("despues del push",arreglo1)  ;

// var arreglo1 = [1, 2,3,4,5,6,7]
// console.log ("antes del pop", arreglo1);

// console.log (arreglo1.pop()); // elimina el ultimo elemento ,no recibe argumento
// console.log (arreglo1.pop());
// console.log (arreglo1.pop());
// console.log (arreglo1.pop());

// console.log("despues del pop",arreglo1)  ;

// ".shift" hace lo mismo que el pop pero desde el inicio
// y el ".unshift" hace lo mismo que el push pero al inicio

// 
// function sumar(a,b){

//     return a + b;
// }

// function operaciones (funcion ){
//    var resultado= funcion(5, 1);
//    return resultado;
// }
// var hola = operaciones (sumar);
// console.log(hola);

// function mostrarElementos(elemento){
//     console.log(elemento)
// }
// var resultado = arreglo1.forEach(mostrarElementos);
// console.log(resultado);
// for each es por cada elemento del arreglo que haga lo que la funcion diga

 var arreglo1 =[1, 2, 3, 4, 5, 6, 7, "pasp"];
function mostrarElementos(elemento){

 return elemento * 5;
}
var resultado = arreglo1.map(mostrarElementos);
// // crea una nueva variable el .map
console.log(arreglo1);
console.log(resultado);

// var arreglo1 =[1, 2, 3, 4, 5, 6, 7, "pasp"];

// function mostrarElementos(elemento){
// if (elemento !== 5) return elemento;
 
// }
// var resultado = arreglo1.filter(mostrarElementos);
// // filter elimina un elemento y el map pone undefined

// console.log(arreglo1);
// console.log(resultado);

// var arreglo1 =[1, 2, 3, 4, 5, 6, 7, "pasp"];
// console.log(arreglo1.includes(2))
// true o false, le pregunta al arreglo si tiene tal elemento

// var arreglo1 =[1, 2, 3, 4, 5, 6, 7, "pasp"];
// function callBack(items){
//     return Number.isInteger(items)
// }
// console.log(arreglo1.every(callBack))
// determina si todos los elementos de un array satisfacen una condicion dada
// en este caso si es que todos son numeros, devuelve false o true

// var arreglo1 =[1, 2, 3, 4, 5, 6, 7, "pasp"];

// var texto = "lorem ipsum in dolerem, ekdsjj"
// var array = texto.split("l");
// split convierte un string en un array, divide el string en elementos
// segun el separador que se especifique

// console.log(array);

// var arreglo1 =[1, 2, 3, 4, 5, 6, 7, "pasp"];

// var texto = "lorem impsun in dolorem, etc etc"

// var textoDeJoin =arreglo1.join(" ")
// console.log(textoDeJoin);
// // el join hace que un arreglo sea un string

