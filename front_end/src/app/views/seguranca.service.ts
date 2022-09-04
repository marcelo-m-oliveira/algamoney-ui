import { HttpClient, HttpHeaders } from "@angular/common/http"
import { JwtHelperService } from '@auth0/angular-jwt'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SegurancaService {

  segurancaTokenUrl = 'http://localhost:8080/oauth/token'
  jwtPayload: any

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
  ) {
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

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token')
    return !token || this.jwtHelper.isTokenExpired(token)
  }

  temPermissao(permissao: string): void {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao)
  }

  private armazenarToken(token: string): void {
    this.jwtPayload = this.jwtHelper.decodeToken(token)

    localStorage.setItem('token', token)
  }

  private carregarToken() {
    const token = localStorage.getItem('token')

    if (token) this.armazenarToken(token)
  }
}
