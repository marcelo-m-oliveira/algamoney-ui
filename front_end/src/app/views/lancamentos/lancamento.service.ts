import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { Injectable } from '@angular/core'
import { DatePipe } from "@angular/common"


export interface LancamentoFilter {
  descricao?: string
  dataVencimentoDe?: Date
  dataVencimentoAte?: Date
}

@Injectable({
  providedIn: 'root'
})

export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos'

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) { }

  visualizar(filtro: LancamentoFilter): Promise<any> {
    let params = new HttpParams()
    const headers = new HttpHeaders().
    append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')

    if (filtro.descricao) {
      params = params.set('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoDe) {
      params = params.set('dataVencimentoDe', this.datePipe.transform(filtro.dataVencimentoDe, 'yyyy-MM-dd')!);
    }

    if (filtro.dataVencimentoAte) {
      params = params.set('dataVencimentoAte', this.datePipe.transform(filtro.dataVencimentoAte, 'yyyy-MM-dd')!);
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`, { headers, params })
      .toPromise().then((response : any) => response['content']);

  }
}
