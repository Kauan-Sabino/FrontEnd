 const prompt = require (prompt-sync)();

let notas = []; //array de notas declaradas

function inserirNotas(){
    let nota = Number(prompt("Digite sua nota: "))
    notas.push(nota);
}
function calcularMedia(){
    let media = notas.reduce((media,nota) =>media + nota)/notas.length;
    console.log("A média é "+media)
}

function menu(){
    let continuar = true;
    while(continuar){
        console.log("==sistema de notas==");
        console.log("1. inserir notas");
        console.log("2.calcular média");
        console.log("3. sair");

        operador = prompt("Informe a opção: ");

        switch (operador) {
            case "1":
                inserirNotas();
                break;
            case "2":
                calcularMedia();
                break;
            case "3":
                continuar = false
                console.log("saindo")
            default:
                console.log("Informe uma opção valida")
                break;
        }
    }
}

menu();
