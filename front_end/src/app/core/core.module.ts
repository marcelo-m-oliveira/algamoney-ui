import { CommonModule, DatePipe, registerLocaleData } from '@angular/common'
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core'
import ptBr from '@angular/common/locales/pt'

import { NavbarComponent } from "./navbar/navbar.component"

registerLocaleData(ptBr, 'pt-BR')

@NgModule({
  declarations: [
    NavbarComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    DatePipe,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
})
export class CoreModule { }
