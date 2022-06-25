/*Primer desafio*/

console.log("Escribe la cadena");
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    cadena = d.toString();
    primeraDosLetras = cadena.substr(0, 2);
    primeraTresLetras = cadena.substr(0, 3);
    longitudCadena = cadena.length;
    longitudCadenaDos = longitudCadena - 4
    longitudCadenaUltima = longitudCadena - 3
    dosUlitmasLetras = cadena.substr(longitudCadenaDos, 2);
    ultimaLetra = cadena.substr(longitudCadenaUltima, 1)
    console.log("Las primeras dos letras de la cadena es: " + primeraDosLetras);
    console.log("Las primeras tres letras de la cadena es: " + primeraTresLetras);
    console.log("Las ultimas dos letras de la cadena es: " + dosUlitmasLetras);
    console.log("La ultima letra de la cadena es: " + ultimaLetra);
    
  });