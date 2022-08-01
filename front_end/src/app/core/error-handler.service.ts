import { Injectable } from '@angular/core'

import { MessageService } from "primeng/api"

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private messageService: MessageService) { }

  handle(errorResponse: any) {
    let msg: string

    (typeof errorResponse === 'string') ? msg = errorResponse : msg = 'Erro ao processar o serviço remoto. Tente novamente'

    this.messageService.add({ severity: 'error', detail: msg })
    console.log(errorResponse)
  }

}
