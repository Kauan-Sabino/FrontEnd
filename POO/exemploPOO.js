let produto = {
    nome: "notebook",
    preco: 3000,
    desconto: () => {return this.preco*0.1}
} //coleção (chave/valor)

//POO
class Produto{
    //atributos

    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
    desconto(){
        return this.preco*0.1;
    }
}

let p1 = new Produto("Celular",2000);
let p2 = new Produto("Mouse Gamer", 200);
console.log(p1.nome, " desconto: ", p1.desconto());
console.log(p2.nome, " desconto: ", p2.desconto());

//exemplo encapsulamento
class Usuarios{
    //atributos
    #nome;
    #id;
    #senha;
    constructor(nome,senha,id){
        this.#id = id;
        this.#nome = nome;
        this.#senha = senha;
    }
    //método get
    getNome(){
        return this.#nome;
    }
}

let user = new Usuario("João","12345","a01");
console.log(user.nome);//chamar pelo atributo = erro
console.log(user.getNome());

//herança

class Pessoa{
    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
    }
    exibirInfo(){
        console.log("Nome: ", this.nome, ", CPF: ", this.cpf);
    }
}

class Aluno extends Pessoa{
    constructor(nome, cpf, matricula){
        super(nome, cpf);
        this.matricula = matricula;
    }  
}

let aluno1 = new Aluno("maria", 23435, "RM1234");
aluno1.exibirInfo();