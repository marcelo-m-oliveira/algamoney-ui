import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriasUrl = 'http://localhost:8080/categorias'
  headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')

  constructor(
    private http: HttpClient,
  ) { }

  listarTodos(): Promise<any> {
    this.headers

    return this.http.get<any>(this.categoriasUrl, { headers: this.headers })
      .toPromise()
  }
}
