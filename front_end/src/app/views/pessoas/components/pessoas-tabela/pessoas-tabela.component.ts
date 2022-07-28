import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pessoas-tabela',
  templateUrl: './pessoas-tabela.component.html',
  styles: [
  ]
})
export class PessoasTabelaComponent {

  @Input() pessoas: any[] = [];
}
