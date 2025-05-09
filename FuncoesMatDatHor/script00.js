//Funções Matematicas 

// Sqrt // pow
// raiz de 25
console.log(Math.sqrt(25));

//potência
console.log(Math.pow(3, 2)); //3²
console.log(Math.pow(4, 3))

//raiz cubica
console.log(Math.pow(27,1/3)); //27^(1/3) = 3

//arredondamento(round)
//Math.round vai arredondar para o mais proximo
console.log(Math.round(4.4));
console.log(Math.round(4.7));
//Math.floor( sempre arredonda pra baixo)
console.log(Math.floor(4.9));
//math.ceil(arredonda pra cima)
console.log(Math.ceil(4.1));

//numeros aleatórios
console.log(Math.random());

console.log(Math.ceil(Math.random()*100));

console.log(Math.floor(Math.random()*100));

console.log(Math.ceil(Math.random()*10000));

console.log(Math.floor(Math.random()*10000));

console.log(Math.round(Math.random()*50));

console.log(Math.round(Math.random()*50+50));

//maximo, minimo e absoluto

var numeros = [0,1,2,3,4,5,6,7,8,9]
console.log(Math.max(numeros)); // 9
console.log(Math.min(numeros)); //0

var absoluto = -10;
console.log(math.abs(absoluto)); //10 // módulo do numero
