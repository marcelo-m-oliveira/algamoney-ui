import { Component, EventEmitter, Input, Output } from '@angular/core'

import { LazyLoadEvent } from "primeng/api"


import { SegurancaService } from "../../../seguranca.service"
import { PessoasFilter } from "../../pessoa.service"

@Component({
  selector: 'app-pessoas-tabela',
  templateUrl: './pessoas-tabela.component.html',
})
export class PessoasTabelaComponent {

  @Input() pessoas: any[] = []
  @Input() totalRegistros: number = 0
  @Input() pessoasFilter: PessoasFilter = new PessoasFilter()
  @Output() onLazyLoad: EventEmitter<LazyLoadEvent> = new EventEmitter<LazyLoadEvent>()
  @Output() deletar: EventEmitter<any> = new EventEmitter<any>()
  @Output() status: EventEmitter<any> = new EventEmitter<any>()

  cols = [
    { field: 'nome', header: 'Nome', sortField: 'nome' },
    { field: 'endereco', header: 'Cidade', sortField: 'endereco', type: 'cidade' },
    { field: 'endereco', header: 'Estado', sortField: 'endereco', type: 'estado' },
    { field: 'ativo', header: 'Status', sortField: 'ativo', type: 'status' },
    { header: 'Ações', text: false, type: 'buttons' },
  ]

  constructor(
    private segurancaService: SegurancaService
  ) { }

  aoMudarPagina(event: LazyLoadEvent): void {
    this.onLazyLoad.emit(event)
  }

  excluir(pessoa: any): void {
    this.deletar.emit(pessoa)
  }

  alterarStatus(pessoa: any): void {
    this.status.emit(pessoa)
  }

  naoTemPermissao(permissao: string): boolean {
    return !this.segurancaService.temPermissao(permissao)
  }
}
