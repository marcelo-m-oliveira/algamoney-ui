import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LancamentosComponent } from './lancamentos/lancamentos.component'
import { LancamentosFormComponent } from './lancamentos-form/lancamentos-form.component'

import { SegurancaGuard } from '../seguranca/seguranca.guard'

const routes: Routes = [
  {
    path: '',
    component: LancamentosComponent,
    canActivate: [SegurancaGuard],
    data: { roles: ['ROLE_PESQUISAR_LANCAMENTO'] }
  },
  {
    path: 'novo',
    component: LancamentosFormComponent,
    canActivate: [SegurancaGuard],
    data: { roles: ['ROLE_CADASTRAR_LANCAMENTO'] }
  },
  {
    path: ':codigo',
    component: LancamentosFormComponent,
    canActivate: [SegurancaGuard],
    data: { roles: ['ROLE_CADASTRAR_LANCAMENTO'] }
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LancamentosRoutingModule { }
