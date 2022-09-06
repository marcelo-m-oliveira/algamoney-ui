import { JwtHelperService, JwtModule } from '@auth0/angular-jwt'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { PRIMENG_IMPORTS } from '../../primeng-imports'

import { SharedModule } from '../../shared/shared.module'

import { SegurancaRoutingModule } from './seguranca-routing.module'

import { MoneyHttpInterceptor } from './money-http-interceptor'
import { SegurancaGuard } from './seguranca.guard'

import { LoginFormComponent } from './login-form/login-form.component'

export function tokenGetter(): string {
  return localStorage.getItem('token')!
}

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['http://localhost:8080/oauth/token']
      }
    }),

    PRIMENG_IMPORTS,

    SharedModule,

    SegurancaRoutingModule,
  ],
  providers: [
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MoneyHttpInterceptor,
      multi: true
    },
    SegurancaGuard,
  ],
})

export class SegurancaModule { }
