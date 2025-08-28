import { useState } from "react";
import ToDoForm from "./componentes/ToDoForm";
import ToDoList from "./componentes/ToDoList";


const App =() =>{
  // Lógica do componente
  const [tarefas,setTarefa] = useState([]);
  //estado para armaenamento da lista de tarefas

  const addTarefa = (tarefa) =>{
    setTarefa([...tarefas,tarefa]);
    //adicionar nova tarefa ao Array de tarefas, ... copia todas as tarefas
    //que já estão adicionadas anteriormente
  };

  const removerTarefa=(index)=>{
    setTarefa(tarefas.filter((_,i)=> i !== index))
    //cria um novo vetor sem a terefa que quero remover
    //filtro o array, removendo a posição do index
  };

  //view do componentes
  return(
    <div>
      <h1>To-Do-List App</h1>
      <ToDoForm addTarefa={addTarefa}/>
      <ToDoList tarefas={tarefas} removerTarefa={removerTarefa}/>
    </div>
  );
};

export default App;