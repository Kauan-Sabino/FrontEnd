let frutas = ["Maça","Banana","Uva","Laranja"];

console.log(frutas[2]);

frutas.push("Melancia");
console.log(frutas);

frutas.shift();
console.log(frutas);

frutas.forEach(fruta => {
    console.log(fruta);
});