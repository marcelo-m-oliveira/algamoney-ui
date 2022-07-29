import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from "@angular/forms"

import { registerLocaleData } from '@angular/common'
import ptBr from '@angular/common/locales/pt'

import { SharedModule } from "../../shared/shared.module"

import { PRIMENG_IMPORTS } from "../../primeng-imports"
import { LancamentosTabelaComponent } from "./components/lancamentos-tabela/lancamentos-tabela.component"
import { LancamentosFormComponent } from "./lancamentos-form/lancamentos-form.component"
import { LancamentosComponent } from "./lancamentos/lancamentos.component"

registerLocaleData(ptBr, 'pt-BR')


@NgModule({
  declarations: [
    LancamentosComponent,
    LancamentosFormComponent,
    LancamentosTabelaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    PRIMENG_IMPORTS,

    SharedModule,

  ],
  exports: [
    LancamentosComponent,
    LancamentosFormComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
})
export class LancamentosModule { }
