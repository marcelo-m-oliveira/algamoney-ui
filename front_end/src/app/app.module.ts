import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"

import { AppRoutingModule } from "./app-routing.module"
import { CoreModule } from "./core/core.module"

import { LancamentosModule } from "./views/lancamentos/lancamentos.module"
import { SegurancaModule } from "./views/seguranca/seguranca.module"
import { PessoasModule } from "./views/pessoas/pessoas.module"

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    CoreModule,

    SegurancaModule,
    LancamentosModule,
    PessoasModule,

    AppRoutingModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }