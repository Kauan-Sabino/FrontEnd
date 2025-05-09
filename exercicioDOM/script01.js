let titulo = document.querySelector(".titulo");
console.log(titulo);

let paragrafo = document.querySelector(".paragrafo");
console.log(paragrafo);

let button = document.querySelector(".button");
console.log(button);

//2

function alternarTexto(){
    titulo.innerText = "outro alguém";
    paragrafo.innerText = ".paragrafo";

}

function alterarCor(){
    let fundo = document.querySelector(".body")
    document.body.style.backgorundColor = "blue";
}