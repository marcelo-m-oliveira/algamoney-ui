import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { ErrorHandlerService } from '../error-handler.service'

import { SegurancaService } from '../../views/seguranca.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exibindoMenu: boolean = false
  usuarioLogado!: string

  constructor(
    private errorHandler: ErrorHandlerService,

    private router: Router,

    private segurancaService: SegurancaService,
    ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.segurancaService.jwtPayload?.nome
  }

  temPermissao(permissao: string): string {
    return this.segurancaService.temPermissao(permissao)
  }

  logout() {
    this.segurancaService.logout()
      .then(() => {
        this.router.navigate(['/login'])
      }).catch(error => this.errorHandler.handle(error))
  }

}
