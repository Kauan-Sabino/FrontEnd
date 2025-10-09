"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardTecnico from "../componentes/dashboards/DashBoardTecnico";

 //tela de UI

export default function DashboardPage(){
    const route = useRouter();
    const [funcao, setFuncao] = useState<string |null>(null);

    useEffect(()=>{
        const funcao = localStorage.getItem("funcao");
        if(!funcao){
            route.push("/login");
        } else{
            setFuncao(funcao);
        }
    });

    const handleLogout = async()=>{
        localStorage.removeItem ("token");
        localStorage.removeItem ("funcao");
        route.push("/login");
    };

    const renderDashboard = () => {
        if (funcao?.toLowerCase() === "admin"){
            return<DashboardAdmin/>;
        }else if(funcao === "gerente"){
            return <DashboardGerente/>;
        }else if(funcao === "tecnico"){
            return<DashboardTecnico/>;
        }
    }

    return(
        <div>
            <header>
                <h1>Bem-Vindo</h1>
                <button onClick={handleLogout}>Loguot</button>
            </header>
            <main>
                {renderDashboard()}
            </main>
        </div>
    );
}
