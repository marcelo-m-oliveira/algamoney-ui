import { Component, EventEmitter, Input, Output } from '@angular/core'
import { LazyLoadEvent } from "primeng/api"
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

  constructor() { }

  aoMudarPagina(event: LazyLoadEvent): void {
    this.onLazyLoad.emit(event)
  }
}
