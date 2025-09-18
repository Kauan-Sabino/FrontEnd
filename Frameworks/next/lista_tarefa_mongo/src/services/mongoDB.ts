import mongoose from "mongoose";

//converte string em URL
const MongoUri = process.env.DATABASE_URL;

//verifica se o .env.local esta declarado
if(!MongoUri){ //verifica a nulidade de uma variavel
    throw new Error("Defina o DATABASE_URL no env.local")
}

//criar uma variavel para armazenar o cache do sistema 

let cached = (global as any).mongoose; // vai armazenar previamente do global do node, caso já exista uma conexão do mongodb

//caso não exista nenhuma conexão previamente estabelecida
if(!cached){
    cached = (global as any).mongoose = {conectada:null,promessa:null};
}

async function connectMongo() {
    //verifica se conexão já existe, se ja existe retorna a propria conexão
    if (cached.conectada) return cached.conectada;

    //verificar se existe uma promessa de conexão 
    if(!cached.promessa) {
        const aguarde = {bufferCommands: false};//desativa o buffer do mongoose caso ocorra perca de conexão

        //criar uma promessa de conexão
        cached.promessa = mongoose.connect(MongoUri!, aguarde)
            .then((mongoose) =>{
                console.log("Conexão estabelecida");
                return mongoose;
            });
    }

    try {
        //cria conexão a partir e promessa que estava pendente
        cached.conectada = await cached.promessa;
    }catch (error) {

        //caso ocorra algum erro
        cached.promessa = null; // limpo a promessa de conexão
        throw error;
    }

    return cached.conectada;
}

//transforma em um componente reutilizavel
export default connectMongo;

//1. criar endereço de conexão
//2. criar o cached, para armazenar a o longo do projeto
//3. verificar se existe uma conexão estabelecida, caso não exista
//4 criar uma promessa de conexão, caso não exista
// transformar uma promessa em uma conexão estabelecida