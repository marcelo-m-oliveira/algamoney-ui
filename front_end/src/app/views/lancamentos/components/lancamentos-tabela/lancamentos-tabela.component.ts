import { Component, EventEmitter, Input, Output } from '@angular/core'
import { LancamentoFilter } from "../../lancamento.service"
import { LazyLoadEvent } from "primeng/api"

@Component({
  selector: 'app-lancamentos-tabela',
  templateUrl: './lancamentos-tabela.component.html',
})
export class LancamentosTabelaComponent {

  @Input() lancamentos: any[] = []
  @Input() totalRegistros: number = 0
  @Input() lancamentoFilter: LancamentoFilter = new LancamentoFilter()

  @Output() onLazyLoad: EventEmitter<LazyLoadEvent> = new EventEmitter<LazyLoadEvent>();
  @Output() deletar: EventEmitter<any> = new EventEmitter<any>();

  cols = [
    { field: 'tipo', header: 'Tipo', sortField: 'tipo' },
    { field: 'descricao', header: 'Descrição', sortField: 'descricao' },
    { field: 'pessoa', header: 'Nome', sortField: 'pessoa' },
    { field: 'valor', header: 'Valor', sortField: 'valor', type: 'valor' },
    { field: 'dataVencimento', header: 'Data vencimento', sortField: 'dataVencimento', type: 'data' },
    { field: 'dataPagamento', header: 'Data pagamento', sortField: 'dataPagamento', type: 'data' },
    { header: 'Ações', text: false, type: 'buttons' },
  ]

  constructor() { }

  aoMudarPagina(event: LazyLoadEvent): void {
    this.onLazyLoad.emit(event)
  }

  excluir(lancamento: any): void {
    this.deletar.emit(lancamento)
  }
}
