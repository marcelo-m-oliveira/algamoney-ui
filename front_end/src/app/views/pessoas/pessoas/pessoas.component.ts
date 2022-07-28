import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
})
export class PessoasComponent {

  pessoas = [
    {
      pessoa: 'Marcelo Oliveira', cidade: 'Salvador', estado: 'BA', status: true,
    },
    {
      pessoa: 'Kamila Kelly', cidade: 'Feira de Santana', estado: 'BA', status: true,
    },
    {
      pessoa: 'Batata', cidade: 'São Paulo', estado: 'SP', status: false,
    },
    {
      pessoa: 'Amanda', cidade: 'Brasilia', estado: 'DF', status: true,
    },
    {
      pessoa: 'Goku', cidade: 'Belo Horizonte', estado: 'BH', status: false,
    },
  ]
}
