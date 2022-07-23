import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-form',
  templateUrl: './lancamentos-form.component.html',
})
export class LancamentosFormComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'TP1' },
    { label: 'Despesa', value: 'TP2' }
  ]

  categorias = [
    { label: 'Alimentação', value: 'CT1' },
    { label: 'Transporte', value: 'CT2' }
  ]

  pessoas = [
    { label: 'Marcelo Oliveira', value: 'PS1' },
    { label: 'Kamila Kelly', value: 'PS2' },
    { label: 'Batata Silva', value: 'PS3' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
