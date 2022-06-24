import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lancamentos = [
    {
      tipo: 'DESPESA', descricao: 'Compra de um celular', dataVencimento: '30/06/2022',
      dataPagamento: null, valor: 1900, pessoa: 'SAMSUNG'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '10/07/2022',
      dataPagamento: null, valor: 3000, pessoa: 'IMAGE2'
    },
    {
      tipo: 'DESPESA', descricao: 'Internet', dataVencimento: '27/06/2022',
      dataPagamento: null, valor: 80, pessoa: 'Velho ponto net'
    },
    {
      tipo: 'DEFESA', descricao: 'Namoro', dataVencimento: '12/06/2022',
      dataPagamento: null, valor: 1200, pessoa: 'Kamila'
    },
    {
      tipo: 'RECEITA', descricao: 'Socorro de Jesus', dataVencimento: '10/07/2022',
      dataPagamento: null, valor: 4000, pessoa: 'Jesus'
    },
  ]
}
