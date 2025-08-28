//componente para criar formulario para inserir uma nova trefa

import "./ToDoForm.css"

import { useState } from "react"

//função para adicionar tarefa
const ToDoForm = ({addTarefa}) => {
    //função para armazenar o valor do input -> UseState
    const [tarefa, setTarefa] = useState("");
    //definir o useState => usa a memoria local do navegador
    //para armazenar as mudanças de estado
    //[]primeiro campo armazena as tarefas
    //segundo campo armazena as mudanças de estado

    //função pra atualizar o valor do input
    //função para criar nova tarefa a ser clicado no botão submit
    const handleSubmit = (e) => {
        //impedi o  funcionamento padrão do botão submit
        e.preventDefault();//não permite o recarregamento da página
        //verifica se o campo não está vazio
        if(tarefa.trim() !== ""){
            //adiciona a tarefa ao verto de tarefas
            addTarefa(tarefa);
            //limpa o campo do input
            setTarefa("");
        }

    };

    //view
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Inserir Nova Tarefa"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}/>
            <button className="btnEnviar " type="submit">adicionar </button>
        </form>
    );
};

export default ToDoForm;