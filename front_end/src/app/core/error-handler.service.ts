import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { MessageService } from "primeng/api"

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private messageService: MessageService) { }

  handle(errorResponse: any): void {
    let msg: string

    if (typeof errorResponse === 'string') {
      msg = errorResponse
    } else if (errorResponse instanceof HttpErrorResponse && errorResponse.status >= 400
      && errorResponse.status <= 499) {
      msg = 'Ocorreu um erro ao processar a sua solicitação'

      if(errorResponse.status === 403) {
        msg = 'Você não tem permissão para executar esta ação!'
      }

      try {
        msg = errorResponse.error[0].mensagemUsuario
      } catch (e) { }

      console.error('Ocorreu um erro', errorResponse)
    } else {
      msg = 'Erro ao processar o serviço da API. Tente novamente'
      console.error('Ocorreu um erro', errorResponse)
    }

    errorResponse.status === 403 ? this.messageService.add({ severity: 'warn', detail: msg }) : this.messageService.add({ severity: 'error', detail: msg })

  }
}

