import { CommonModule } from '@angular/common'
import { FormsModule } from "@angular/forms"
import { NgModule } from '@angular/core'

import { PRIMENG_IMPORTS } from "../../primeng-imports"

import { SharedModule } from "../../shared/shared.module"

import { PessoasTabelaComponent } from "./components/pessoas-tabela/pessoas-tabela.component"
import { PessoasFormComponent } from "./pessoas-form/pessoas-form.component"
import { PessoasComponent } from "./pessoas/pessoas.component"



@NgModule({
  declarations: [
    PessoasComponent,
    PessoasFormComponent,
    PessoasTabelaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    PRIMENG_IMPORTS,

    SharedModule,
  ],
  exports: []
})
export class PessoasModule { }
