import { Component, OnInit } from '@angular/core'

import { ErrorHandlerService } from "../../../core/error-handler.service"
import { CategoriaService } from "../../categorias/categoria.service"
import { PessoaService } from "../../pessoas/pessoa.service"

@Component({
  selector: 'app-lancamentos-form',
  templateUrl: './lancamentos-form.component.html',
})
export class LancamentosFormComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'TP1' },
    { label: 'Despesa', value: 'TP2' }
  ]

  categorias = []
  pessoas = []

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
  ) { }

  ngOnInit(): void {
    this.carregarCategirias()
    this.carregarPessoas()
  }

  carregarCategirias(): Object {
    return this.categoriaService.listarTodos()
      .then((categorias: any) => {
        this.categorias = categorias.map((c: any) => (
          { label: c.nome, value: c.codigo }
        ))
      })
      .catch(error => this.errorHandlerService.handle(error))
  }

  carregarPessoas() {
    return this.pessoaService.listarTodos()
      .then((pessoas: any) => {
        this.pessoas = pessoas.map((p: any) => (
          { label: p.nome, value: p.codigo }
        ))
      })
      .catch(error => this.errorHandlerService.handle(error))
  }
}
