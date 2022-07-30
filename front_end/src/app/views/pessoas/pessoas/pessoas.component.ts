import { Component } from '@angular/core'
import { PessoaService, PessoasFilter } from "../pessoa.service"

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
})
export class PessoasComponent {

  pessoasFilter: PessoasFilter = new PessoasFilter()
  pessoas: any[] = []
  totalRegistros: number = 0

  constructor(
    private pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
  }

  aoMudarPagina(event: any): void {
    const pagina = event!.first! / event!.rows!
    this.pesquisar(pagina)
  }

  pesquisar(pagina: number = 0): void {
    this.pessoasFilter.pagina = pagina
    this.pessoaService.pesquisar(this.pessoasFilter)
      .then((response: any) => {
        this.totalRegistros = response.total
        this.pessoas = response.pessoas
      })
  }
}
