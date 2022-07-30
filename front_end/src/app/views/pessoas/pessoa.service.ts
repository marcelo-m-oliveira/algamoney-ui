import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"

export class PessoasFilter {
  nome?: string
  pagina: number = 0
  itensPorPagina: number = 5
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl = 'http://localhost:8080/pessoas'
  headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')

  constructor(
    private http: HttpClient,
  ) { }

  pesquisar(filtro: PessoasFilter): Promise<any> {
    this.headers

    let params = new HttpParams()
      .set('page', filtro.pagina)
      .set('size', filtro.itensPorPagina)

    if (filtro.nome) {
      params = params.set('nome', filtro.nome)
    }

    return this.http.get(`${this.pessoasUrl}?resumo`, { headers: this.headers, params })
      .toPromise().then((response: any) => {
        const pessoas = response['content']

        const resultado = {
          pessoas,
          total: response['totalElements']
        }

        return resultado
      })
  }

  listarTodos(): Promise<any> {
    this.headers

    return this.http.get(this.pessoasUrl, { headers: this.headers })
      .toPromise().then((response: any) => response['content']
      )
  }

}