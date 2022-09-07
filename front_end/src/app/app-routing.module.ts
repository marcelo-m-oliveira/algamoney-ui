import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada/pagina-nao-encontrada.component'
import { NaoAutorizadoComponent } from './core/nao-autorizado/nao-autorizado.component'

const routes: Routes = [
  { path: 'lancamentos', loadChildren: () => import('../app/views/lancamentos/lancamentos.module').then(m => m.LancamentosModule) },
  { path: 'pessoas', loadChildren: () => import('../app/views/pessoas/pessoas.module').then(m => m.PessoasModule) },
  { path: '', redirectTo: 'lancamentos', pathMatch: 'full' },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }