import { Component, OnInit } from '@angular/core'

import { SegurancaService } from "../../views/seguranca.service"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exibindoMenu: boolean = false
  usuarioLogado!: string

  constructor(private segurancaService: SegurancaService) { }

  ngOnInit(): void {
    this.usuarioLogado = this.segurancaService.jwtPayload?.nome
  }

  permissao(permissao: string): void {
    return this.segurancaService.temPermissao(permissao)
  }
}
