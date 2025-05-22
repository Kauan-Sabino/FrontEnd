import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {
  //atributos
  private apiUrl = "http://localhost:3009/vagas"; //caminho da url

  constructor(private http:HttpClient) { }

  //métodos de conexão API


  //get = read
  getVagas(): Observable<Vaga[]>{//responsavel por traduzir as informações da API
    return this.http.get<Vaga[]>(this.apiUrl)
  }

  //post = create
  cadastrarVaga(vaga:Vaga): Observable<Vaga[]>{
    return this.http.post<Vaga[]>(this.apiUrl,vaga);
  }

  //put = update
  atualizarVaga(id: any,vaga:Vaga): Observable<Vaga[]>{
    const urlAtualizado = `${this.apiUrl}/${id}`;
    return this.http.put<Vaga[]>(urlAtualizado,vaga);
  }

  //delete= delete
    removerVaga(id:any): Observable<Vaga[]>{
      const urlDeletar = `${this.apiUrl}/${id}`;
      return this.http.delete<Vaga[]>(urlDeletar);
    }
}
