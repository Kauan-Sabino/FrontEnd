function alterarTexto(){
    document.getElementById("titulo").innerText = "Texto alterado"
};

// getElementById - seleçãp dp elemento pelo ID
let titulo = document.getElementById("titulo");
titulo.style.color = "blue";

let paragrafos = document.getElementByIdementsByClassName("descrição");
paragrafos=[0].style.fontWeught = "bold";
paragrafos[1].syle.color = "green";

let todosParagrafos = document.getElementsByTagName("p");
console.log(todosParagrafos.length);

//query selector - primeiro
let primeiroDescricao = Document.querySelector(".descricao");
primeiroDescricao.style.color = "red";

//querySelectorAll
let ps = document.querySelectorAll("p");
ps.forEach(P => P.style.fontSize = "18px")