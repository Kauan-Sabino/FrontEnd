//indicar que é um componente do Cliente Side 

"use client";

import { useEffect, useState } from "react";

export default function Home(){
  const [tarefas, setTarefas] = useState([]); //manipulador da lista de tarefas
  const [newTarefa, setNewTarefa] = useState(""); // manipulador do input do formulario

  //use Effect
  useEffect(()=>{fetchTarefas();}, []);
  //UseEffect para preencher as de tarefas enquanto carrega a página

  //método pra pegar todas as tarefas do mongodb
  const fetchTarefas = async() =>{
    const resp = await fetch ("/api/todos");
    const data = await resp.json();
    setTarefas(data.data);
  }

  async function addTarefa() {
    const resp = await fetch("/api/todos",{
      method:"Post",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringfy({title: newTarefa})
    });
    const data = await resp.json();
    setTarefas([...tarefas, data.data]);
  }
}