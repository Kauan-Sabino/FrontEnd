//script para jogo quiz interativo

let perguntas = [];
let perguntaAtual = 0;

const perguntaEL = document.getElementById("pergunta");
const opcoesEL = document.getElementById("opcoes");
const proximaEL = document.getElementById("proxima");
const resultadoEL = document.getElementById("resultado");

fetch("perg.json")
    .then(response => response.json())
    .then(data =>{
        perguntas = data;
        carregarPergunta();
    })
    .catch(error => console.log("Erro ao carregar perguntas: ", error));

function carregarPergunta(){
    perguntaEL.innerText="";
    opcoesEL.innerText="";
    proximaEL.disabled = true;

    if(perguntaAtual>=perguntas.length) {
        perguntaEL.innerText = "Quiz finalizado";
        opcoesEL.innerHTML = "";
        proximaEL.style.display = "none";
        return;
    }

    const p = perguntas[perguntaAtual];
    perguntaEL.innerText = p.pergunta;
    opcoesEL.innerHTML = "";

    p.opcoes.ForEach(opcao => {
        const btn = document.createElement("button");
        btn.innertext = opcao;
        btn.classList.add("opcao");
        btn.addEventListener("click", ()=>
        verificarResposta(opcao, btn));
        opcoesEL.appendChild(btn);
    });

    function verificarResposta(opcao, btn){
        const respostaCorreta = perguntas [perguntaAtual].reposta;
        if (opcao === respostaCorreta){
            btn.classList.add("correta");
            resultadoEL.innerText = "Correto!";
        } else{
            btn.classList.add("errada");
            resultadoEL.innerText = `Errado, A resposta correta era: ${respostaCorreta}`;
        }
    }

    document.querySelectorAll("opcao").ForEach(b => b.disabled =true);
    proximaEL.disabled = false;
}

document.getElementById("proxima").addEventListener(
    "click", () =>{
    perguntaAtual++;
    carregarPergunta();}
);