import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { PRIMENG_IMPORTS } from '../../primeng-imports'

import { SharedModule } from '../../shared/shared.module'

import { LancamentosRoutingModule } from './lancamentos-routing.module'

import { LancamentosTabelaComponent } from './components/lancamentos-tabela/lancamentos-tabela.component'
import { LancamentosFormComponent } from './lancamentos-form/lancamentos-form.component'
import { LancamentosComponent } from './lancamentos/lancamentos.component'



@NgModule({
  declarations: [
    LancamentosComponent,
    LancamentosFormComponent,
    LancamentosTabelaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    PRIMENG_IMPORTS,

    SharedModule,

    LancamentosRoutingModule,
  ],
  exports: [],
})
export class LancamentosModule { }
