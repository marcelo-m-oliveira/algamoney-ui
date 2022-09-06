import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { MessageService } from 'primeng/api'

import { NotAuthenticatedError } from '../views/seguranca/money-http-interceptor'

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private messageService: MessageService,
    private router: Router
  ) {
  }

  handle(errorResponse: any): void {
    let msg: string

    console.log('Status error: ', errorResponse.status)

    if (typeof errorResponse === 'string') {
      msg = errorResponse

    } else if (errorResponse instanceof NotAuthenticatedError) {
      console.log('Erro refresh')

      msg = 'Sua sessão expirou!'
      this.router.navigate(['/login'])

    } else if (errorResponse instanceof HttpErrorResponse && errorResponse.status >= 400
      && errorResponse.status <= 499) {
      msg = 'Ocorreu um erro ao processar a sua solicitação'

      if (errorResponse.status === 403) {
        msg = 'Você não tem permissão para executar esta ação!'
      }

      try {
        msg = errorResponse.error[0].mensagemUsuario
      } catch (e) {
      }

      console.error('Ocorreu um erro', errorResponse)
    } else {
      msg = 'Erro ao processar o serviço da API. Tente novamente'
      console.error('Ocorreu um erro', errorResponse)
    }

    errorResponse.status === 403 || errorResponse.status === undefined ? this.messageService.add({ severity: 'warn', detail: msg }) : this.messageService.add({severity: 'error', detail: msg})

  }
}

