import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"

import { TranslateService } from "@ngx-translate/core"
import { PrimeNGConfig } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  constructor(
    private primengConfig: PrimeNGConfig,
    private translateService: TranslateService,
    private router: Router,

  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true
    this.translate('pt')
  }

  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService.get('primeng').subscribe(res => this.primengConfig.setTranslation(res))
  }

  exibindoNavbar() {
    return this.router.url !== '/login'
  }
}
