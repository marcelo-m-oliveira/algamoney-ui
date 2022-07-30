import {Component, EventEmitter, Input, Output } from '@angular/core'
import { LancamentoFilter } from "../../lancamento.service"
import { LazyLoadEvent } from "primeng/api"

@Component({
  selector: 'app-lancamentos-tabela',
  templateUrl: './lancamentos-tabela.component.html',
  styles: [
  ]
})
export class LancamentosTabelaComponent {

  @Input() lancamentos: any[] = []
  @Input() totalRegistros: number = 0
  @Input() lancamentoFilter: LancamentoFilter = new LancamentoFilter()
  @Output() onLazyLoad: EventEmitter<LazyLoadEvent> = new EventEmitter<LazyLoadEvent>();

  constructor() { }

  aoMudarPagina(event: LazyLoadEvent): void {
    this.onLazyLoad.emit(event)
  }
}
