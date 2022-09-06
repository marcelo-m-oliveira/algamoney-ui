import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriasUrl: string
  headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')

  constructor(
    private http: HttpClient,
  ) {
    this.categoriasUrl = `${environment.apiUrl}/categorias`
  }

  listarTodos(): Promise<any> {
    this.headers

    return this.http.get<any>(this.categoriasUrl, { headers: this.headers })
      .toPromise()
  }
}
