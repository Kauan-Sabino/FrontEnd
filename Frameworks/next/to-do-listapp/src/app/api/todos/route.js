import connectMongo from '@/services/mongodb';
import Todo from "@/models?Todo";
import { NextResponse } from 'next/server';

export async function GET(){
    try{
        awaitMongo();
        const tarefas = await Todo.find({});
        return NextResponse.json({success:true, data:tarefas})
    }catch (err){
        return NextResponse.json({success:false,data:err})// como tratar erro

    }
}

export async function POST(req){
    try{
        await connectMongo();
        const tarefa = await Todo.create(data);
        const data = await req.json();
        return NextResponse.json({success:true, data: tarefa});
    }catch (error) {
        return NextResponse.json({success:false}, {status:500});

    }
}