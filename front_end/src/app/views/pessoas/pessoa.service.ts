import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

import { Pessoa } from '../../core/model'

import { environment } from '../../../environments/environment'

export class PessoasFilter {
  nome?: string
  pagina: number = 0
  itensPorPagina: number = 5
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl: string
  headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')

  constructor(
    private http: HttpClient,
  ) {
    this.pessoasUrl = `${environment.apiUrl}/pessoas`
  }

  pesquisar(filtro: PessoasFilter): Promise<any> {
    this.headers

    let params = new HttpParams()
      .set('page', filtro.pagina)
      .set('size', filtro.itensPorPagina)

    if (filtro.nome) {
      params = params.set('nome', filtro.nome)
    }

    return this.http.get<any>(`${this.pessoasUrl}?resumo`, { headers: this.headers, params })
      .toPromise().then((response: any) => {
        const pessoas = response['content']

        const resultado = {
          pessoas,
          total: response['totalElements']
        }
        return resultado
      })
  }

  adicionar(pessoa: Pessoa): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.post<Pessoa>(this.pessoasUrl, pessoa, { headers })
      .toPromise()
  }

  atualizar(pessoa: Pessoa): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.put<Pessoa>(`${this.pessoasUrl}/${pessoa.codigo}`, pessoa, { headers })
      .toPromise()
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get<Pessoa>(`${this.pessoasUrl}/${codigo}`, { headers:this.headers })
      .toPromise()

  }

  listarTodos(): Promise<any> {
    this.headers

    return this.http.get<any>(this.pessoasUrl, { headers: this.headers })
      .toPromise().then((response: any) => response['content']
      )
  }

  mudarStatus(codigo: number, ativo: boolean): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json')

    return this.http.put<void>(`${this.pessoasUrl}/${codigo}/ativo`, ativo, { headers })
      .toPromise()
  }

  excluir(codigo: number): Promise<void> {
    this.headers
    return this.http.delete<void>(`${this.pessoasUrl}/${codigo}`, { headers: this.headers })
      .toPromise()

  }
}
