import { Component, OnInit } from '@angular/core'
import { Title } from "@angular/platform-browser"
import { Router } from "@angular/router"

import { ErrorHandlerService } from "../../../core/error-handler.service"
import { SegurancaService } from "../../seguranca.service"

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {

  constructor(
    private router: Router,
    private title: Title,

    private errorHandlerService: ErrorHandlerService,
    private segurancaService: SegurancaService,
    ) { }

  ngOnInit(): void {
    this.title.setTitle('Login')
  }

  login(usuario: string, senha: string) {
    this.segurancaService.login(usuario, senha)
      .then(() => {
        this.router.navigate(['/lancamentos'])
      })
      .catch(error => {
        this.errorHandlerService.handle(error)
      })
  }
}
