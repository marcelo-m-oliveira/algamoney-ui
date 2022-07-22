import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { PRIMENG_IMPORTS } from './primeng-imports';
import { LancamentosPesquisaComponent } from './views/lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasComponent } from './views/pessoas/pessoas/pessoas.component'
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { LancamentosFormComponent } from './views/lancamentos/lancamentos-form/lancamentos-form.component';
import { PessoasFormComponent } from './views/pessoas/pessoas-form/pessoas-form.component';

registerLocaleData(ptBr, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasComponent,
    LancamentosFormComponent,
    PessoasFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PRIMENG_IMPORTS
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }