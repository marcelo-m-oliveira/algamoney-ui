import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lancamentos-tabela',
  templateUrl: './lancamentos-tabela.component.html',
  styles: [
  ]
})
export class LancamentosTabelaComponent {

  @Input() lancamentos = [];
}
