//funções de data e hora
let agora = new Date();
console.log(agora)

console.log(agora.toLocaleTimeString());

console.log(agora.toLocaleDateString());
//definição da classe date() para a variavel agora

let date1 = new Date("2025-01-23");
let date2 = new Date("2025-06-28");
let diferenca = date2 - date1;

console.log(diferenca/(1000 * 60* 60 *24));