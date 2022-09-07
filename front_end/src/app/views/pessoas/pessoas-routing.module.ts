import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PessoasComponent } from './pessoas/pessoas.component'
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component'

import { SegurancaGuard } from '../seguranca/seguranca.guard'

const routes: Routes = [
  {
    path: '',
    component: PessoasComponent,
    canActivate: [SegurancaGuard],
    data: { roles: ['ROLE_PESQUISAR_PESSOA'] }
  },
  {
    path: 'nova',
    component: PessoasFormComponent,
    canActivate: [SegurancaGuard],
    data: { roles: ['ROLE_CADASTRAR_PESSOA'] }
  },
  {
    path: ':codigo',
    component: PessoasFormComponent,
    canActivate: [SegurancaGuard],
    data: { roles: ['ROLE_CADASTRAR_PESSOA'] }
  },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PessoasRoutingModule { }
