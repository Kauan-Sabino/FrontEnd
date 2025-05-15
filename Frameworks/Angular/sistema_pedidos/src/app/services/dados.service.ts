import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model'
import { Produto } from '../models/produto.model'
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private baseUrl = "http://localhost:3000"; //endereço da API
  
  constructor(private http: HttpClient) { }

  //métodos de conexão com o backend

  //Clientes
  //get
  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.baseUrl}/clientes`);
    //me retorna uma lista de clientes
  }

  //post
  adicionarClientes(Cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.baseUrl}/clientes`,Cliente)
  }

  //Produtos
  //get
  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.baseUrl}/produtos`)

  }

  //post
  adicionarProdutos(Produto:Produto): Observable<Produto>{
    return this.http.post<Produto>(`${this.baseUrl}/produtos`,Produto)
  }

  //Pedidos
  //get
  getPedidos(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.baseUrl}/pedidos`)

  }

  //post
  postarPedidos(Pedido:Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(`${this.baseUrl}/pedidos`,Pedido)
  }


}
