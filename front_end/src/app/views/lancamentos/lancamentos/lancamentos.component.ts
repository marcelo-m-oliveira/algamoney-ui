import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import { LancamentoFilter, LancamentoService } from "../lancamento.service"
import {LazyLoadEvent} from "primeng/api";


@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
})
export class LancamentosComponent implements OnInit {

  lancamentoFilter: LancamentoFilter = new LancamentoFilter()
  lancamentos: any[] = []
  totalRegistros: number = 0
  @Output() onLazyLoad = new EventEmitter();

  constructor(
    private lancamentoService: LancamentoService
  ) {}

  ngOnInit(): void {
  }


  aoMudarPagina(event: any): void {
    const pagina = event.first / event.rows
    this.pesquisar(pagina)
    console.log(pagina)
  }

  pesquisar(pagina: number = 0): void {
    this.lancamentoFilter.pagina = pagina
    this.lancamentoService.pesquisar(this.lancamentoFilter)
      .then((response: any) => {
         this.totalRegistros = response.total
         this.lancamentos = response.lancamentos
      })
  }

}
