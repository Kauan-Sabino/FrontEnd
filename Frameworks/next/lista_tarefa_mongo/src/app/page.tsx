//client-side 

"use client"

import Tarefa, { Itarefa } from "@/models/tarefa"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

export default function Home(){
  //useState => armazenamento localStorage
  //armaenar as tarefas de um vetor [armazenamento, editor de armazenamento]
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);

  //armazenamento de uma string para o input(titulo de tarefa)
  const [novaTarefa, setNovaTarefa] = useState<string>("");

  //useEffect = permite a execução de funções,sem o carregamento de tela
  useEffect(()=>{
    //carregar todas as tarefas de um banco de dados
    buscarTarefas();
  }, []);

  //criar as funções que serão executadas na tela
  const buscarTarefas = async () =>{
    try {
      //fetch => método GET é padrão não precisa declarar
      const resposta = await fetch("/api/tarefas"); //conecta
      //realiza a conexão http com o backend
      const data = await resposta.json() //converte em json
      if(data.sucess){
        setTarefas(data.data); //armazena as resposta no vetor
      }
    } catch (error) {
      console.error(error); 
    }
  }

  //adicionarTarefa
  const adicionarTarefa = async(e: FormEvent) =>{
    e.preventDefault();
    //verificar se o texto não está vazio
    if (!novaTarefa.trim()) return;//não permite adicionar tarefa vazia
    try {
      //função post
      const resultado = await fetch ("api/tarefas",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({titulo:novaTarefa})
      });
      const data = await resultado.json();
      if(data.sucess){// se o resultado for ok
        //adiciona tarefa na array
        setNovaTarefa("");
        //cliente-side - sem buscar no DB
        setTarefas([...tarefas,data.data]);
        //ser
        buscarTarefas();
      }
    } catch (error) {
      console.error(error)
    }
  }

  //atualizar tarefa
  const atualizarTarefa = async (id:string, status:boolean) =>{
    try {
      const resposta = await fetch(`/api/tarefas/${id}`,{
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({concluida: !status})
      });

     const data = await resposta.json();
     if(data.sucess){

      setTarefas(tarefas.map((tarefa)=>(tarefa._id ===id ? data.data : tarefa)));

      buscarTarefas();
     }
    } catch (error) {
      console.error(error);
    }
  }

  //deletar tarefas

  const deletarTarefa = async(id:string) =>{
    try {
      await fetch (`/api/tarefas/${id}`,{
        method:"DELETE"
      });
      buscarTarefas();
    } catch (error) {
      console.error(error);
    }
  }

  //interface do usuario ReactDom
  return(
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={adicionarTarefa}>
        <input type="text" 
        value={novaTarefa}
        onChange={(e:ChangeEvent<HTMLInputElement>)=>setNovaTarefa(e.target.value)}
        placeholder="Adicionar uma Nova Tarefa"/>
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <ul>
        {tarefas.map(tarefa =>(
          <li key={tarefa._id.toString()}>
            <input type="checkbox" 
            checked={tarefa.concluida}
            onChange={()=>atualizarTarefa(tarefa._id.toString(), tarefa.concluida)}/>
            {tarefa.titulo}
            <button onClick={()=>deletarTarefa(tarefa._id)}>deletar</button>
            </li>
        ))}
      </ul>
    </div>
  )
}