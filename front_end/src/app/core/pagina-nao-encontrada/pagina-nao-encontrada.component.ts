import { Component } from '@angular/core'

@Component({
  selector: 'app-pagina-nao-encontrada',
  template: `
    <main>
      <section>
        <p-card styleClass="card not-found" header="404 Página Não Encontrada">
          <div class="grid itens-card">
            <div class="col-12">
              <h2 class="text-center">
                A página que você está procurando não foi encontrada
              </h2>
            </div>
            <div class="col-12">
              <p class="texto-centro">
                A página que você está procurando não existe. Ele pode
                ter sido movido ou removido completamente. Talvez você possa
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
  `
  ,
  styles: [
  ]
})
export class PaginaNaoEncontradaComponent {

  constructor() { }

}
