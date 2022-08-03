import { CommonModule, DatePipe, registerLocaleData } from '@angular/common'
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core'
import { RouterModule, Routes } from "@angular/router"
import { HttpClient } from "@angular/common/http"
import ptBr from '@angular/common/locales/pt'

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

import { LancamentosComponent } from "../views/lancamentos/lancamentos/lancamentos.component"
import { LancamentosFormComponent } from "../views/lancamentos/lancamentos-form/lancamentos-form.component"
import { PessoasComponent } from "../views/pessoas/pessoas/pessoas.component"
import { PessoasFormComponent } from "../views/pessoas/pessoas-form/pessoas-form.component"

registerLocaleData(ptBr, 'pt-BR')

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http)
}

const routes: Routes = [
  { path: '', redirectTo: 'lancamentos', pathMatch: 'full' },
  { path: 'lancamentos', component: LancamentosComponent },
  { path: 'lancamentos/novo', component: LancamentosFormComponent },
  { path: 'lancamentos/:codigo', component: LancamentosFormComponent },

  { path: 'pessoas', component: PessoasComponent },
  { path: 'pessoas/nova', component: PessoasFormComponent },
  { path: 'pessoas/:codigo', component: PessoasFormComponent },

  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' },

]

@NgModule({
  declarations: [
    NavbarComponent,
    ConfirmDialogCustomComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

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
    RouterModule,

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
  ],
})
export class CoreModule { }
