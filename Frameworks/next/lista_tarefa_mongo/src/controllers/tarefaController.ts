//CRUD

import Tarefa, { Itarefa } from "@/models/tarefa";
import connectMongo from "@/services/mongoDB";

//Read -> pegar tarefas do banco e retornar em uma tarefa em uma lista 
export const readAllTarefas = async (): Promise<Itarefa[]> =>{
    await connectMongo();
    const tarefas = await Tarefa.find({});
    return tarefas;
}

//Create
export async function createTarefa(data: Partial<Itarefa>): Promise<Itarefa> {
    await connectMongo();
    const tarefa = await Tarefa.create(data);
    return tarefa;
}

//update
export async function updateTarefa(id:string, data: Partial<Itarefa>):Promise<Itarefa | null> {
    await connectMongo();
    const tarefa = await Tarefa.findByIdAndUpdate(id,data);
    return tarefa;
}

//DELETE

export async function deleteTarefa(id:string): Promise<boolean>{
    await connectMongo();
    const resultado = await Tarefa.deleteOne({_id:id});
    return resultado.deletedCount>0;//se for >0 retorna true,se for =< 0 retorna false 
    
}