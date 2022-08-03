import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { Injectable } from '@angular/core'
import { DatePipe } from "@angular/common"

import { Lancamento } from "../../core/model"

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

  adicionar(lancamento: Lancamento): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.post<Lancamento>(this.lancamentosUrl, lancamento, { headers })
      .toPromise()
  }

  atualizar(lancamento: Lancamento): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.put<Lancamento>(`${this.lancamentosUrl}/${lancamento.codigo}`, lancamento, { headers })
      .toPromise()
  }

  buscarPorCodigo(codigo: number): Promise<Lancamento> {
    return this.http.get<Lancamento>(`${this.lancamentosUrl}/${codigo}`, { headers: this.headers })
      .toPromise()
      .then((response:any) => {
        this.converterStringsParaDatas([response]);

        return response
      });
  }

  private converterStringsParaDatas(lancamentos: Lancamento[]): void {
    for (const lancamento of lancamentos) {
      lancamento.dataVencimento = new Date(lancamento.dataVencimento)
      if (lancamento.dataPagamento) lancamento.dataPagamento = new Date(lancamento.dataPagamento)
    }
  }

  excluir(codigo: number): Promise<Lancamento | undefined> {
    return this.http.delete<Lancamento>(`${this.lancamentosUrl}/${codigo}`, { headers: this.headers })
      .toPromise()

  }
}
