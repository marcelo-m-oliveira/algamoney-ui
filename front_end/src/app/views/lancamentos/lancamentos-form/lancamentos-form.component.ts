import { Component, OnInit } from '@angular/core'
import {ActivatedRoute, Router} from "@angular/router"
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
    private router: Router,

  ) { }

  ngOnInit(): void {
    const codigoLancamento = this.route.snapshot.params['codigo']

    if (codigoLancamento) this.carregarLancamento(codigoLancamento)


    this.carregarCategirias()
    this.carregarPessoas()
  }

  get editando(): boolean {
    return Boolean(this.lancamento.codigo)
  }

  carregarLancamento(codigo: number): void {
    this.lancamentoService.buscarPorCodigo(codigo)
      .then((lancamento: Lancamento) =>{
        this.lancamento = lancamento
      })
      .catch(error => this.errorHandlerService.handle(error))
  }

  carregarCategirias(): any {
    return this.categoriaService.listarTodos()
      .then((categorias: any) => {
        this.categorias = categorias.map((c: any) => (
          { label: c.nome, value: c.codigo }
        ))
      })
      .catch(error => this.errorHandlerService.handle(error))
  }

  carregarPessoas(): any {
    return this.pessoaService.listarTodos()
      .then((pessoas: any) => {
        this.pessoas = pessoas.map((p: any) => (
          { label: p.nome, value: p.codigo }
        ))
      })
      .catch(error => this.errorHandlerService.handle(error))
  }

  salvar(form: NgForm): void {
    this.editando ? this.atualizarLancamento(form) : this.adicionarLancamento(form)
  }

  adicionarLancamento(form: NgForm): void {
    this.lancamentoService.adicionar(this.lancamento)
      .then((response: Lancamento) => {
        this.messageService.add({ severity: 'success', detail: 'Lançamento adicionado com sucesso!' })
        this.router.navigate(['/lancamentos', response.codigo])
      })
      .catch(error => this.errorHandlerService.handle(error))
  }

  atualizarLancamento(form: NgForm): void {
    this.lancamentoService.atualizar(this.lancamento)
      .then((lancamento: Lancamento) => {
        this.lancamento = lancamento

        this.messageService.add({ severity: 'success', detail: 'Lançamento atualizado com sucesso!' })
      })
      .catch(error => this.errorHandlerService.handle(error))
  }

  novo(form: NgForm): void {
    form.reset(new Lancamento())

    this.router.navigate(['/lancamentos/novo'])
  }
}
