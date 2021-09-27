/*
1)      Calcular a tabuada de multiplicar de 5.

a) Adicionar o resultado de cada cálculo em um array.
b) Transformar o array em string.
c) Exibir no console.
*/

var tabuCinco = []

function tabuada(num){
  for(var i = 0; i < 10; i++){
    tabuCinco.push((i+1)*5);
  }
  tabuCinco = tabuCinco.join(" ");
  return tabuCinco;
}

console.log(tabuada())