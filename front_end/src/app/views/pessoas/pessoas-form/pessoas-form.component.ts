import { ActivatedRoute, Router } from "@angular/router"
import { Title } from "@angular/platform-browser"
import { Component, OnInit } from '@angular/core'
import { NgForm } from "@angular/forms"

import { MessageService } from "primeng/api"

import { ErrorHandlerService } from "../../../core/error-handler.service"
import { PessoaService } from "../pessoa.service"

import { Pessoa } from "../../../core/model"

@Component({
  selector: 'app-pessoas-form',
  templateUrl: './pessoas-form.component.html',
})
export class PessoasFormComponent  implements OnInit {

  pessoa: Pessoa = new Pessoa()

  constructor(
    private pessoaService: PessoaService,
    private errorHandlerService: ErrorHandlerService,
    private messageService: MessageService,

    private route: ActivatedRoute,
    private router: Router,

    private title: Title,

  ) { }

  ngOnInit(): void {
    this.title.setTitle('Novo lançamento')
    const codigoPessoa = this.route.snapshot.params['codigo']

    if (codigoPessoa) this.carregarPessoa(codigoPessoa)
  }

  get editando(): boolean {
    return Boolean(this.pessoa.codigo)
  }

  carregarPessoa(codigo: number): void {
    this.pessoaService.buscarPorCodigo(codigo)
      .then((pessoa: Pessoa) => {
        this.pessoa = pessoa
        this.atualizarTituloEdicao()
      })
      .catch(error => this.errorHandlerService.handle(error))

  }

  salvar(form: NgForm): void {
    this.editando ? this.atualizarPessoa(form) : this.adicionarPessoa(form)
  }

  adicionarPessoa(form: NgForm): void {
    this.pessoaService.adicionar(this.pessoa)
      .then((response: Pessoa) => {
        this.messageService.add({ severity: 'success', detail: 'Pessoa adicionada com sucesso!' })
        this.router.navigate(['/pessoas', response.codigo])
      })
      .catch(error => this.errorHandlerService.handle(error))
  }

  atualizarPessoa(form: NgForm): void {
    this.pessoaService.atualizar(this.pessoa)
      .then((pessoa: Pessoa) => {
        this.pessoa = pessoa
        this.atualizarTituloEdicao()
        this.messageService.add({ severity: 'success', detail: 'Pessoa atualizado com sucesso!' })
      })
      .catch(error => this.errorHandlerService.handle(error))
  }

  novo(form: NgForm): void {
    form.reset(new Pessoa())

    this.router.navigate(['/pessoas/nova'])
  }

  private atualizarTituloEdicao(): void {
    this.title.setTitle(`Edição de pessoa: ${this.pessoa.nome}`)
  }


}
