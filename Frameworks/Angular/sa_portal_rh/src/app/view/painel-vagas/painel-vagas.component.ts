import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss']
})
export class PainelVagasComponent implements OnInit {
 public vaga:Vaga = new Vaga(0,"","","", 0) //rastrear dados do formulario por interpolação

  public vagas : Vaga[] =[];
  //armazenar os dados da API - json

  constructor(private _vagasService: VagasService){}

  ngOnInit(): void {
    this.listarVagas();
  }

listarVagas() {
    // Lista as vagas do servidor usando o serviço 'VagaService'
    this._vagasService.getVagas().subscribe((retornaVaga) => {
      this.vagas = retornaVaga.map((item) => {
        // Mapeia os dados retornados para objetos 'Vaga'
        return new Vaga(
          item.id,
          item.nome,
          item.foto,
          item.descricao,
          item.salario
        );
      });
    });
  }

  //listar unica vaga
  //cadastrar vaga
  //atualizar vagas
  //deletar vagas



}
