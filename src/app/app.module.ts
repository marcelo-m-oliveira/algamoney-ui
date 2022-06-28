import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { PRIMENG_IMPORTS } from './primeng-imports';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasComponent } from './pessoas/pessoas.component'
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { LancamentosFormComponent } from './lancamentos-form/lancamentos-form.component';

registerLocaleData(ptBr, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasComponent,
    LancamentosFormComponent
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