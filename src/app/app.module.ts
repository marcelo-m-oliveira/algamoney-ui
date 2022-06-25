import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { PRIMENG_IMPORTS } from './primeng-imports';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasComponent } from './pessoas/pessoas.component'

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PRIMENG_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }