import { HttpClient, HttpHeaders } from '@angular/common/http'
import { JwtHelperService } from '@auth0/angular-jwt'
import { Injectable } from '@angular/core'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SegurancaService {

  segurancaTokenUrl: string
  tokensRevokeUrl: string

  jwtPayload: any

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
  ) {
    this.segurancaTokenUrl = `${environment.apiUrl}/oauth/token`
    this.tokensRevokeUrl = `${environment.apiUrl}/tokens/revoke`

    this.carregarToken()
  }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==')

    const body = `username=${usuario}&password=${senha}&grant_type=password`

    return this.http.post(this.segurancaTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then((response: any) => {
        this.armazenarToken(response['access_token'])
      })
      .catch(response => {
        if (response.status === 400) {
          if (response.error.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida!')
          }
        }
        return Promise.reject(response)
      })
  }

  logout() {
    return this.http.delete(this.tokensRevokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.limparAccessToken()
      })
  }

  obterNovoAccessToken(): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = 'grant_type=refresh_token';

    return this.http.post<any>(this.segurancaTokenUrl, body, { headers, withCredentials: true })
      .toPromise().then((response: any) => {
        this.armazenarToken(response['access_token']);

        console.log('Novo access token criado!');

        return Promise.resolve();
      })
      .catch(response => {
        console.error('Erro ao renovar token.', response);
        return Promise.resolve();
      });
  }

  isAccessTokenInvalido(): boolean {
    const token = localStorage.getItem('token')
    return !token || this.jwtHelper.isTokenExpired(token)
  }

  temPermissao(permissao: string): string {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao)
  }

  temQualquerPermissao(roles: any): boolean {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true
      }
    }
    return false
  }

  private armazenarToken(token: string): void {
    this.jwtPayload = this.jwtHelper.decodeToken(token)

    localStorage.setItem('token', token)
  }

  private carregarToken(): void {
    const token = localStorage.getItem('token')

    if (token) this.armazenarToken(token)
  }

  limparAccessToken() {
    localStorage.removeItem('token')
    this.jwtPayload = null
  }


}
