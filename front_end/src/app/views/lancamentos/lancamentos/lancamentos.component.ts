import { Component, OnInit, ViewChild } from '@angular/core'

import { Table } from 'primeng/table'
import { ConfirmationService, MessageService } from "primeng/api"

import { LancamentoFilter, LancamentoService } from '../lancamento.service'
import { ErrorHandlerService } from "../../../core/error-handler.service"

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
})
export class LancamentosComponent implements OnInit {

  lancamentoFilter: LancamentoFilter = new LancamentoFilter()
  lancamentos: any[] = []
  totalRegistros: number = 0

  @ViewChild('tabela') grid!: Table

  constructor(
    private messageService: MessageService,
    private lancamentoService: LancamentoService,
    private confirmationService: ConfirmationService,
    private errorHandler: ErrorHandlerService,
  ) {}

  ngOnInit(): void {
  }

  pesquisar(pagina: number = 0): void {
    this.lancamentoFilter.pagina = pagina
    this.lancamentoService.pesquisar(this.lancamentoFilter)
      .then((response: any) => {
        this.totalRegistros = response.total
        this.lancamentos = response.lancamentos
      })
      .catch(error => this.errorHandler.handle(error))
  }

  aoMudarPagina(event: any): void {
    const pagina = event!.first! / event!.rows!
    this.pesquisar(pagina)
  }

  confirmarExclusao(lancamento: any): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => this.excluir(lancamento)
    })
  }

  excluir(lancamento: any): void {
    this.lancamentoService.excluir(lancamento.codigo)
      .then(() => {
        this.messageService.add({ severity: 'success' , detail: 'Lançamento excluído com sucesso!' })
        this.pesquisar()
      })
      .catch(error => this.errorHandler.handle(error))
  }
}
