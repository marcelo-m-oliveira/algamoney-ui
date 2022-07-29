import { Component, OnInit } from '@angular/core'
import {LancamentoFilter, LancamentoService} from "../lancamento.service"

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
})
export class LancamentosComponent implements OnInit {


  constructor(
    private lancamentoService: LancamentoService
  ) {}

  descricao?: string
  dataVencimentoDe?: Date
  dataVencimentoAte?: Date
  lancamentos = []

  ngOnInit(): void {
    this.visualizar()
  }

  visualizar() {
    const filtro: LancamentoFilter = {
      descricao: this.descricao,
      dataVencimentoDe: this.dataVencimentoDe,
      dataVencimentoAte: this.dataVencimentoAte
    }
    this.lancamentoService.visualizar(filtro)
      .then(lancamentos => this.lancamentos = lancamentos)
  }
}
