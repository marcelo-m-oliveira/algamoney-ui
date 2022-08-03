import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from "@angular/router"
import { NgForm } from "@angular/forms"

import { MessageService } from "primeng/api"

import { ErrorHandlerService } from "../../../core/error-handler.service"
import { CategoriaService } from "../../categorias/categoria.service"
import { PessoaService } from "../../pessoas/pessoa.service"
import { LancamentoService } from "../lancamento.service"

import { Lancamento } from "../../../core/model"

@Component({
  selector: 'app-lancamentos-form',
  templateUrl: './lancamentos-form.component.html',
})
export class LancamentosFormComponent implements OnInit {

  lancamento: Lancamento = new Lancamento()

  categorias: any[] = []
  pessoas: any[] = []
  tipos: any[] = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ]

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private messageService: MessageService,

    private lancamentoService: LancamentoService,
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,

    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['codigo'])
    this.carregarCategirias()
    this.carregarPessoas()
  }

  carregarCategirias() {
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

  salvar(lancamentoForm: NgForm): void {
    this.lancamentoService.adicionar(this.lancamento)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Lançamento adicionado com sucesso!' })
        lancamentoForm.reset()
        this.lancamento = new Lancamento()
      })
      .catch(error => this.errorHandlerService.handle(error))
  }
}
