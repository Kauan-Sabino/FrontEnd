//funções de string(Texto)

var texto = "Aula de JavaScript";
console.log(texto.length); //contar o numero de caracteres

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

console.log(texto.substring(0,4));
console.log(texto.slice(-10));

console.log(texto.replace("JavaScript", "TypeScript"));

//splite:usar um caractere comum para searar um vetor.
let linguagens = "JavaScripta,C++, Python,Java,php";
let ArrayLinguagens = linguagens.split(",");
console.log(ArrayLinguagens);

let tesoura = "   JavaScript          ";
console.log(tesoura);
console.log(tesoura.trim);