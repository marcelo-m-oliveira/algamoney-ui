import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-nao-autorizado',
  template: `
    <main>
      <section>
        <p-card styleClass="card not-found" header="403 Acesso não autorizado">
          <div class="grid itens-card">
            <div class="col-12">
              <h2 class="text-center">
                A página que você está procurando não pode ser acessada por falta de permissão
              </h2>
            </div>
            <div class="col-12">
              <p class="itens-centro">
                A página que você está procurando não pode ser acessada. Você pode não
                ter acesso suficiente para acessar essa página. Talvez você possa
                retornar à página inicial do site e ver se consegue encontrar
                o que está procurando.
              </p>
            </div>
            <div class="col-12 itens-centro">
              <p-button class="mr-5 mb-5" label="Voltar à página inicial" routerLink="/"></p-button>
            </div>
          </div>
        </p-card>
      </section>
    </main>
  `,
  styles: [
  ]
})
export class NaoAutorizadoComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('403 Acesso não autorizado')
  }
}
