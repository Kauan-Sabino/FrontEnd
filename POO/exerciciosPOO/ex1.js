class Produto{
//atributos
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
//métodos
    vender(quantidade){
        if(quantidade>this.estoque){
            console.log("Quantidade solicitada maior que Quantidade em estoque") 
            return
        }
        this.estoque -= quantidade;
        console.log("venda foi um sucesso");
    }

    repor(){
        this.estoque += quantidade;
        console.log("quantidade no estoque é ", this.estoque)
    }

    exibirInfo(){
       console.log(this.nome," preço: ",this.preco,", quantidade em estoque: ",this.estoque);
    }

}

let quantidade = 10;
let p1 = new Produto("Caixa de GoodGood", 16, 50 );
p1.vender(51);
p1.vender(18);
p1.repor(18);
p1.exibirInfo();
