import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { SegurancaService } from '../seguranca.service'

@Injectable({
  providedIn: 'root'
})
export class SegurancaGuard implements CanActivate {

  constructor(
    private segurancaService: SegurancaService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.segurancaService.isAccessTokenInvalido()) {
      console.log('Navegação com access token inválido. Obtendo novo token...')

      return this.segurancaService.obterNovoAccessToken()
        .then(() => {
          if (this.segurancaService.isAccessTokenInvalido()) {
            this.router.navigate(['/login'])
            return false
          }

          return this.podeAcessarRota(next.data['roles'])
        })
    }

    return this.podeAcessarRota(next.data['roles'])
  }

  podeAcessarRota(roles: string[]): boolean {
    if (roles && !this.segurancaService.temQualquerPermissao(roles)) {
      this.router.navigate(['/nao-autorizado'])
      return false
    }

    return true
  }

}
