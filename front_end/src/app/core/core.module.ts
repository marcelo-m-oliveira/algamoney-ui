import { CommonModule, DatePipe, registerLocaleData } from '@angular/common'
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core'
import { Title } from "@angular/platform-browser"
import { HttpClient } from "@angular/common/http"
import ptBr from '@angular/common/locales/pt'
import { RouterModule } from "@angular/router"

import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core"
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { ToastModule } from "primeng/toast"
import { CardModule } from "primeng/card"

import { LancamentoService } from "../views/lancamentos/lancamento.service"
import { CategoriaService } from "../views/categorias/categoria.service"
import { PessoaService } from "../views/pessoas/pessoa.service"
import { ErrorHandlerService } from "./error-handler.service"

import { ConfirmDialogCustomComponent } from "./confirm-dialog-custom/confirm-dialog-custom.component"
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component'
import { NavbarComponent } from "./navbar/navbar.component"

registerLocaleData(ptBr, 'pt-BR')

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    NavbarComponent,
    ConfirmDialogCustomComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    ConfirmDialogModule,
    ToastModule,
    CardModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    NavbarComponent,
    ConfirmDialogCustomComponent,

    ConfirmDialogModule,
    ToastModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },

    TranslateService,
    DatePipe,

    ErrorHandlerService,
    LancamentoService,
    PessoaService,
    CategoriaService,

    Title,
  ],
})
export class CoreModule { }
