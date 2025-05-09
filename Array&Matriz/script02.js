//operações avançadas em vetores

//filtros - percorre faz uma função

let numeros = [10,20,30,40,50,60,70,80,90];

let numMaior20 = numeros.filter(x => x > 20);
console.log(numMaior20);

//map - percorre faz uma ação
let numerosNovos = numeros.map(x => x*2);
console.log(numerosNovos);

//reduce
let soma = numeros.reduce((acumulador,valorAtual) => acumulador + valorAtual,0);
console.log(soma); //450

//sort (organizador)

let aleatorio = [2,5,7,1,4,9,3,8,6,0];
aleatorio.sort();
console.log(aleatorio);