//rotas que não precisam de ID ( GET / POST )

import { createTarefa, readAllTarefas } from "@/controllers/tarefaController";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const tarefas = await readAllTarefas();
        //tratar resposta obtida pelo MongoDB
        return NextResponse.json({ sucess:true, data:tarefas});
    }catch (error) {
        return NextResponse.json({sucess:false,error:error})
    }
}

export async function POST(req:NextResponse) {// req=dados enviados
    try {
        const data = await req.json();
        const newTarefa = await createTarefa(data);
        return NextResponse.json({sucess:true, data:newTarefa})

    }catch (error){
        return NextResponse.json({sucess:false,error:error})
    }
}