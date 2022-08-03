import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { PessoasComponent } from "./pessoas/pessoas.component"
import { PessoasFormComponent } from "./pessoas-form/pessoas-form.component"

const routes: Routes = [
  { path: 'pessoas', component: PessoasComponent },
  { path: 'pessoas/nova', component: PessoasFormComponent },
  { path: 'pessoas/:codigo', component: PessoasFormComponent },

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PessoasRoutingModule { }
