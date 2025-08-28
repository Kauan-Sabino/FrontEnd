import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { catchError, map, Observable, switchMap, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //atributos
  private apiUrl = 'http://localhost:3001/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';


  constructor(private router: Router,private http:HttpClient) { }

  //busca no banco se o email do cadastro já existe
  registrar(usuario:any):Observable<any>{
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap(usuarios =>{
        if(usuarios.length>0){//se existir
          //cria uma mensagem de erro pra ser tratado no try/catch
          return throwError(()=> new Error("usuario já cadastrdo" ));
        }else {//se não existir
          //cadastra no banco de dados
          return this.http.post<any>(this.apiUrl,usuario);
        }
      })
    )
  
  }

  login(credenciais:any):Observable<boolean>{//pega as credenciais do usuario
    //verifica no banco se o email e senha foram encontrados
    return this.http.get<any[]>(`${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
      map(usuarios => {
        if(usuarios.length>0){
          //armazena as informações do usuario e a chave no localStorage
          localStorage.setItem(this.CHAVE_AUTH,JSON.stringify(usuarios[0]));
          //retorna acesso permitido
          return true;
        }else{//se não foi encontrado
          //fazer um erro
          return false;//retorna que o usuario não foi permitido
        }
      })
    )
  }

  //desloga e leva para a pagina home
  logout(){
    localStorage.removeItem(this.CHAVE_AUTH);//remove a chave de autentificação
    this.router.navigate(['/home']);
  }
  //verificar se o usuario está logado
  estaAutenticado():boolean{
    //transformar uma variavel do tipo texto em boolean
    return !! localStorage.getItem(this.CHAVE_AUTH);  
  }

  getUsuarioAtual():any{
    //retorna as informações do usuario autenticado, que estão armazenadas no localStorage
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || "{}");
  }
}
