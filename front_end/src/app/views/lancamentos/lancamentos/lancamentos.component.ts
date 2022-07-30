import { Component, OnInit } from '@angular/core'
import { LancamentoFilter, LancamentoService } from "../lancamento.service"

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
})
export class LancamentosComponent implements OnInit {

  lancamentoFilter: LancamentoFilter = new LancamentoFilter()
  lancamentos: any[] = []
  totalRegistros: number = 0

  constructor(
    private lancamentoService: LancamentoService
  ) {}

  ngOnInit(): void {
  }


  aoMudarPagina(event: any): void {
    const pagina = event!.first! / event!.rows!
    this.pesquisar(pagina)
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
