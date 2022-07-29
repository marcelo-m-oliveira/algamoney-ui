import { Component, OnInit } from '@angular/core'
import { LancamentoService } from "../lancamento.service"

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
})
export class LancamentosComponent implements OnInit {

  constructor(
    private lancamentoService: LancamentoService
  ) {}

  lancamentos = []

  ngOnInit(): void {
    this.visualizar()
  }

  visualizar() {
    this.lancamentoService.visualizar().then(lancamentos => this.lancamentos = lancamentos)
  }
}
