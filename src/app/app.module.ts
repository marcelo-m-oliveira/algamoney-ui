import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core'
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { AppComponent } from './app.component'
import { PRIMENG_IMPORTS } from './primeng-imports';
import { LancamentosComponent } from './views/lancamentos/lancamentos/lancamentos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasComponent } from './views/pessoas/pessoas/pessoas.component'
import { LancamentosFormComponent } from './views/lancamentos/lancamentos-form/lancamentos-form.component';
import { PessoasFormComponent } from './views/pessoas/pessoas-form/pessoas-form.component';
import { FormsModule } from "@angular/forms";
import { MessageComponent } from './message/message.component';
import { LancamentosGridComponent } from './components/lancamentos-grid/lancamentos-grid.component';
import { PessoasGridComponent } from './components/pessoas-grid/pessoas-grid.component';

registerLocaleData(ptBr, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    LancamentosComponent,
    NavbarComponent,
    PessoasComponent,
    LancamentosFormComponent,
    PessoasFormComponent,
    MessageComponent,
    LancamentosGridComponent,
    PessoasGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PRIMENG_IMPORTS,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }