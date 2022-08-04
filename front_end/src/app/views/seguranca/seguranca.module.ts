import { CommonModule } from '@angular/common'
import { FormsModule } from "@angular/forms"
import { NgModule } from '@angular/core'

import { PRIMENG_IMPORTS } from "../../primeng-imports"

import { SharedModule } from "../../shared/shared.module"

import { SegurancaRoutingModule } from "./seguranca-routing.module"

import { LoginFormComponent } from './login-form/login-form.component'



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    PRIMENG_IMPORTS,

    SharedModule,

    SegurancaRoutingModule,
  ]
})
export class SegurancaModule { }
