import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    {
      tipo: 'DESPESA', descricao: 'Compra de um celular', dataVencimento: new Date(2022, 6, 30),
      dataPagamento: new Date(2022, 6, 10), valor: 1900, pessoa: 'SAMSUNG'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2022, 7 , 10),
      dataPagamento: new Date(2022, 7, 1), valor: 3000, pessoa: 'IMAGE2'
    },
    {
      tipo: 'DESPESA', descricao: 'Internet', dataVencimento: new Date(2022, 6, 22),
      dataPagamento: new Date(2022, 6, 10), valor: 80, pessoa: 'Velho ponto net'
    },
    {
      tipo: 'DEFESA', descricao: 'Namoro', dataVencimento: new Date(2022, 6, 12),
      dataPagamento: new Date(2022, 6, 11), valor: 1200, pessoa: 'Kamila'
    },
    {
      tipo: 'RECEITA', descricao: 'Socorro de Jesus', dataVencimento: new Date(2022, 7, 10),
      dataPagamento: new Date(2022, 6, 30), valor: 4000, pessoa: 'Jesus'
    },
  ]
}
