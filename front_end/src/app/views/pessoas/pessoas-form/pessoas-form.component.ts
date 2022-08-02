import { Component } from '@angular/core'
import { NgForm } from "@angular/forms"

import { MessageService } from "primeng/api"

import { ErrorHandlerService } from "../../../core/error-handler.service"
import { PessoaService } from "../pessoa.service"

import { Pessoa } from "../../../core/model"

@Component({
  selector: 'app-pessoas-form',
  templateUrl: './pessoas-form.component.html',
})
export class PessoasFormComponent {

  pessoa: Pessoa = new Pessoa()

  constructor(
    private pessoaService: PessoaService,
    private errorHandlerService: ErrorHandlerService,
    private messageService: MessageService,
  ) { }

  salvar(pessoaForm: NgForm): void {
    this.pessoaService.adicionar(this.pessoa)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Pessoa adicionada com sucesso!' })
        pessoaForm.reset()
        this.pessoa = new Pessoa()
      })
      .catch(error => this.errorHandlerService.handle(error))
  }
}
