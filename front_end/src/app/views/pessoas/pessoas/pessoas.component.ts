import { Component, ViewChild } from '@angular/core'

import { Table } from "primeng/table"
import { ConfirmationService, MessageService } from "primeng/api"

import { ErrorHandlerService } from "../../../core/error-handler.service"
import { PessoaService, PessoasFilter } from "../pessoa.service"

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
})
export class PessoasComponent {

  pessoasFilter: PessoasFilter = new PessoasFilter()
  pessoas: any[] = []
  totalRegistros: number = 0

  @ViewChild('tabela') grid!: Table

  constructor(
    private confirmationService: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,

    private pessoaService: PessoaService,
  ) {}

  ngOnInit(): void {
  }

  pesquisar(pagina: number = 0): void {
    this.pessoasFilter.pagina = pagina
    this.pessoaService.pesquisar(this.pessoasFilter)
      .then((response: any) => {
        this.totalRegistros = response.total
        this.pessoas = response.pessoas
      })
      .catch(error => this.errorHandler.handle(error))
  }

  aoMudarPagina(event: any): void {
    const pagina = event!.first! / event!.rows!
    this.pesquisar(pagina)
  }

  confirmarExclusao(pessoa: any): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => this.excluir(pessoa)
    })
  }

  excluir(pessoa: any): void {
    this.pessoaService.excluir(pessoa.codigo)
      .then(() => {
        this.messageService.add({ severity: 'success' , detail: `Pessoa excluída com sucesso!` })
        this.pesquisar()
      })
      .catch(error => this.errorHandler.handle(error))
  }

  alterarStatus(pessoa: any): void {
    const novoStatus = !pessoa.ativo

    this.pessoaService.mudarStatus(pessoa.codigo, novoStatus)
      .then(() => {
        const acao = novoStatus ? 'ativada' : 'desativada'
        pessoa.ativo = novoStatus
        this.messageService.add({ severity: 'success', detail: `Pessoa ${acao} com sucesso!` })
      })
      .catch(erro => this.errorHandler.handle(erro))
  }
}
