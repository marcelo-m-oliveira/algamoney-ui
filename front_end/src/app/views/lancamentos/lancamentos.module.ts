import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from "@angular/forms"

import { PRIMENG_IMPORTS } from "../../primeng-imports"

import { SharedModule } from "../../shared/shared.module"

import { LancamentosTabelaComponent } from "./components/lancamentos-tabela/lancamentos-tabela.component"
import { LancamentosFormComponent } from "./lancamentos-form/lancamentos-form.component"
import { LancamentosComponent } from "./lancamentos/lancamentos.component"



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
  exports: [],
})
export class LancamentosModule { }
