import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import {LancamentosComponent} from "./lancamentos/lancamentos.component"
import {LancamentosFormComponent} from "./lancamentos-form/lancamentos-form.component"

const routes: Routes = [
  { path: 'lancamentos', component: LancamentosComponent },
  { path: 'lancamentos/novo', component: LancamentosFormComponent },
  { path: 'lancamentos/:codigo', component: LancamentosFormComponent },

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LancamentosRoutingModule { }
