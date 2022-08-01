import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { Injectable } from '@angular/core'
import { DatePipe } from "@angular/common"

export class LancamentoFilter {
  codigo?: number
  descricao?: string
  dataVencimentoDe?: Date
  dataVencimentoAte?: Date
  pagina: number = 0
  itensPorPagina: number = 5
}

@Injectable({
  providedIn: 'root'
})

export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos'
  headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) { }

  pesquisar(filtro: LancamentoFilter): Promise<any> {
    this.headers

    let params = new HttpParams()
      .set('page', filtro.pagina)
      .set('size', filtro.itensPorPagina)

    if (filtro.descricao) {
      params = params.set('descricao', filtro.descricao)
    }

    if (filtro.dataVencimentoDe) {
      params = params.set('dataVencimentoDe', this.datePipe.transform(filtro.dataVencimentoDe, 'yyyy-MM-dd')!)
    }

    if (filtro.dataVencimentoAte) {
      params = params.set('dataVencimentoAte', this.datePipe.transform(filtro.dataVencimentoAte, 'yyyy-MM-dd')!)
    }

    return this.http.get<any>(`${this.lancamentosUrl}?resumo`, { headers: this.headers, params })
      .toPromise().then((response : any) => {
        const lancamentos = response['content']

        const resultado = {
          lancamentos,
          total: response['totalElements']
        }

        return resultado
      })

  }

  excluir(codigo: number): Promise<void> {
    this.headers
    return this.http.delete<void>(`${this.lancamentosUrl}/${codigo}`, { headers: this.headers })
      .toPromise()

  }
}
