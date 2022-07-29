import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"

import {CardModule} from "primeng/card";

import { CoreModule } from "./core/core.module"

import { LancamentoService } from "./views/lancamentos/lancamento.service"

import { LancamentosModule } from "./views/lancamentos/lancamentos.module"
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

    CardModule,

    CoreModule,

    LancamentosModule,
    PessoasModule,

  ],
  providers: [LancamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }