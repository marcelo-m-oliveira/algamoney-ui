import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { mergeMap } from 'rxjs/operators'
import { Observable, from } from 'rxjs'

import { SegurancaService } from '../seguranca.service'

export class NotAuthenticatedError {}

@Injectable()
export class MoneyHttpInterceptor implements HttpInterceptor {

  constructor(private segurancaService: SegurancaService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('/oauth/token') && this.segurancaService.isAccessTokenInvalido()) {
      return from(this.segurancaService.obterNovoAccessToken())
        .pipe(
          mergeMap(() => {
            if (this.segurancaService.isAccessTokenInvalido()) {
              throw new NotAuthenticatedError()
            }

            req = req.clone({
              setHeaders: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            })

            return next.handle(req)
          })
        )
    }
    return next.handle(req)
  }
}