import { CommonModule, DatePipe, registerLocaleData } from '@angular/common'
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core'
import ptBr from '@angular/common/locales/pt'

import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { ToastModule } from "primeng/toast"
import { CardModule } from "primeng/card"

import { LancamentoService } from "../views/lancamentos/lancamento.service"
import { PessoaService } from "../views/pessoas/pessoa.service"
import { ErrorHandlerService } from "./error-handler.service"

import { ConfirmDialogCustomComponent } from "./confirm-dialog-custom/confirm-dialog-custom.component"
import { NavbarComponent } from "./navbar/navbar.component"

registerLocaleData(ptBr, 'pt-BR')

@NgModule({
  declarations: [
    NavbarComponent,
    ConfirmDialogCustomComponent,
  ],
  imports: [
    CommonModule,

    ConfirmDialogModule,
    CardModule,
    ToastModule,
  ],
  exports: [
    NavbarComponent,
    ConfirmDialogCustomComponent,

    ConfirmDialogModule,
    CardModule,
    ToastModule,
  ],
  providers: [
    DatePipe,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    ErrorHandlerService,
    LancamentoService,
    PessoaService
  ],
})
export class CoreModule { }
