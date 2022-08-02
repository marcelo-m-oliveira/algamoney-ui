import { Component, OnInit } from '@angular/core'

import { ErrorHandlerService } from "../../../core/error-handler.service"
import { CategoriaService } from "../../categorias/categoria.service"

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
    private categoriaService: CategoriaService,
    private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit(): void {
    this.carregarCategirias()
  }

  carregarCategirias(): Object {
    return this.categoriaService.listarTodos()
      .then((categorias: any) => {
        this.categorias = categorias.map((c: any) => (
          { label: c.nome, value: c.codigo }
        ))
      })
      .catch(error => this.errorHandler.handle(error))
  }

}
