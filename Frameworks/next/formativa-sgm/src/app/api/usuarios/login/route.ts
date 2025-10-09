// criar solicitação de login do usuario http -> backend
//jwt-> vai gerar o token de autenticação

import { autenticaUsuario } from "@/controllers/UsuarioController";
import { error } from "console";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

//verificar se o jwt esta inserido no enviroment (variáveis de ambiente)

const JWT_SECRET = process.env.JWT_KEY;

if (!JWT_SECRET){
    throw new Error("JET_KEY não está definida nas Variáveis de ambiente");
}

//começa com o método de Autenticação
export async function POST(req: NextRequest) {
    try{
        const {email,senha} = await req.json();
        //validar os Dados obtidos do HTML
        if(!email || !senha) {
            return NextResponse.json({
                success: false, error:"Email e senha são obrigatorios"
            });
        }
        
        const usuario = await autenticaUsuario(email, senha);

        if(!usuario){
            return NextResponse.json({
                success:false, error: "Email ou Senha inválido"
            });
        }

        const token = jwt.sign(
            {id:usuario._id, nome: usuario.nome, funcao: usuario.funcao},
            JWT_SECRET as string,
            {expiresIn:"1h"}
        );

        return NextResponse.json({
            success: true,
            token,
            usuario: {
                id: usuario.id,
                nome:usuario.nome,
                funcao: usuario.funcao
            }
        })
    }catch (error) {
        return NextResponse.json({success:false,error:error});
    }
}
